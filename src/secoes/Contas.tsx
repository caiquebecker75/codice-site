import { useState } from "react";
import { Revelar, TituloCortina } from "../componentes/Base";
import { partirTitulo, real } from "./Mercado";
import { useAoEntrar } from "../hooks/uso";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   A conta da rede: comprar contra assinar, o efeito no imposto e o
   que muda do lado da indústria.
   ===================================================================== */

export function Contas({ c }: { c: Conteudo }) {
  const { alvo, dentro } = useAoEntrar<HTMLDivElement>("0px 0px -18% 0px");
  const [regime, setRegime] = useState(1);
  const escolhido = c.contas.fiscal.regimes[regime];
  const maior = Math.max(...c.contas.fiscal.regimes.map((r) => r.custo));

  return (
    <section id="contas" className="secao bg-papel">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.contas.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.contas.titulo)} />
          <p className="lead mt-6">{c.contas.lead}</p>
        </div>

        <div ref={alvo} className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <article className="cartao flex flex-col p-8">
            <h3 className="font-display text-[21px] font-bold text-tinta">{c.contas.comprar.titulo}</h3>
            <p className="num mt-6 font-display text-[clamp(38px,5vw,58px)] font-extrabold leading-none text-tinta-3">
              {real(c.contas.comprar.valor)}
            </p>
            <p className="mt-2 text-[14px] text-tinta-3">{c.contas.comprar.unidade}</p>

            <ul className="mt-7 grid gap-2.5 border-t border-tinta/10 pt-6">
              {c.contas.comprar.linhas.map((linha) => (
                <li key={linha} className="text-[15px] text-tinta-2">{linha}</li>
              ))}
            </ul>
            <ul className="mt-6 grid gap-3">
              {c.contas.comprar.contras.map((contra) => (
                <li key={contra} className="flex gap-3 text-[14.5px] leading-snug text-tinta-2">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M7 7l10 10M17 7L7 17" />
                  </svg>
                  {contra}
                </li>
              ))}
            </ul>
          </article>

          <div className="grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-navy font-display text-[15px] font-extrabold text-teal">VS</span>
          </div>

          <article className="relative flex flex-col overflow-hidden rounded-[26px] bg-navy p-8 text-white shadow-[var(--shadow-alta)]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-[21px] font-bold">{c.contas.assinar.titulo}</h3>
              <span
                className={`rounded-full bg-teal px-3.5 py-1.5 text-[11.5px] font-bold text-navy transition-all duration-700 ${
                  dentro ? "opacity-100" : "translate-y-2 opacity-0"
                }`}
                style={{ transitionDelay: "420ms" }}
              >
                {c.contas.assinar.selo}
              </span>
            </div>
            <p className="num mt-6 font-display text-[clamp(38px,5vw,58px)] font-extrabold leading-none text-teal">
              {real(c.contas.assinar.valor)}
            </p>
            <p className="mt-2 text-[14px] text-white/50">{c.contas.assinar.unidade}</p>

            <ul className="mt-7 grid gap-3 border-t border-white/12 pt-6">
              {c.contas.assinar.linhas.map((linha) => (
                <li key={linha} className="flex gap-3 text-[15px] leading-snug text-white/80">
                  <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4 10-10" />
                  </svg>
                  {linha}
                </li>
              ))}
            </ul>

            {/* barra comparativa: o tamanho da diferença, não só o número */}
            <div className="mt-8 grid gap-2">
              <span className="h-2.5 w-full rounded-full bg-white/15" aria-hidden="true" />
              <span
                className="h-2.5 rounded-full bg-teal transition-[width] duration-[1200ms] ease-out"
                style={{ width: dentro ? `${(c.contas.assinar.valor / c.contas.comprar.valor) * 100}%` : "4%" }}
                aria-hidden="true"
              />
            </div>
          </article>
        </div>

        {/* uma cota paga três meses */}
        <Revelar>
          <div className="mt-6 grid gap-6 rounded-[26px] bg-papel-2 p-8 sm:p-10 lg:grid-cols-[.42fr_.58fr] lg:items-center">
            <div>
              <h3 className="font-display text-[22px] font-extrabold text-tinta">{c.contas.cota.titulo}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-tinta-2">{c.contas.cota.texto}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-teal px-6 py-5 text-navy">
                <p className="text-[12px] font-bold uppercase tracking-[.12em]">1 cota</p>
                <p className="num font-display text-[26px] font-extrabold leading-none">{real(1500)}</p>
              </div>
              <span className="font-display text-[22px] font-extrabold text-tinta-3">=</span>
              <div className="grid flex-1 grid-cols-3 gap-2">
                {[1, 2, 3].map((mes) => (
                  <div key={mes} className="rounded-2xl bg-white px-4 py-5 text-center shadow-[var(--shadow-suave)]">
                    <p className="text-[11.5px] font-semibold text-tinta-3">
                      {c.contas.cota.meses} {mes}
                    </p>
                    <p className="num mt-1 font-display text-[17px] font-extrabold text-navy">{real(499)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Revelar>

        {/* efeito fiscal */}
        <div className="mt-6 grid gap-6 rounded-[26px] bg-navy p-8 text-white sm:p-10 lg:grid-cols-[.44fr_.56fr] lg:items-center">
          <div>
            <h3 className="font-display text-[22px] font-extrabold">{c.contas.fiscal.titulo}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/65">{c.contas.fiscal.lead}</p>

            <div className="mt-6 grid gap-2" role="radiogroup" aria-label={c.contas.fiscal.titulo}>
              {c.contas.fiscal.regimes.map((item, i) => (
                <button
                  key={item.nome}
                  type="button"
                  role="radio"
                  aria-checked={regime === i}
                  onClick={() => setRegime(i)}
                  className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-colors ${
                    regime === i ? "bg-teal text-navy" : "bg-white/6 text-white hover:bg-white/12"
                  }`}
                >
                  <span className="font-display text-[16px] font-bold">{item.nome}</span>
                  <span className={`text-[12.5px] ${regime === i ? "text-navy/70" : "text-white/45"}`}>{item.nota}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[22px] bg-white/6 p-7">
            <p className="text-[12px] font-bold uppercase tracking-[.14em] text-white/40">{c.contas.fiscal.rotulos.custoEfetivo}</p>
            <p className="num mt-3 font-display text-[clamp(40px,5.4vw,64px)] font-extrabold leading-none text-teal">
              {real(escolhido.custo)}
            </p>

            <div className="mt-7 h-3 w-full overflow-hidden rounded-full bg-white/12" aria-hidden="true">
              <div
                className="h-full rounded-full bg-teal transition-[width] duration-700 ease-out"
                style={{ width: `${(escolhido.custo / maior) * 100}%` }}
              />
            </div>

            <p className="mt-5 text-[14.5px] text-white/60">
              {escolhido.volta > 0 ? (
                <>
                  <b className="num font-semibold text-white">{real(escolhido.volta)}</b> {c.contas.fiscal.rotulos.volta}
                </>
              ) : (
                c.contas.fiscal.rotulos.semEfeito
              )}
            </p>
            <p className="mt-6 text-[12.5px] leading-relaxed text-white/35">{c.contas.fiscal.ressalva}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Industria({ c }: { c: Conteudo }) {
  return (
    <section id="industria" className="secao bg-papel-2">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.industria.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.industria.titulo)} />
          <p className="lead mt-6">{c.industria.lead}</p>
        </div>

        <ul className="mt-12 grid gap-3">
          {c.industria.linhas.map((linha, i) => (
            <Revelar key={linha.dor} como="li" atraso={i * 60}>
              <div className="grid items-center gap-3 rounded-[22px] bg-white p-5 shadow-[var(--shadow-suave)] sm:grid-cols-[1fr_auto_1fr] sm:p-6">
                <div className="flex gap-3">
                  <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-[#C0392B]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M7 7l10 10M17 7L7 17" />
                  </svg>
                  <p>
                    <b className="block font-display text-[16px] font-bold text-tinta">{linha.dor}</b>
                    <span className="mt-1 block text-[14px] leading-snug text-tinta-3">{linha.dorTexto}</span>
                  </p>
                </div>
                <span className="hidden h-8 w-8 place-items-center rounded-full bg-papel text-azul sm:grid" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                </span>
                <div className="flex gap-3 rounded-2xl bg-papel p-4 sm:p-5">
                  <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-azul" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4 10-10" />
                  </svg>
                  <p>
                    <b className="block font-display text-[16px] font-bold text-navy">{linha.solucao}</b>
                    <span className="mt-1 block text-[14px] leading-snug text-tinta-2">{linha.solucaoTexto}</span>
                  </p>
                </div>
              </div>
            </Revelar>
          ))}
        </ul>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Revelar>
            <div className="rounded-[26px] bg-white p-8">
              <h3 className="font-display text-[18px] font-bold text-tinta-3">{c.industria.etapas.proprio.titulo}</h3>
              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {c.industria.etapas.proprio.itens.map((item, i) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="rounded-full bg-papel-2 px-4 py-2.5 text-[13.5px] text-tinta-2">{item}</span>
                    {i < c.industria.etapas.proprio.itens.length - 1 && <span className="text-tinta-3" aria-hidden="true">·</span>}
                  </li>
                ))}
              </ol>
            </div>
          </Revelar>
          <Revelar atraso={120}>
            <div className="rounded-[26px] bg-navy p-8 text-white">
              <h3 className="font-display text-[18px] font-bold text-teal">{c.industria.etapas.codice.titulo}</h3>
              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {c.industria.etapas.codice.itens.map((item, i) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="rounded-full bg-white/10 px-4 py-2.5 text-[13.5px]">{item}</span>
                    {i < c.industria.etapas.codice.itens.length - 1 && <span className="text-white/30" aria-hidden="true">·</span>}
                  </li>
                ))}
              </ol>
            </div>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
