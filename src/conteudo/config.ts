/* =====================================================================
   Ponto único de edição de contatos, links e endereços do site.
   Mexer aqui muda o site inteiro, nos três idiomas.

   PROVISÓRIO: os itens marcados com PENDENTE ainda não têm dado oficial.
   Preencher aqui e publicar; nenhum outro arquivo precisa mudar.
   ===================================================================== */

export const SITE = {
  /** Endereço público. Trocar quando o domínio próprio entrar no ar. */
  origem: "https://seashell-buffalo-304816.hostingersite.com",
  marca: "Códice",
  operadora: "75 LAB",
} as const;

export const CONTATO = {
  email: "contato@75lab.com.br",
  /** PENDENTE: número oficial de WhatsApp. Vazio esconde o botão. */
  whatsapp: "",
  instagram: "https://www.instagram.com/setecincolab/",
  linkedin: "https://www.linkedin.com/company/75lab",
  site75lab: "https://75lab.com.br",
  base: "São Paulo · BR",
} as const;

/** Sistema no ar, para onde vai o botão de entrar. */
export const PLATAFORMA = "https://75lab-com-br-944679.hostingersite.com";

export type Idioma = "pt" | "en" | "es";

export const IDIOMAS: { id: Idioma; rotulo: string; htmlLang: string; caminho: string }[] = [
  { id: "pt", rotulo: "PT", htmlLang: "pt-BR", caminho: "/" },
  { id: "en", rotulo: "EN", htmlLang: "en", caminho: "/en/" },
  { id: "es", rotulo: "ES", htmlLang: "es", caminho: "/es/" },
];

/** Prefixo de link para o idioma corrente (o prerender serve em subpasta). */
export function raiz(idioma: Idioma): string {
  return idioma === "pt" ? "./" : "./";
}

/** Caminho absoluto de uma página, usado em sitemap, canonical e hreflang. */
export function urlDe(idioma: Idioma, pagina: "home" | "privacidade" = "home"): string {
  const base = IDIOMAS.find((i) => i.id === idioma)!.caminho;
  return SITE.origem + base + (pagina === "privacidade" ? "privacidade.html" : "");
}
