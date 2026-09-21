import { hydrateRoot } from "react-dom/client";
import { App, type Pagina } from "./App";
import type { Idioma } from "./conteudo/config";
import "./estilos/global.css";

/* O HTML já chega pronto do build; aqui só ligamos a interação. */
const raiz = document.getElementById("raiz");
const idioma = (document.documentElement.dataset.idioma ?? "pt") as Idioma;
const pagina = (document.documentElement.dataset.pagina ?? "home") as Pagina;

if (raiz) hydrateRoot(raiz, <App idioma={idioma} pagina={pagina} />);
