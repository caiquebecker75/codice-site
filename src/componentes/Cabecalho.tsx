import { useEffect, useRef, useState } from "react";
import { Logotipo } from "./Marca";
import { useProgresso, useSecaoAtiva } from "../hooks/uso";
import { IDIOMAS, type Idioma } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Barra fixa: navegação por capítulos, troca de idioma e chamada
   principal. No celular vira um painel inteiro, com foco preso dentro
   e fechamento pelo Esc.
   ===================================================================== */

export function Cabecalho({
  c,
  idioma,
  caminhoIdioma,
  inicio = "#topo",
  solido = false,
  ancora = "",
}: {
  c: Conteudo;
  idioma: Idioma;
  /** devolve o endereço da mesma página em outro idioma */
  caminhoIdioma: (destino: Idioma) => string;
  inicio?: string;
  /** páginas de fundo claro precisam da barra sempre preenchida */
  solido?: boolean;
  /** prefixo das âncoras: vazio na home, endereço da home nas outras páginas */
  ancora?: string;
}) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const progresso = useProgresso();
  const ativa = useSecaoAtiva(c.nav.links.map((l) => l.id));
  const painel = useRef<HTMLDivElement>(null);
  const botaoMenu = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    document.body.style.overflow = "hidden";
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botaoMenu.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !painel.current) return;
      const focaveis = painel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      if (!focaveis.length) return;
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };
    document.addEventListener("keydown", aoTeclar);
    painel.current?.querySelector<HTMLElement>("a[href]")?.focus();
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solido || rolou || aberto ? "bg-navy/92 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="env flex h-[72px] items-center gap-6">
        <a href={inicio} className="shrink-0" aria-label="Códice">
          <Logotipo />
        </a>

        <nav aria-label="Principal" className={`ml-auto hidden items-center gap-7 ${solido ? "" : "lg:flex"}`}>
          {c.nav.links.map((link) => (
            <a
              key={link.id}
              href={`${ancora}#${link.id}`}
              className={`relative py-2 text-[14.5px] font-medium transition-colors ${
                ativa === link.id ? "text-teal" : "text-white/70 hover:text-white"
              }`}
              aria-current={ativa === link.id ? "true" : undefined}
            >
              {link.rotulo}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-teal transition-all duration-300 ${
                  ativa === link.id ? "w-full" : "w-0"
                }`}
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <TrocaIdioma idioma={idioma} caminhoIdioma={caminhoIdioma} rotulo={c.nav.idioma} />
          <a href={`${ancora}#falar`} className="botao botao-teal hidden !px-5 !py-3 text-[14.5px] sm:inline-flex">
            {c.nav.cta}
          </a>
          <button
            ref={botaoMenu}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden"
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? c.nav.fecharMenu : c.nav.abrirMenu}
            onClick={() => setAberto((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {aberto ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" aria-hidden="true">
        <div className="h-px bg-teal transition-[width] duration-150" style={{ width: `${progresso * 100}%` }} />
      </div>

      {aberto && (
        <div id="menu-movel" ref={painel} className="lg:hidden">
          <div className="env flex flex-col gap-1 border-t border-white/10 bg-navy pb-8 pt-4">
            {c.nav.links.map((link, i) => (
              <a
                key={link.id}
                href={`${ancora}#${link.id}`}
                onClick={() => setAberto(false)}
                className="flex items-baseline gap-4 border-b border-white/8 py-4 text-[20px] font-semibold text-white"
              >
                <span className="num text-xs font-bold text-teal">{String(i + 1).padStart(2, "0")}</span>
                {link.rotulo}
              </a>
            ))}
            <a href={`${ancora}#falar`} onClick={() => setAberto(false)} className="botao botao-teal mt-6 w-full">
              {c.nav.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function TrocaIdioma({
  idioma,
  caminhoIdioma,
  rotulo,
}: {
  idioma: Idioma;
  caminhoIdioma: (destino: Idioma) => string;
  rotulo: string;
}) {
  return (
    <div className="flex items-center rounded-full bg-white/10 p-1" role="group" aria-label={rotulo}>
      {IDIOMAS.map((item) => {
        const atual = item.id === idioma;
        return (
          <a
            key={item.id}
            href={caminhoIdioma(item.id)}
            hrefLang={item.htmlLang}
            lang={item.htmlLang}
            aria-current={atual ? "true" : undefined}
            className={`rounded-full px-2.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
              atual ? "bg-white text-navy" : "text-white/70 hover:text-white"
            }`}
          >
            {item.rotulo}
          </a>
        );
      })}
    </div>
  );
}
