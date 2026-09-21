import { useState, type ReactElement } from "react";
import { Revelar, TituloCortina } from "../componentes/Base";
import { partirTitulo } from "./Narrativa";
import { useAoEntrar } from "../hooks/uso";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   O sistema por dentro, o módulo de sensores e a execução em loja.
   ===================================================================== */

const CORES_ESPACO: Record<string, string> = {
  inicio: "#2F73FF",
  comercial: "#32C48D",
  midia: "#FF6B8B",
  rede: "#FFA23A",
  frota: "#5B6EE8",
  pdv: "#1DD4C8",
  operacao: "#12A97C",
  analises: "#8C7BFF",
  admin: "#6B7994",
};

export function Sistema({ c }: { c: Conteudo }) {
  const [atual, setAtual] = useState(0);
  const espaco = c.sistema.espacos[atual];

  return (
    <section id="sistema" className="secao bg-papel">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.sistema.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.sistema.titulo)} />
          <p className="lead mt-6">{c.sistema.lead}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[.42fr_.58fr]">
          <ul className="grid gap-1.5" role="list">
            {c.sistema.espacos.map((item, i) => {
              const ativo = i === atual;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setAtual(i)}
                    aria-current={ativo ? "true" : undefined}
                    className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                      ativo ? "bg-navy text-white shadow-[var(--shadow-suave)]" : "bg-white/70 hover:bg-white"
                    }`}
                  >
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white"
                      style={{ background: CORES_ESPACO[item.id] }}
                      aria-hidden="true"
                    >
                      <IconeEspaco id={item.id} />
                    </span>
                    <span className={`flex-1 font-display text-[17px] font-bold ${ativo ? "text-white" : "text-tinta"}`}>
                      {item.nome}
                    </span>
                    <span className={`num text-[13px] font-semibold ${ativo ? "text-teal" : "text-tinta-3"}`}>
                      {String(item.telas.length).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="cartao relative flex min-h-[420px] flex-col overflow-hidden p-8 sm:p-10">
            <span
              className="absolute right-0 top-0 h-40 w-40 rounded-bl-[120px] opacity-10"
              style={{ background: CORES_ESPACO[espaco.id] }}
              aria-hidden="true"
            />
            <div key={espaco.id} className="relative animate-[montar_.5s_ease-out_both]">
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                style={{ background: CORES_ESPACO[espaco.id] }}
                aria-hidden="true"
              >
                <IconeEspaco id={espaco.id} grande />
              </span>
              <h3 className="mt-6 font-display text-[clamp(26px,3vw,36px)] font-extrabold text-tinta">{espaco.nome}</h3>
              <p className="mt-4 max-w-[46ch] text-[16.5px] leading-relaxed text-tinta-2">{espaco.resumo}</p>

              <p className="mt-8 text-[12px] font-bold uppercase tracking-[.14em] text-tinta-3">
                <span className="num">{espaco.telas.length}</span> {c.sistema.contagem}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {espaco.telas.map((tela, i) => (
                  <li
                    key={tela}
                    className="pilula animate-[montar_.4s_ease-out_both]"
                    style={{ animationDelay: `${i * 45}ms` }}
                  >
                    {tela}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sensores({ c }: { c: Conteudo }) {
  const [foco, setFoco] = useState(0);
  const pontos = [
    { x: "50%", y: "18%" },
    { x: "26%", y: "48%" },
    { x: "74%", y: "52%" },
    { x: "50%", y: "82%" },
  ];

  return (
    <section id="sensores" className="escuro grao relative overflow-hidden">
      <div className="env secao relative grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
        <div className="relative">
          <div className="malha absolute inset-0" aria-hidden="true" />
          <figure className="relative rounded-[28px] bg-gradient-to-br from-navy-700 to-navy p-6 shadow-[var(--shadow-alta)]">
            <img
              src="/img/display-ilha.png"
              alt={c.sensores.legenda}
              width={900}
              height={900}
              loading="lazy"
              decoding="async"
              className="rounded-2xl"
            />
            {pontos.map((ponto, i) => (
              <button
                key={i}
                type="button"
                className="absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center"
                style={{ left: ponto.x, top: ponto.y }}
                aria-label={c.sensores.itens[i].titulo}
                aria-pressed={foco === i}
                onClick={() => setFoco(i)}
                onMouseEnter={() => setFoco(i)}
              >
                <span
                  className={`absolute h-8 w-8 rounded-full bg-teal/30 ${foco === i ? "animate-[pulsar_2s_ease-in-out_infinite]" : ""}`}
                />
                <span className={`relative h-3 w-3 rounded-full transition-colors ${foco === i ? "bg-teal" : "bg-white/70"}`} />
              </button>
            ))}
            <figcaption className="mt-4 text-center text-[12px] text-white/40">{c.sensores.legenda}</figcaption>
          </figure>
        </div>

        <div>
          <p className="chapeu">{c.sensores.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.sensores.titulo)} />
          <p className="lead mt-6">{c.sensores.lead}</p>

          <ul className="mt-10 grid gap-3">
            {c.sensores.itens.map((item, i) => (
              <li key={item.titulo}>
                <button
                  type="button"
                  onClick={() => setFoco(i)}
                  onMouseEnter={() => setFoco(i)}
                  className={`flex w-full items-start gap-4 rounded-2xl p-5 text-left transition-colors duration-300 ${
                    foco === i ? "bg-white/10" : "bg-white/4 hover:bg-white/8"
                  }`}
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-colors ${
                      foco === i ? "bg-teal text-navy" : "bg-white/10 text-teal"
                    }`}
                    aria-hidden="true"
                  >
                    <IconeSensor indice={i} />
                  </span>
                  <span>
                    <span className="block font-display text-[17px] font-bold text-white">{item.titulo}</span>
                    <span className="mt-1.5 block text-[14.5px] leading-relaxed text-white/60">{item.texto}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Pdv({ c }: { c: Conteudo }) {
  const { alvo, dentro } = useAoEntrar<HTMLDivElement>("0px 0px -25% 0px");

  return (
    <section id="pdv" className="secao bg-papel-2">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.pdv.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.pdv.titulo)} />
          <p className="lead mt-6">{c.pdv.lead}</p>
        </div>

        <div ref={alvo} className="relative mt-16">
          {/* trilho que se desenha conforme a seção entra */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-7 hidden h-4 w-full lg:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="60" y1="4" x2="940" y2="4" stroke="#C9D5EA" strokeWidth="2" strokeDasharray="6 8" />
            <line
              x1="60"
              y1="4"
              x2="940"
              y2="4"
              stroke="#2F73FF"
              strokeWidth="2"
              strokeDasharray="880"
              style={{
                ["--traco" as string]: "880",
                strokeDashoffset: dentro ? 0 : 880,
                transition: "stroke-dashoffset 1.8s cubic-bezier(.2,.7,.3,1)",
              }}
            />
          </svg>

          <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
            {c.pdv.passos.map((passo, i) => (
              <li key={passo.titulo} className="flex gap-5 lg:block">
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-display text-[18px] font-extrabold transition-all duration-500 ${
                    dentro ? "bg-azul text-white" : "bg-white text-tinta-3"
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-7">
                  <h3 className="font-display text-[19px] font-bold text-tinta">{passo.titulo}</h3>
                  <p className="mt-2.5 max-w-[34ch] text-[15px] leading-relaxed text-tinta-2">{passo.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {c.pdv.camadas.map((camada, i) => (
            <Revelar key={camada.nome} atraso={i * 90}>
              <article className="cartao h-full p-7">
                <span
                  className="grid h-10 w-10 place-items-center rounded-xl text-white"
                  style={{ background: ["#5B6EE8", "#FFA23A", "#7C5CFC"][i] }}
                  aria-hidden="true"
                >
                  <IconeCamada indice={i} />
                </span>
                <h3 className="mt-5 font-display text-[19px] font-bold text-tinta">{camada.nome}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-tinta-2">{camada.texto}</p>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ ícones ---- */

function IconeEspaco({ id, grande = false }: { id: string; grande?: boolean }) {
  const t = grande ? "h-6 w-6" : "h-[18px] w-[18px]";
  const comum = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const desenhos: Record<string, ReactElement> = {
    inicio: <path d="M3 12h4l3 8 4-16 3 8h4" {...comum} />,
    comercial: <path d="M3 5h18l-7 8v6l-4 2v-8z" {...comum} />,
    midia: <><rect x="3" y="3" width="8" height="8" rx="1.5" {...comum} /><rect x="13" y="3" width="8" height="8" rx="1.5" {...comum} /><rect x="3" y="13" width="8" height="8" rx="1.5" {...comum} /><rect x="13" y="13" width="8" height="8" rx="1.5" {...comum} /></>,
    rede: <path d="M4 9l2-5h12l2 5M4 9v11h16V9M4 9h16M10 20v-6h4v6" {...comum} />,
    frota: <><rect x="3" y="4" width="18" height="12" rx="1.6" {...comum} /><path d="M9 20h6M12 16v4" {...comum} /></>,
    pdv: <><circle cx="12" cy="12" r="8" {...comum} /><circle cx="12" cy="12" r="3" {...comum} /></>,
    operacao: <path d="M14 6l4 4-8 8H6v-4zM13 7l4 4" {...comum} />,
    analises: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" {...comum} />,
    admin: <><circle cx="12" cy="12" r="3" {...comum} /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" {...comum} /></>,
  };
  return (
    <svg viewBox="0 0 24 24" className={t} aria-hidden="true">
      {desenhos[id]}
    </svg>
  );
}

function IconeSensor({ indice }: { indice: number }) {
  const comum = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const desenhos = [
    <path key="a" d="M4 12h3l2-5 3 10 2-6 2 3h4" {...comum} />,
    <g key="b"><path d="M12 3v9M9 7h6" {...comum} /><circle cx="12" cy="17" r="3.2" {...comum} /></g>,
    <g key="c"><path d="M5 12.5a10 10 0 0114 0M8 16a6 6 0 018 0" {...comum} /><circle cx="12" cy="19" r="1.3" fill="currentColor" stroke="none" /></g>,
    <g key="d"><rect x="4" y="7" width="16" height="12" rx="1.6" {...comum} /><path d="M8 4v3M16 4v3M9 13h6" {...comum} /></g>,
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
      {desenhos[indice]}
    </svg>
  );
}

function IconeCamada({ indice }: { indice: number }) {
  const comum = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const desenhos = [
    <g key="a"><rect x="3" y="4" width="18" height="12" rx="1.6" {...comum} /><path d="M9 20h6M12 16v4" {...comum} /></g>,
    <g key="b"><path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" {...comum} /><circle cx="12" cy="10" r="2.4" {...comum} /></g>,
    <g key="c"><rect x="3" y="6" width="18" height="14" rx="2" {...comum} /><circle cx="12" cy="13" r="3.4" {...comum} /><path d="M8 6l1.5-2h5L16 6" {...comum} /></g>,
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      {desenhos[indice]}
    </svg>
  );
}
