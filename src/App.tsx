import { Cabecalho } from "./componentes/Cabecalho";
import { Cursor } from "./componentes/Cursor";
import { Abertura, Heroi } from "./secoes/Topo";
import { ComoFunciona, Mudou } from "./secoes/Mercado";
import { Plataforma } from "./secoes/Plataforma";
import { Displays, Pacotes, Tecnologia } from "./secoes/Produto";
import { Contas, Industria } from "./secoes/Contas";
import { Simulador } from "./secoes/Simulador";
import { Conversao, Faq, Grupo, Honestidade, Rodape } from "./secoes/Fim";
import { Hexagono } from "./componentes/Marca";
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

  if (pagina === "privacidade") {
    return (
      <>
        <Cursor />
        <Cabecalho c={c} idioma={idioma} caminhoIdioma={paraIdioma} inicio={inicio} solido ancora={endereco(idioma, "home")} />
        <main id="conteudo" className="bg-papel pt-[132px]">
          <div className="env secao !pt-4">
            <p className="chapeu">{c.rodape.legal}</p>
            <h1 className="titulo-menor mt-6 max-w-[18ch]">{c.privacidade.titulo}</h1>
            <p className="mt-4 text-[14px] text-tinta-3">{c.privacidade.atualizado}</p>

            <div className="mt-12 grid max-w-3xl gap-9">
              {c.privacidade.blocos.map((bloco) => (
                <section key={bloco.titulo}>
                  <h2 className="font-display text-[21px] font-bold text-tinta">{bloco.titulo}</h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-tinta-2">{bloco.texto}</p>
                </section>
              ))}
            </div>

            <a href={endereco(idioma, "home")} className="botao botao-tinta mt-12">
              {c.privacidade.voltar}
            </a>
          </div>
        </main>
        <Rodape c={c} idioma={idioma} caminhoIdioma={paraIdioma} linkPrivacidade={endereco(idioma, "privacidade")} inicio={inicio} ancora={endereco(idioma, "home")} />
      </>
    );
  }

  if (pagina === "erro") {
    return (
      <>
        <Cursor />
        <main className="escuro grao relative grid min-h-screen place-items-center overflow-hidden">
          <Hexagono className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] text-white/8" />
          <div className="env relative text-center">
            <p className="font-display text-[clamp(90px,18vw,190px)] font-extrabold leading-none text-teal">404</p>
            <h1 className="titulo-menor mt-6">{c.erro404.titulo}</h1>
            <p className="lead mx-auto mt-5 max-w-[46ch]">{c.erro404.texto}</p>
            <a href={endereco(idioma, "home")} className="botao botao-teal mt-10">
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
      <Abertura c={c} />
      <Cursor />
      <Cabecalho c={c} idioma={idioma} caminhoIdioma={paraIdioma} />
      <main id="conteudo">
        <Heroi c={c} />
        <Mudou c={c} />
        <ComoFunciona c={c} />
        <Plataforma c={c} />
        <Displays c={c} />
        <Pacotes c={c} />
        <Tecnologia c={c} />
        <Contas c={c} />
        <Industria c={c} />
        <Simulador c={c} />
        <Grupo c={c} />
        <Honestidade c={c} />
        <Faq c={c} />
        <Conversao c={c} />
      </main>
      <Rodape c={c} idioma={idioma} caminhoIdioma={paraIdioma} linkPrivacidade={endereco(idioma, "privacidade")} />
    </>
  );
}
