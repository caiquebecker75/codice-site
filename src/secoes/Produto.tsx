import { useState } from "react";
import { Revelar, TituloCortina } from "../componentes/Base";
import { Visor3D } from "../componentes/Visor3D";
import { partirTitulo, real } from "./Mercado";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   O display: formatos em 3D, pacotes de tecnologia e o que cada
   sensor decide na operação.
   ===================================================================== */

export function Displays({ c }: { c: Conteudo }) {
  const [atual, setAtual] = useState(0);
  const formato = c.displays.formatos[atual];

  return (
    <section id="displays" className="secao bg-papel-2">
      <div className="env">
        <div className="grid gap-10 lg:grid-cols-[.5fr_.5fr] lg:items-end">
          <div>
            <p className="chapeu">{c.displays.chapeu}</p>
            <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.displays.titulo)} />
          </div>
          <p className="lead">{c.displays.lead}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label={c.displays.chapeu}>
          {c.displays.formatos.map((item, i) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={atual === i}
              tabIndex={atual === i ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                  e.preventDefault();
                  setAtual((atual + (e.key === "ArrowRight" ? 1 : -1) + c.displays.formatos.length) % c.displays.formatos.length);
                }
              }}
              onClick={() => setAtual(i)}
              className={`rounded-full px-5 py-3 text-[14.5px] font-semibold transition-colors ${
                atual === i ? "bg-navy text-white" : "bg-white text-tinta-2 hover:text-tinta"
              }`}
            >
              {item.rotulo}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[.56fr_.44fr]">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white to-papel shadow-[var(--shadow-suave)]">
            <Visor3D
              key={formato.id}
              modelo={formato.id}
              alt={`${formato.nome}, display da Códice em três dimensões`}
              className="aspect-[4/3.4] w-full"
              instrucao={c.displays.instrucao}
            />
          </div>

          <div key={formato.id} className="flex flex-col justify-center rounded-[28px] bg-navy p-8 text-white sm:p-10">
            <p className="text-[12px] font-bold uppercase tracking-[.16em] text-teal">
              {String(atual + 1).padStart(2, "0")} / {String(c.displays.formatos.length).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-display text-[clamp(26px,3vw,36px)] font-extrabold">{formato.nome}</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-white/70">{formato.texto}</p>

            <dl className="mt-8 grid gap-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-white/12 pb-4">
                <dt className="text-[13px] font-semibold uppercase tracking-[.08em] text-white/40">{c.displays.rotulos.uso}</dt>
                <dd className="text-right text-[15.5px]">{formato.uso}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-[13px] font-semibold uppercase tracking-[.08em] text-white/40">{c.displays.rotulos.medidas}</dt>
                <dd className="num text-right text-[15.5px]">{formato.medidas}</dd>
              </div>
            </dl>

            <p className="mt-8 text-[13px] text-white/35">{c.displays.rotulos.ver3d}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pacotes({ c }: { c: Conteudo }) {
  return (
    <section id="pacotes" className="secao bg-papel">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.pacotes.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.pacotes.titulo)} />
          <p className="lead mt-6">{c.pacotes.lead}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {c.pacotes.itens.map((item, i) => {
            const destaque = i === 1;
            return (
              <Revelar key={item.id} atraso={i * 100}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-[28px] transition-transform duration-300 hover:-translate-y-1.5 ${
                    destaque ? "bg-navy text-white shadow-[var(--shadow-alta)]" : "bg-white shadow-[var(--shadow-suave)]"
                  }`}
                >
                  <div className={`relative aspect-[4/3] ${destaque ? "bg-white/5" : "bg-papel-2"}`}>
                    <Visor3D
                      modelo={item.id}
                      alt={`Display do pacote ${item.nome}`}
                      className="absolute inset-0"
                      girar={false}
                    />
                    <span
                      className={`absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[.1em] ${
                        destaque ? "bg-teal text-navy" : "bg-navy text-white"
                      }`}
                    >
                      {item.selo}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className={`font-display text-[24px] font-extrabold ${destaque ? "text-white" : "text-tinta"}`}>{item.nome}</h3>
                    <p className={`mt-2 text-[14.5px] leading-snug ${destaque ? "text-white/60" : "text-tinta-2"}`}>{item.quem}</p>

                    <p className="mt-6 flex items-baseline gap-2">
                      <span className={`num font-display text-[38px] font-extrabold leading-none ${destaque ? "text-teal" : "text-navy"}`}>
                        {real(item.preco)}
                      </span>
                      <span className={`text-[13px] ${destaque ? "text-white/50" : "text-tinta-3"}`}>{c.pacotes.porMes}</span>
                    </p>

                    <ul className="mt-6 grid gap-3">
                      {item.recursos.map((recurso) => (
                        <li key={recurso} className={`flex gap-3 text-[15px] ${destaque ? "text-white/80" : "text-tinta-2"}`}>
                          <svg viewBox="0 0 24 24" className={`mt-1 h-4 w-4 shrink-0 ${destaque ? "text-teal" : "text-azul"}`} fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 13l4 4 10-10" />
                          </svg>
                          {recurso}
                        </li>
                      ))}
                    </ul>

                    <a href="#falar" className={`botao mt-8 w-full ${destaque ? "botao-teal" : "botao-tinta"}`}>
                      {c.nav.cta}
                    </a>
                  </div>
                </article>
              </Revelar>
            );
          })}
        </div>
        <p className="mt-6 text-[13px] text-tinta-3">{c.pacotes.nota}</p>
      </div>
    </section>
  );
}

export function Tecnologia({ c }: { c: Conteudo }) {
  const [atual, setAtual] = useState(0);
  const modulo = c.tecnologia.modulos[atual];

  return (
    <section id="tecnologia" className="escuro grao relative overflow-hidden bg-navy-800">
      <div className="env secao">
        <div className="grid gap-10 lg:grid-cols-[.5fr_.5fr] lg:items-end">
          <div>
            <p className="chapeu">{c.tecnologia.chapeu}</p>
            <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.tecnologia.titulo)} />
          </div>
          <p className="lead">{c.tecnologia.lead}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[.56fr_.44fr]">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[.14em] text-white/35">{c.tecnologia.instrucao}</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {c.tecnologia.modulos.map((item, i) => {
                const ativo = i === atual;
                const interna = item.camada === "interna";
                return (
                  <button
                    key={item.titulo}
                    type="button"
                    onClick={() => setAtual(i)}
                    aria-current={ativo ? "true" : undefined}
                    className={`rounded-2xl p-4 text-left transition-all duration-300 ${
                      ativo ? "bg-teal text-navy" : "bg-white/5 text-white hover:bg-white/10"
                    }`}
                  >
                    <span className={`block text-[10.5px] font-bold uppercase tracking-[.12em] ${ativo ? "text-navy/60" : interna ? "text-teal" : "text-white/35"}`}>
                      {interna ? c.tecnologia.camadas.interna : c.tecnologia.camadas.externa} · {item.plano}
                    </span>
                    <span className="mt-1.5 block font-display text-[15.5px] font-bold leading-tight">{item.titulo}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div key={modulo.titulo} className="flex animate-[montar_.45s_ease-out_both] flex-col rounded-[28px] bg-white p-8 text-tinta sm:p-10">
            <span className="text-[11.5px] font-bold uppercase tracking-[.14em] text-azul">
              {modulo.camada === "interna" ? c.tecnologia.camadas.interna : c.tecnologia.camadas.externa}
            </span>
            <h3 className="mt-3 font-display text-[26px] font-extrabold leading-tight">{modulo.titulo}</h3>
            <p className="mt-4 text-[16px] leading-relaxed text-tinta-2">{modulo.texto}</p>

            <dl className="mt-8 grid gap-3">
              <div className="flex items-center justify-between gap-4 rounded-xl bg-papel px-5 py-3.5">
                <dt className="text-[13px] font-semibold text-tinta-3">{c.tecnologia.rotulos.entra}</dt>
                <dd className="font-display text-[15px] font-bold text-navy">{modulo.plano}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl bg-papel px-5 py-3.5">
                <dt className="text-[13px] font-semibold text-tinta-3">{c.tecnologia.rotulos.decide}</dt>
                <dd className="text-right text-[14.5px] font-semibold text-tinta">{modulo.decide}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
