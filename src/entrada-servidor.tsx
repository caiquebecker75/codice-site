import { renderToString } from "react-dom/server";
import { App, type Pagina } from "./App";
import { CONTEUDOS } from "./conteudo";
import type { Idioma } from "./conteudo/config";

/** Usado por scripts/prerender.mjs para gerar cada página estática. */
export function renderizar(idioma: Idioma, pagina: Pagina) {
  return {
    html: renderToString(<App idioma={idioma} pagina={pagina} />),
    conteudo: CONTEUDOS[idioma],
  };
}
