/* =====================================================================
   Gera o HTML final de cada página, em cada idioma.

   O Vite entrega um index.html com os assets certos e um bundle de
   servidor em dist-ssr. Aqui juntamos os dois: o conteúdo entra pronto
   no HTML, com as metas, o hreflang e o canonical de cada endereço.
   Resultado: a página é lida por buscador e por leitor de tela mesmo
   com o JavaScript desligado.
   ===================================================================== */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = resolve(aqui, "..");
const dist = resolve(raiz, "dist");

const { renderizar } = await import(pathToFileURL(resolve(raiz, "dist-ssr/entrada-servidor.js")).href);

const ORIGEM = "https://seashell-buffalo-304816.hostingersite.com";
const IDIOMAS = [
  { id: "pt", htmlLang: "pt-BR", ogLocale: "pt_BR", prefixo: "" },
  { id: "en", htmlLang: "en", ogLocale: "en_US", prefixo: "en/" },
  { id: "es", htmlLang: "es", ogLocale: "es_ES", prefixo: "es/" },
];
const PAGINAS = [
  { id: "home", arquivo: "index.html", indexar: true },
  { id: "privacidade", arquivo: "privacidade.html", indexar: true },
  { id: "erro", arquivo: "404.html", indexar: false },
];

const modelo = readFileSync(resolve(dist, "index.html"), "utf8");

function escapar(texto) {
  return texto.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function enderecoDe(idioma, pagina) {
  const base = `${ORIGEM}/${idioma.prefixo}`;
  return pagina.id === "home" ? base : `${base}${pagina.arquivo}`;
}

function cabeca(idioma, pagina, c, url) {
  const titulo =
    pagina.id === "home"
      ? c.meta.titulo
      : pagina.id === "privacidade"
        ? `${c.privacidade.titulo} · Códice`
        : `${c.erro404.titulo} · Códice`;
  const descricao = pagina.id === "home" ? c.meta.descricao : pagina.id === "privacidade" ? c.privacidade.blocos[0].texto : c.erro404.texto;

  const alternativos = IDIOMAS.map(
    (outro) => `    <link rel="alternate" hreflang="${outro.htmlLang}" href="${enderecoDe(outro, pagina)}" />`,
  ).join("\n");

  const dadosEstruturados = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Códice",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: c.meta.descricao,
    url: `${ORIGEM}/${idioma.prefixo}`,
    inLanguage: idioma.htmlLang,
    publisher: {
      "@type": "Organization",
      name: "75 LAB",
      url: "https://75lab.com.br",
      email: "contato@75lab.com.br",
      sameAs: ["https://www.linkedin.com/company/75lab", "https://www.instagram.com/setecincolab/"],
    },
  };

  return `    <title>${escapar(titulo)}</title>
    <meta name="description" content="${escapar(descricao)}" />
    <meta name="keywords" content="${escapar(c.meta.palavras)}" />
    <meta name="author" content="75 LAB" />
    <meta name="robots" content="${pagina.indexar ? "index, follow" : "noindex, follow"}" />
    <link rel="canonical" href="${url}" />
${alternativos}
    <link rel="alternate" hreflang="x-default" href="${ORIGEM}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Códice" />
    <meta property="og:locale" content="${idioma.ogLocale}" />
    <meta property="og:title" content="${escapar(titulo)}" />
    <meta property="og:description" content="${escapar(descricao)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${ORIGEM}/og.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapar(c.meta.ogAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapar(titulo)}" />
    <meta name="twitter:description" content="${escapar(descricao)}" />
    <meta name="twitter:image" content="${ORIGEM}/og.png" />
    <link rel="preload" as="font" type="font/woff2" href="/fontes/exo2-latin.woff2" crossorigin />
    <link rel="preload" as="font" type="font/woff2" href="/fontes/inter-latin.woff2" crossorigin />
    <script type="application/ld+json">${JSON.stringify(dadosEstruturados)}</script>
    <noscript><style>.revelar{opacity:1;transform:none}.cortina>span>span{transform:none}</style></noscript>`;
}

let geradas = 0;
for (const idioma of IDIOMAS) {
  for (const pagina of PAGINAS) {
    const { html, conteudo } = renderizar(idioma.id, pagina.id);
    const url = enderecoDe(idioma, pagina);

    const saida = modelo
      .replace('<html lang="pt-BR" data-idioma="pt" data-pagina="home">', `<html lang="${idioma.htmlLang}" data-idioma="${idioma.id}" data-pagina="${pagina.id}">`)
      .replace("    <title>Códice</title>", cabeca(idioma, pagina, conteudo, url))
      .replace('<div id="raiz"></div>', `<div id="raiz">${html}</div>`);

    const destino = resolve(dist, idioma.prefixo, pagina.arquivo);
    mkdirSync(dirname(destino), { recursive: true });
    writeFileSync(destino, saida, "utf8");
    geradas += 1;
  }
}

/* ------------------------------------------------ sitemap e robots */
const urls = IDIOMAS.flatMap((idioma) =>
  PAGINAS.filter((p) => p.indexar).map((pagina) => ({ url: enderecoDe(idioma, pagina), idioma, pagina })),
);
const hoje = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    ({ url, pagina }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${pagina.id === "home" ? "1.0" : "0.4"}</priority>
${IDIOMAS.map((outro) => `    <xhtml:link rel="alternate" hreflang="${outro.htmlLang}" href="${enderecoDe(outro, pagina)}" />`).join("\n")}
  </url>`,
  )
  .join("\n")}
</urlset>
`;
writeFileSync(resolve(dist, "sitemap.xml"), sitemap, "utf8");

writeFileSync(
  resolve(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${ORIGEM}/sitemap.xml\n`,
  "utf8",
);

/* Configuração do servidor: página de erro, compressão e cache. */
writeFileSync(
  resolve(dist, ".htaccess"),
  `ErrorDocument 404 /404.html

<IfModule mod_headers.c>
  <FilesMatch "\\.(html)$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>
  <FilesMatch "\\.(js|css|woff2|png|svg|jpg|webp)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml application/json
</IfModule>
`,
  "utf8",
);

rmSync(resolve(raiz, "dist-ssr"), { recursive: true, force: true });
console.log(`prerender: ${geradas} páginas, sitemap e robots gerados.`);
