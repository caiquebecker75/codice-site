import { useEffect, useRef, useState } from "react";
import { Hexagono, Simbolo } from "../componentes/Marca";
import { BotaoMagnetico } from "../componentes/Base";
import { useMenosMovimento, useParallax } from "../hooks/uso";
import { PLATAFORMA } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Abertura e herói.
   A abertura dura pouco mais de um segundo, acontece uma vez por
   sessão e pode ser pulada. Sem ela, o site continua legível: é uma
   camada por cima, não um portão.
   ===================================================================== */

export function Abertura({ c }: { c: Conteudo }) {
  const menos = useMenosMovimento();
  const [estado, setEstado] = useState<"fechado" | "saindo" | "fora">("fechado");

  useEffect(() => {
    let jaViu = false;
    try {
      jaViu = sessionStorage.getItem("codice-abertura") === "1";
    } catch {
      jaViu = false;
    }
    if (jaViu || menos) {
      setEstado("fora");
      return;
    }
    document.body.style.overflow = "hidden";
    const sair = setTimeout(() => setEstado("saindo"), 1150);
    const fim = setTimeout(() => {
      setEstado("fora");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("codice-abertura", "1");
      } catch {
        /* navegação privada: a abertura roda de novo, sem quebrar nada */
      }
    }, 1900);
    return () => {
      clearTimeout(sair);
      clearTimeout(fim);
      document.body.style.overflow = "";
    };
  }, [menos]);

  if (estado === "fora") return null;

  return (
    <div
      className={`fixed inset-0 z-[95] grid place-items-center bg-navy-900 transition-opacity duration-700 ${
        estado === "saindo" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-5">
        <Simbolo className="h-16 w-16 animate-[montar_1.1s_cubic-bezier(.2,.8,.3,1)_both]" />
        <p className="font-display text-sm font-bold uppercase tracking-[.36em] text-white/70">
          {c.abertura.palavra}
        </p>
        <span className="mt-2 block h-px w-32 overflow-hidden bg-white/15">
          <span className="block h-px w-full origin-left animate-[medir_1.15s_ease-out_both] bg-teal" />
        </span>
      </div>
      <button
        type="button"
        className="absolute bottom-8 text-xs font-semibold uppercase tracking-[.2em] text-white/50 hover:text-white"
        onClick={() => setEstado("fora")}
      >
        {c.abertura.pular}
      </button>
    </div>
  );
}

export function Heroi({ c }: { c: Conteudo }) {
  const painel = useParallax<HTMLDivElement>(26);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMontado(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="topo" className="escuro grao relative overflow-hidden pt-[112px]">
      {/* atmosfera: luz fria à esquerda, teal no alto à direita */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[130%]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(58% 52% at 20% 14%, rgba(47,115,255,.34), transparent 70%), radial-gradient(44% 44% at 88% 4%, rgba(29,212,200,.20), transparent 68%)",
        }}
      />
      <Hexagono className="pointer-events-none absolute -right-24 top-24 hidden h-[560px] w-[560px] text-white/10 lg:block" />

      <div className="env relative">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-16 lg:pb-24">
          <div>
            <p className={`chapeu transition-all duration-700 ${montado ? "opacity-100" : "translate-y-3 opacity-0"}`}>
              {c.heroi.chapeu}
            </p>

            <h1 className="mt-6 font-display text-[clamp(44px,7.4vw,92px)] font-extrabold leading-[.98]">
              {c.heroi.titulo.map((parte, i) => (
                <span key={i} className="block overflow-hidden">
                  <span
                    className={`block transition-transform duration-[900ms] ${montado ? "translate-y-0" : "translate-y-full"} ${
                      i === 2 ? "text-teal" : ""
                    }`}
                    style={{ transitionDelay: `${150 + i * 110}ms`, transitionTimingFunction: "cubic-bezier(.16,.84,.26,1)" }}
                  >
                    {parte}
                  </span>
                </span>
              ))}
            </h1>

            <p
              className={`lead mt-7 transition-all duration-700 ${montado ? "opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: "520ms" }}
            >
              {c.heroi.lead}
            </p>

            <div
              className={`mt-9 flex flex-wrap gap-3 transition-all duration-700 ${montado ? "opacity-100" : "translate-y-4 opacity-0"}`}
              style={{ transitionDelay: "640ms" }}
            >
              <BotaoMagnetico href="#falar" className="botao botao-teal">
                {c.heroi.ctaPrimario}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </BotaoMagnetico>
              <a href="#manifesto" className="botao botao-vazado">
                {c.heroi.ctaSecundario}
              </a>
            </div>

            <dl
              className={`mt-12 grid grid-cols-2 gap-x-6 gap-y-5 transition-all duration-700 sm:grid-cols-4 ${montado ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "780ms" }}
            >
              {c.heroi.selos.map((selo) => (
                <div key={selo.rotulo}>
                  <dt className="font-display text-[26px] font-extrabold leading-none text-white num">{selo.valor}</dt>
                  <dd className="mt-1.5 text-[13px] leading-snug text-white/55">{selo.rotulo}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div ref={painel} style={{ transform: "translate3d(0, var(--desloca, 0px), 0)" }}>
            <PainelDemo c={c} pronto={montado} />
          </div>
        </div>
      </div>

      <a
        href="#manifesto"
        className="env relative flex items-center gap-3 pb-10 text-[12px] font-semibold uppercase tracking-[.22em] text-white/45 transition-colors hover:text-white"
      >
        <span className="relative block h-9 w-px bg-white/20">
          <span className="absolute inset-x-0 top-0 block h-3 animate-[descer_2.2s_ease-in-out_infinite] bg-teal" />
        </span>
        {c.heroi.rolar}
      </a>
    </section>
  );
}

/** Reprodução do painel do sistema. Números ilustrativos, marcados como tal. */
function PainelDemo({ c, pronto }: { c: Conteudo; pronto: boolean }) {
  const barras = [38, 52, 46, 64, 58, 76, 70, 88, 82, 96];
  const semanas = useSemanasAnimadas(pronto);
  const espacos = ["#2F73FF", "#32C48D", "#FF6B8B", "#FFA23A", "#5B6EE8", "#1DD4C8", "#12A97C", "#8C7BFF", "#6B7994"];

  return (
    <div
      className="overflow-hidden rounded-[22px] bg-[#08205A] shadow-[0_40px_90px_rgba(3,14,46,.55)]"
      style={{ transform: "perspective(1500px) rotateY(-7deg) rotateX(2.5deg)" }}
    >
      <div className="flex items-center gap-2 bg-navy px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 text-[11.5px] text-white/45">{c.heroi.painel.barra}</span>
      </div>

      <div className="grid min-h-[340px] grid-cols-[112px_1fr] bg-[#F6F8FC] max-[620px]:grid-cols-1">
        <div className="flex flex-col gap-1 bg-[#0A2453] p-3 max-[620px]:hidden">
          {espacos.map((cor, i) => (
            <span
              key={i}
              className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${
                i === 0 ? "bg-azul/20 text-white" : "text-white/55"
              }`}
            >
              <span className="h-3.5 w-3.5 rounded" style={{ background: cor }} />
              <span className="h-1.5 w-10 rounded-full bg-current opacity-40" />
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 p-4">
          <div className="grid grid-cols-3 gap-2.5">
            {c.heroi.painel.kpis.map((kpi) => (
              <div key={kpi.rotulo} className="rounded-xl bg-white p-3 shadow-[0_3px_10px_rgba(6,27,73,.07)]">
                <p className="text-[9.5px] font-semibold uppercase tracking-[.08em] text-tinta-3">{kpi.rotulo}</p>
                <p className="mt-1 font-display text-[20px] font-extrabold leading-none text-tinta num">{kpi.valor}</p>
                <p className="mt-1 text-[10px] text-tinta-3">{kpi.nota}</p>
              </div>
            ))}
          </div>

          <div className="grid flex-1 grid-cols-[1.2fr_1fr] gap-2.5 max-[620px]:grid-cols-1">
            <div className="flex flex-col rounded-xl bg-white p-3 shadow-[0_3px_10px_rgba(6,27,73,.07)]">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.08em] text-tinta-3">
                {c.heroi.painel.graficoTitulo}
              </p>
              <div className="mt-auto flex h-24 items-end gap-1.5">
                {barras.map((altura, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-b from-azul to-teal transition-[height] duration-700"
                    style={{ height: pronto ? `${altura}%` : "6%", transitionDelay: `${600 + i * 55}ms` }}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-xl bg-white p-3 shadow-[0_3px_10px_rgba(6,27,73,.07)]">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.08em] text-tinta-3">
                {c.heroi.painel.gradeTitulo}
              </p>
              <div className="mt-auto grid grid-cols-7 gap-1">
                {semanas.map((estado, i) => (
                  <span
                    key={i}
                    className="aspect-square rounded transition-colors duration-500"
                    style={{ background: estado === 2 ? "#2F73FF" : estado === 1 ? "#1DD4C8" : "#E4EAF5" }}
                  />
                ))}
              </div>
              <div className="mt-2 flex gap-2.5 text-[9px] text-tinta-3">
                {c.heroi.painel.legenda.map((rotulo, i) => (
                  <span key={rotulo} className="inline-flex items-center gap-1">
                    <span
                      className="h-2 w-2 rounded-sm"
                      style={{ background: i === 0 ? "#2F73FF" : i === 1 ? "#1DD4C8" : "#E4EAF5" }}
                    />
                    {rotulo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** A grade vai "vendendo" semanas enquanto a pessoa lê o herói. */
function useSemanasAnimadas(ativo: boolean) {
  const inicial = useRef(
    Array.from({ length: 28 }, (_, i) => (i % 5 === 0 ? 1 : i % 3 === 0 ? 2 : 0)),
  );
  const [semanas, setSemanas] = useState<number[]>(inicial.current);
  const menos = useMenosMovimento();

  useEffect(() => {
    if (!ativo || menos) return;
    const id = setInterval(() => {
      setSemanas((atual) => {
        const proximo = [...atual];
        const alvo = Math.floor(Math.random() * proximo.length);
        proximo[alvo] = proximo[alvo] === 2 ? 0 : proximo[alvo] + 1;
        return proximo;
      });
    }, 900);
    return () => clearInterval(id);
  }, [ativo, menos]);

  return semanas;
}

export { PLATAFORMA };
