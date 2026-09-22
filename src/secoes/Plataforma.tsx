import { useCallback, useEffect, useRef, useState } from "react";
import { Cabeca } from "./Home";
import { useAoEntrar, useMenosMovimento } from "../hooks/uso";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   As telas reais do sistema.
   Passa sozinha enquanto a pessoa lê, para no hover e no foco, e abre
   em tela cheia com setas e Esc. As imagens são capturas do sistema em
   modo demonstração, com dados fictícios.
   ===================================================================== */

const TEMPO = 5200;

export function Plataforma({ c }: { c: Conteudo }) {
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [cheia, setCheia] = useState(false);
  const { alvo, dentro } = useAoEntrar<HTMLDivElement>("0px 0px -20% 0px");
  const menos = useMenosMovimento();
  const total = c.plataforma.telas.length;
  const fechar = useRef<HTMLButtonElement>(null);
  const abridor = useRef<HTMLButtonElement>(null);

  const passar = useCallback((d: number) => setAtual((v) => (v + d + total) % total), [total]);

  useEffect(() => {
    if (!dentro || pausado || cheia || menos) return;
    const id = setTimeout(() => passar(1), TEMPO);
    return () => clearTimeout(id);
  }, [dentro, pausado, cheia, menos, atual, passar]);

  useEffect(() => {
    if (!cheia) return;
    document.body.style.overflow = "hidden";
    fechar.current?.focus();
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCheia(false);
      if (e.key === "ArrowRight") passar(1);
      if (e.key === "ArrowLeft") passar(-1);
    };
    document.addEventListener("keydown", tecla);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", tecla);
      abridor.current?.focus();
    };
  }, [cheia, passar]);

  const tela = c.plataforma.telas[atual];

  return (
    <section id="plataforma" className="escuro grao relative overflow-hidden">
      <div className="env secao">
        <Cabeca chapeu={c.plataforma.chapeu} titulo={c.plataforma.titulo} lead={c.plataforma.lead} centro escuro />

        <div
          ref={alvo}
          className="mt-12 grid gap-5 lg:grid-cols-[.34fr_.66fr]"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocusCapture={() => setPausado(true)}
          onBlurCapture={() => setPausado(false)}
        >
          <ul className="grid content-start gap-1.5" role="list">
            {c.plataforma.telas.map((item, i) => {
              const ativo = i === atual;
              return (
                <li key={item.arquivo}>
                  <button
                    type="button"
                    onClick={() => setAtual(i)}
                    aria-current={ativo ? "true" : undefined}
                    className={`relative w-full overflow-hidden rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                      ativo ? "bg-white/12" : "bg-white/4 hover:bg-white/8"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`num text-[11.5px] font-bold ${ativo ? "text-teal" : "text-white/30"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-display text-[16px] font-bold ${ativo ? "text-white" : "text-white/70"}`}>
                        {item.nome}
                      </span>
                    </span>
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ${
                        ativo ? "mt-1.5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pl-7 text-[13.5px] leading-snug text-white/55">{item.texto}</span>
                      </span>
                    </span>
                    {ativo && !menos && (
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10" aria-hidden="true">
                        <span
                          key={`${atual}-${pausado}`}
                          className="block h-full bg-teal"
                          style={{
                            animation: pausado ? "none" : `medir ${TEMPO}ms linear both`,
                            transformOrigin: "left",
                            width: "100%",
                          }}
                        />
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div>
            <button
              ref={abridor}
              type="button"
              onClick={() => setCheia(true)}
              className="group block w-full overflow-hidden rounded-[22px] bg-[#0A2453] text-left shadow-[0_40px_90px_rgba(3,14,46,.5)]"
              aria-label={`${tela.nome}. ${c.plataforma.ampliar}`}
            >
              <span className="flex items-center gap-2 bg-navy px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="ml-2 text-[11.5px] text-white/45">Códice · {tela.nome}</span>
                <span className="ml-auto flex items-center gap-2 text-[11.5px] text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  {c.plataforma.ampliar}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
              </span>
              <span className="relative block aspect-[1386/868] bg-[#F6F8FC]">
                {c.plataforma.telas.map((item, i) => (
                  <img
                    key={item.arquivo}
                    src={`/sistema/${item.arquivo}.jpg`}
                    alt={`${item.nome} da plataforma Códice`}
                    width={1386}
                    height={868}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-500 ${
                      i === atual ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </span>
            </button>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[12.5px] text-white/40">{c.plataforma.aviso}</p>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => passar(-1)} aria-label={c.plataforma.anterior} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
                </button>
                <span className="num text-[13px] text-white/45">
                  {String(atual + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <button type="button" onClick={() => passar(1)} aria-label={c.plataforma.proxima} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {cheia && (
        <div
          className="fixed inset-0 z-[92] flex flex-col bg-navy-900/96 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={tela.nome}
          onClick={(e) => {
            if (e.target === e.currentTarget) setCheia(false);
          }}
        >
          <div className="flex items-center justify-between gap-4 pb-4">
            <div>
              <p className="font-display text-[18px] font-bold text-white">{tela.nome}</p>
              <p className="text-[13px] text-white/50">{tela.texto}</p>
            </div>
            <button
              ref={fechar}
              type="button"
              onClick={() => setCheia(false)}
              aria-label={c.plataforma.fechar}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center gap-3">
            <button type="button" onClick={() => passar(-1)} aria-label={c.plataforma.anterior} className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:grid">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <img
              src={`/sistema/${tela.arquivo}.jpg`}
              alt={`${tela.nome} da plataforma Códice`}
              className="mx-auto max-h-full min-h-0 w-auto max-w-full rounded-xl object-contain shadow-[0_30px_70px_rgba(0,0,0,.5)]"
            />
            <button type="button" onClick={() => passar(1)} aria-label={c.plataforma.proxima} className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:grid">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-5">
            {c.plataforma.telas.map((item, i) => (
              <button
                key={item.arquivo}
                type="button"
                onClick={() => setAtual(i)}
                aria-label={item.nome}
                aria-current={i === atual ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${i === atual ? "w-8 bg-teal" : "w-2 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
