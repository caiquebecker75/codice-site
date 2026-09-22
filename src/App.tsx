import { Cabecalho } from "./componentes/Cabecalho";
import { Cursor } from "./componentes/Cursor";
import { Heroi, Prova } from "./secoes/Topo";
import { BotaoFlutuante, Chamada, Como, Entrega, Numeros } from "./secoes/Home";
import { Plataforma } from "./secoes/Plataforma";
import { Displays, Planos } from "./secoes/Produto";
import { Conta } from "./secoes/Conta";
import { Conversao, Faq, Rodape } from "./secoes/Fim";
import { CONTEUDOS } from "./conteudo";
import type { Idioma } from "./conteudo/config";

export type Pagina = "home" | "privacidade" | "erro";

export interface Props {
  idioma: Idioma;
  pagina: Pagina;
}

/** Endereço de cada página, sempre a partir da raiz do domínio. */
export function endereco(idioma: Idioma, pagina: Pagina): string {
  const prefixo = idioma === "pt" ? "/" : `/${idioma}/`;
  if (pagina === "privacidade") return `${prefixo}privacidade.html`;
  if (pagina === "erro") return `${prefixo}404.html`;
  return prefixo;
}

export function App({ idioma, pagina }: Props) {
  const c = CONTEUDOS[idioma];
  const paraIdioma = (destino: Idioma) => endereco(destino, pagina === "erro" ? "home" : pagina);
  const inicio = pagina === "home" ? "#topo" : endereco(idioma, "home");
  const ancora = pagina === "home" ? "" : endereco(idioma, "home");

  if (pagina === "privacidade") {
    return (
      <>
        <Cursor />
        <Cabecalho c={c} idioma={idioma} caminhoIdioma={paraIdioma} inicio={inicio} ancora={ancora} />
        <main id="conteudo" className="bg-white pt-[110px]">
          <div className="env secao !pt-4">
            <p className="chapeu">{c.rodape.privacidade}</p>
            <h1 className="titulo-menor mt-4 max-w-[18ch] text-navy">{c.privacidade.titulo}</h1>
            <p className="mt-3 text-[14px] text-tinta-3">{c.privacidade.atualizado}</p>

            <div className="mt-10 grid max-w-3xl gap-8">
              {c.privacidade.blocos.map((bloco) => (
                <section key={bloco.titulo}>
                  <h2 className="font-display text-[20px] font-bold text-navy">{bloco.titulo}</h2>
                  <p className="mt-2.5 text-[16px] leading-relaxed text-tinta-2">{bloco.texto}</p>
                </section>
              ))}
            </div>

            <a href={endereco(idioma, "home")} className="botao botao-tinta mt-10">
              {c.privacidade.voltar}
            </a>
          </div>
        </main>
        <Rodape c={c} idioma={idioma} caminhoIdioma={paraIdioma} linkPrivacidade={endereco(idioma, "privacidade")} inicio={inicio} ancora={ancora} />
      </>
    );
  }

  if (pagina === "erro") {
    return (
      <>
        <Cursor />
        <main className="grid min-h-screen place-items-center bg-white">
          <div className="env text-center">
            <p className="font-display text-[clamp(80px,16vw,170px)] font-extrabold leading-none text-papel-2">404</p>
            <h1 className="titulo-menor mt-4 text-navy">{c.erro404.titulo}</h1>
            <p className="lead mx-auto mt-4 max-w-[44ch]">{c.erro404.texto}</p>
            <a href={endereco(idioma, "home")} className="botao mt-8">
              {c.erro404.voltar}
            </a>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <a href="#conteudo" className="pular-para">
        {c.nav.irParaConteudo}
      </a>
      <Cursor />
      <Cabecalho c={c} idioma={idioma} caminhoIdioma={paraIdioma} />
      <main id="conteudo">
        <Heroi c={c} />
        <Prova c={c} />
        <Como c={c} />
        <Entrega c={c} />
        <Chamada c={c} titulo={c.conta.titulo} tom="navy" />
        <Plataforma c={c} />
        <Displays c={c} />
        <Planos c={c} />
        <Conta c={c} />
        <Numeros c={c} />
        <Faq c={c} />
        <Conversao c={c} />
      </main>
      <Rodape c={c} idioma={idioma} caminhoIdioma={paraIdioma} linkPrivacidade={endereco(idioma, "privacidade")} />
      <BotaoFlutuante c={c} />
    </>
  );
}
