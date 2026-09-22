import { useEffect, useRef, useState } from "react";
import { Simbolo } from "./Marca";
import { Icone } from "./Icones";
import { useProgresso, useSecaoAtiva } from "../hooks/uso";
import { CONTATO, IDIOMAS, type Idioma } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Barra do topo, clara e discreta: marca, capítulos, idioma e a
   chamada principal sempre à vista. No celular vira um painel inteiro,
   com foco preso e fechamento pelo Esc.
   ===================================================================== */

export function Cabecalho({
  c,
  idioma,
  caminhoIdioma,
  inicio = "#topo",
  ancora = "",
}: {
  c: Conteudo;
  idioma: Idioma;
  caminhoIdioma: (destino: Idioma) => string;
  inicio?: string;
  ancora?: string;
}) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const progresso = useProgresso();
  const ativa = useSecaoAtiva(c.nav.links.map((l) => l.id));
  const painel = useRef<HTMLDivElement>(null);
  const botaoMenu = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || aberto ? "bg-white/92 backdrop-blur-xl shadow-[0_1px_0_rgba(6,27,73,.08)]" : "bg-white"
      }`}
    >
      <div className="env flex h-[70px] items-center gap-6">
        <a href={inicio} className="flex shrink-0 items-center gap-2.5" aria-label="Códice">
          <Simbolo className="h-8 w-8" />
          <span className="font-display text-[21px] font-extrabold tracking-tight text-navy">Códice</span>
        </a>

        <nav aria-label="Principal" className="ml-auto hidden items-center gap-7 lg:flex">
          {c.nav.links.map((link) => (
            <a
              key={link.id}
              href={`${ancora}#${link.id}`}
              className={`py-2 text-[14.5px] font-medium transition-colors ${
                ativa === link.id ? "text-azul" : "text-tinta-2 hover:text-navy"
              }`}
              aria-current={ativa === link.id ? "true" : undefined}
            >
              {link.rotulo}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2.5 lg:ml-0">
          <div className="hidden items-center rounded-full bg-papel-2 p-1 sm:flex" role="group" aria-label={c.nav.idioma}>
            {IDIOMAS.map((item) => (
              <a
                key={item.id}
                href={caminhoIdioma(item.id)}
                hrefLang={item.htmlLang}
                lang={item.htmlLang}
                aria-current={item.id === idioma ? "true" : undefined}
                className={`rounded-full px-2.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
                  item.id === idioma ? "bg-white text-navy shadow-sm" : "text-tinta-3 hover:text-navy"
                }`}
              >
                {item.rotulo}
              </a>
            ))}
          </div>

          <a href={`${ancora}#falar`} className="botao hidden !px-5 !py-3 text-[14.5px] sm:inline-flex">
            {c.nav.cta}
          </a>

          <button
            ref={botaoMenu}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full bg-papel-2 text-navy lg:hidden"
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

      <div className="h-px w-full bg-tinta/8" aria-hidden="true">
        <div className="h-px bg-azul transition-[width] duration-150" style={{ width: `${progresso * 100}%` }} />
      </div>

      {aberto && (
        <div id="menu-movel" ref={painel} className="lg:hidden">
          <div className="env flex flex-col gap-1 border-t border-tinta/8 bg-white pb-8 pt-3">
            {c.nav.links.map((link) => (
              <a
                key={link.id}
                href={`${ancora}#${link.id}`}
                onClick={() => setAberto(false)}
                className="flex items-center justify-between border-b border-tinta/8 py-4 text-[19px] font-semibold text-navy"
              >
                {link.rotulo}
                <Icone nome="seta" className="h-4 w-4 text-tinta-3" />
              </a>
            ))}
            <a href={`${ancora}#falar`} onClick={() => setAberto(false)} className="botao mt-5 w-full">
              {c.nav.cta}
            </a>
            {CONTATO.whatsapp && (
              <a href={CONTATO.whatsapp} target="_blank" rel="noopener noreferrer" className="botao botao-teal mt-2.5 w-full">
                <Icone nome="whatsapp" className="h-[18px] w-[18px]" />
                {c.conversao.whatsapp}
              </a>
            )}
            <div className="mt-6 flex gap-2">
              {IDIOMAS.map((item) => (
                <a
                  key={item.id}
                  href={caminhoIdioma(item.id)}
                  hrefLang={item.htmlLang}
                  className={`rounded-full px-4 py-2 text-[13px] font-semibold ${
                    item.id === idioma ? "bg-navy text-white" : "bg-papel-2 text-tinta-2"
                  }`}
                >
                  {item.rotulo}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
