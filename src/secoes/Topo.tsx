import { useEffect, useState } from "react";
import { Simbolo } from "../componentes/Marca";
import { BotaoMagnetico } from "../componentes/Base";
import { Icone } from "../componentes/Icones";
import { useMenosMovimento, useParallax } from "../hooks/uso";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Abertura e herói.
   O herói abre com a foto de um display Códice instalado em loja: é o
   produto real, na situação real, antes de qualquer promessa escrita.
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
    const sair = setTimeout(() => setEstado("saindo"), 1100);
    const fim = setTimeout(() => {
      setEstado("fora");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("codice-abertura", "1");
      } catch {
        /* navegação privada: a abertura roda de novo, sem quebrar nada */
      }
    }, 1800);
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
      <div className="flex flex-col items-center gap-5 px-6 text-center">
        <Simbolo className="h-16 w-16 animate-[montar_1s_cubic-bezier(.2,.8,.3,1)_both]" />
        <p className="max-w-[24ch] font-display text-[13px] font-bold uppercase tracking-[.3em] text-white/70">
          {c.abertura.palavra}
        </p>
        <span className="mt-1 block h-px w-32 overflow-hidden bg-white/15">
          <span className="block h-px w-full origin-left animate-[medir_1.1s_ease-out_both] bg-teal" />
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
  const foto = useParallax<HTMLDivElement>(34);
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMontado(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="topo" className="relative min-h-[92svh] overflow-hidden bg-navy pt-[72px] text-white">
      {/* a loja de verdade, atrás de tudo */}
      <div ref={foto} className="absolute inset-0" style={{ transform: "translate3d(0, var(--desloca, 0px), 0) scale(1.08)" }}>
        <img
          src="/fotos/foto-ilha-supermercado.jpg"
          alt={c.heroi.legendaFoto}
          width={1400}
          height={787}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[68%_center]"
        />
      </div>
      {/* duas camadas: uma deita o texto sobre o navy, outra assenta os números no rodapé */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(104deg, rgba(4,16,48,.97) 0%, rgba(5,20,58,.93) 32%, rgba(6,27,73,.58) 60%, rgba(6,27,73,.24) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[46%] lg:h-[34%]"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, rgba(4,16,48,0) 0%, rgba(4,16,48,.92) 72%)" }}
      />
      <div
        className="absolute inset-0 lg:hidden"
        aria-hidden="true"
        style={{ background: "linear-gradient(180deg, rgba(4,16,48,.80) 0%, rgba(4,16,48,.55) 45%, rgba(4,16,48,.92) 100%)" }}
      />

      <div className="env relative flex min-h-[calc(92svh-72px)] flex-col justify-center py-16">
        <div className="max-w-[54ch]">
          <p className={`chapeu text-teal transition-all duration-700 ${montado ? "opacity-100" : "translate-y-3 opacity-0"}`}>
            {c.heroi.chapeu}
          </p>

          <h1 className="mt-6 font-display text-[clamp(40px,6.6vw,84px)] font-extrabold leading-[1.0]">
            {c.heroi.titulo.map((parte, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-[900ms] ${montado ? "translate-y-0" : "translate-y-full"} ${
                    i === 1 ? "text-teal" : ""
                  }`}
                  style={{ transitionDelay: `${140 + i * 110}ms`, transitionTimingFunction: "cubic-bezier(.16,.84,.26,1)" }}
                >
                  {parte}
                </span>
              </span>
            ))}
          </h1>

          <p
            className={`mt-7 max-w-[52ch] text-[clamp(16.5px,1.5vw,19px)] leading-relaxed text-white/80 transition-all duration-700 ${
              montado ? "opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {c.heroi.lead}
          </p>

          <ul
            className={`mt-8 grid gap-2.5 transition-all duration-700 ${montado ? "opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "560ms" }}
          >
            {c.heroi.provas.map((prova) => (
              <li key={prova.texto} className="flex items-center gap-3 text-[15px] text-white/80">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-teal/15 text-teal">
                  <Icone nome={prova.icone} className="h-[18px] w-[18px]" />
                </span>
                {prova.texto}
              </li>
            ))}
          </ul>

          <div
            className={`mt-9 flex flex-wrap gap-3 transition-all duration-700 ${montado ? "opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: "620ms" }}
          >
            <BotaoMagnetico href="#simulador" className="botao botao-teal">
              {c.heroi.ctaPrimario}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </BotaoMagnetico>
            <a href="#plataforma" className="botao botao-vazado">
              {c.heroi.ctaSecundario}
            </a>
          </div>
        </div>

        <dl
          className={`mt-auto grid grid-cols-2 gap-x-6 gap-y-6 pt-14 transition-all duration-700 lg:grid-cols-4 ${
            montado ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "760ms" }}
        >
          {c.heroi.selos.map((selo) => (
            <div key={selo.rotulo} className="border-t border-white/20 pt-4">
              <dt className="num font-display text-[clamp(22px,2.6vw,30px)] font-extrabold leading-none text-white">{selo.valor}</dt>
              <dd className="mt-2 text-[13px] leading-snug text-white/60">{selo.rotulo}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#mudou"
        className="env relative flex items-center gap-3 pb-8 text-[12px] font-semibold uppercase tracking-[.22em] text-white/50 transition-colors hover:text-white"
      >
        <span className="relative block h-9 w-px bg-white/25">
          <span className="absolute inset-x-0 top-0 block h-3 animate-[descer_2.2s_ease-in-out_infinite] bg-teal" />
        </span>
        {c.heroi.rolar}
      </a>
    </section>
  );
}
