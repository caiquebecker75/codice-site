import { Revelar } from "../componentes/Base";
import { Icone, IconeCaixa } from "../componentes/Icones";
import { CONTATO } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Como funciona, o que está incluso e as chamadas de contato que
   aparecem entre as seções.
   ===================================================================== */

export function Cabeca({
  chapeu,
  titulo,
  lead,
  centro = false,
  escuro = false,
}: {
  chapeu: string;
  titulo: string;
  lead?: string;
  centro?: boolean;
  escuro?: boolean;
}) {
  return (
    <div className={centro ? "cabeca-centro" : "max-w-2xl"}>
      <p className={`chapeu ${centro ? "centro" : ""} ${escuro ? "text-teal" : ""}`}>{chapeu}</p>
      <h2 className={`titulo-secao mt-4 ${escuro ? "text-white" : "text-navy"}`}>{titulo}</h2>
      {lead && <p className={`lead mt-4 ${escuro ? "text-white/60" : ""}`}>{lead}</p>}
    </div>
  );
}

export function Como({ c }: { c: Conteudo }) {
  return (
    <section id="como" className="secao bg-white">
      <div className="env">
        <Cabeca chapeu={c.como.chapeu} titulo={c.como.titulo} centro />

        <ol className="mt-12 grid gap-5 lg:grid-cols-3">
          {c.como.passos.map((passo, i) => (
            <Revelar key={passo.n} como="li" atraso={i * 100}>
              <article className="group h-full overflow-hidden rounded-[24px] border border-tinta/8 bg-white shadow-[0_1px_2px_rgba(6,27,73,.04),0_12px_28px_rgba(6,27,73,.06)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-papel">
                  <img
                    src={passo.foto}
                    alt={passo.alt}
                    width={1400}
                    height={875}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-xl bg-white text-azul shadow-sm">
                    <Icone nome={passo.icone} className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-7">
                  <p className="num text-[12px] font-bold text-azul">{passo.n}</p>
                  <h3 className="mt-2 font-display text-[20px] font-bold text-navy">{passo.titulo}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-tinta-2">{passo.texto}</p>
                </div>
              </article>
            </Revelar>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Entrega({ c }: { c: Conteudo }) {
  return (
    <section id="entrega" className="secao bg-papel">
      <div className="env">
        <Cabeca chapeu={c.entrega.chapeu} titulo={c.entrega.titulo} lead={c.entrega.lead} centro />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.entrega.itens.map((item, i) => (
            <Revelar key={item.titulo} como="li" atraso={(i % 3) * 70}>
              <article className="flex h-full items-start gap-4 rounded-[20px] border border-tinta/8 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_14px_34px_rgba(6,27,73,.08)]">
                <IconeCaixa nome={item.icone} tom="claro" />
                <div>
                  <h3 className="font-display text-[17px] font-bold text-navy">{item.titulo}</h3>
                  <p className="mt-1 text-[14.5px] leading-snug text-tinta-2">{item.texto}</p>
                </div>
              </article>
            </Revelar>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Chamada curta entre seções. */
export function Chamada({
  c,
  titulo,
  tom = "navy",
}: {
  c: Conteudo;
  titulo: string;
  tom?: "navy" | "teal";
}) {
  const escuro = tom === "navy";
  return (
    <section className={escuro ? "bg-white" : "bg-papel"}>
      <div className="env">
        <div
          className={`flex flex-wrap items-center justify-between gap-6 rounded-[24px] px-8 py-8 sm:px-10 ${
            escuro ? "bg-navy text-white" : "bg-teal text-navy"
          }`}
        >
          <p className="max-w-[34ch] font-display text-[clamp(19px,2.1vw,25px)] font-extrabold leading-tight">{titulo}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#falar" className={`botao ${escuro ? "botao-teal" : "botao-tinta"}`}>
              {c.nav.cta}
              <Icone nome="seta" className="h-4 w-4" />
            </a>
            {CONTATO.whatsapp && (
              <a
                href={CONTATO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`botao ${escuro ? "botao-vazado" : "bg-navy/10 text-navy hover:bg-navy/20"}`}
              >
                <Icone nome="whatsapp" className="h-[18px] w-[18px]" />
                {c.conversao.whatsapp}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Botão flutuante de WhatsApp. */
export function BotaoFlutuante({ c }: { c: Conteudo }) {
  if (!CONTATO.whatsapp) return null;
  return (
    <a
      href={CONTATO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-4 font-semibold text-white shadow-[0_14px_34px_rgba(37,211,102,.4)] transition-transform hover:-translate-y-1"
      aria-label={`${c.conversao.whatsapp} ${CONTATO.telefone}`}
    >
      <Icone nome="whatsapp" className="h-5 w-5" />
      <span className="hidden text-[14.5px] sm:inline">{c.conversao.whatsapp}</span>
    </a>
  );
}

export function Numeros({ c }: { c: Conteudo }) {
  return (
    <section className="bg-navy py-14">
      <div className="env">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {c.numeros.itens.map((item) => (
            <div key={item.rotulo}>
              <dt className="num font-display text-[clamp(32px,3.6vw,44px)] font-extrabold leading-none text-teal">
                {item.valor >= 1000 ? item.valor.toLocaleString("pt-BR") : item.valor}
                {item.sufixo}
              </dt>
              <dd className="mt-2.5 text-[14px] leading-snug text-white/60">{item.rotulo}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-9 border-t border-white/10 pt-6 text-[12.5px] text-white/35">{c.numeros.nota}</p>
      </div>
    </section>
  );
}
