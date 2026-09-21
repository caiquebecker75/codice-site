import { Contador, Revelar, TituloCortina } from "../componentes/Base";
import { partirTitulo } from "./Narrativa";
import { useAoEntrar } from "../hooks/uso";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Método, honestidade dos dados, públicos e números.
   ===================================================================== */

export function Metodo({ c }: { c: Conteudo }) {
  const { alvo, dentro } = useAoEntrar<HTMLOListElement>("0px 0px -20% 0px");

  return (
    <section id="metodo" className="secao bg-papel">
      <div className="env grid gap-12 lg:grid-cols-[.4fr_.6fr] lg:gap-20">
        <div>
          <p className="chapeu">{c.metodo.chapeu}</p>
          <TituloCortina className="titulo-menor mt-6" linhas={partirTitulo(c.metodo.titulo)} />
          <p className="lead mt-6">{c.metodo.lead}</p>
        </div>

        <ol ref={alvo} className="relative grid gap-0">
          <span className="absolute bottom-6 left-[15px] top-6 w-px bg-tinta/12" aria-hidden="true" />
          <span
            className="absolute left-[15px] top-6 w-px bg-azul transition-[height] duration-[2000ms] ease-out"
            style={{ height: dentro ? "calc(100% - 48px)" : "0%" }}
            aria-hidden="true"
          />
          {c.metodo.etapas.map((etapa, i) => (
            <li key={etapa.titulo} className="relative grid grid-cols-[32px_1fr] gap-6 pb-10 last:pb-0">
              <span
                className={`mt-5 grid h-8 w-8 place-items-center rounded-full border-2 transition-all duration-500 ${
                  dentro ? "border-azul bg-azul text-white" : "border-tinta/15 bg-papel text-transparent"
                }`}
                style={{ transitionDelay: `${i * 260}ms` }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4 10-10" />
                </svg>
              </span>
              <div className="cartao p-7">
                <p className="text-[12px] font-bold uppercase tracking-[.16em] text-azul">{etapa.prazo}</p>
                <h3 className="mt-2.5 font-display text-[21px] font-bold text-tinta">{etapa.titulo}</h3>
                <p className="mt-3 text-[15.5px] leading-relaxed text-tinta-2">{etapa.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Honestidade({ c }: { c: Conteudo }) {
  return (
    <section id="honestidade" className="escuro grao relative overflow-hidden bg-navy-800">
      <div className="env secao">
        <div className="max-w-3xl">
          <p className="chapeu">{c.honestidade.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.honestidade.titulo)} />
          <p className="lead mt-6">{c.honestidade.lead}</p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[26px] bg-white/10 sm:grid-cols-2">
          {c.honestidade.itens.map((item, i) => (
            <Revelar key={item.afirma} como="li" atraso={(i % 2) * 80} className="bg-navy-800">
              <div className="flex h-full flex-col gap-4 p-7 sm:flex-row sm:items-center sm:gap-6">
                <p className="flex flex-1 items-start gap-3 text-[15.5px] leading-snug text-white">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-teal" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4 10-10" />
                  </svg>
                  {item.afirma}
                </p>
                <span className="hidden h-10 w-px bg-white/12 sm:block" aria-hidden="true" />
                <p className="flex flex-1 items-start gap-3 text-[15px] leading-snug text-white/45">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                    <path d="M7 7l10 10M17 7L7 17" />
                  </svg>
                  {item.naoAfirma}
                </p>
              </div>
            </Revelar>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Perfis({ c }: { c: Conteudo }) {
  return (
    <section id="perfis" className="secao bg-papel-2">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.perfis.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.perfis.titulo)} />
          <p className="lead mt-6">{c.perfis.lead}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {c.perfis.cartoes.map((cartao, i) => (
            <Revelar key={cartao.tipo} atraso={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[26px] bg-white shadow-[var(--shadow-suave)] transition-transform duration-300 hover:-translate-y-1.5">
                <div className="bg-navy p-7 transition-colors duration-300 group-hover:bg-navy-700">
                  <p className="text-[11.5px] font-bold uppercase tracking-[.18em] text-teal">{cartao.tipo}</p>
                  <h3 className="mt-3 font-display text-[23px] font-extrabold text-white">{cartao.nome}</h3>
                  <p className="mt-4 text-[15px] italic leading-snug text-white/60">{cartao.pergunta}</p>
                </div>
                <ul className="grid flex-1 gap-3.5 p-7">
                  {cartao.ganhos.map((ganho) => (
                    <li key={ganho} className="flex gap-3 text-[15px] leading-snug text-tinta-2">
                      <svg viewBox="0 0 24 24" className="mt-1 h-4 w-4 shrink-0 text-azul" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 13l4 4 10-10" />
                      </svg>
                      {ganho}
                    </li>
                  ))}
                </ul>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Numeros({ c }: { c: Conteudo }) {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="env">
        <p className="chapeu">{c.numeros.chapeu}</p>
        <h2 className="titulo-menor mt-5 max-w-[22ch]">{c.numeros.titulo}</h2>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-[26px] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {c.numeros.itens.map((item) => (
            <div key={item.rotulo} className="bg-navy p-8">
              <dt className="font-display text-[clamp(44px,5.6vw,68px)] font-extrabold leading-none text-teal">
                <Contador valor={item.valor} sufixo={item.sufixo} />
              </dt>
              <dd className="mt-4">
                <span className="block text-[16px] font-semibold text-white">{item.rotulo}</span>
                <span className="mt-1 block text-[13.5px] text-white/50">{item.nota}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
