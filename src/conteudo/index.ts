import type { Idioma } from "./config";
import type { Conteudo } from "./tipos";
import { pt } from "./pt";
import { en } from "./en";
import { es } from "./es";

export const CONTEUDOS: Record<Idioma, Conteudo> = { pt, en, es };
export type { Conteudo };
