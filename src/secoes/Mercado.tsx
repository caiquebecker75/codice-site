import { useMemo, useState } from "react";
import { Contador, Revelar, TituloCortina } from "../componentes/Base";
import { Icone, IconeCaixa } from "../componentes/Icones";
import { useAoEntrar } from "../hooks/uso";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   O que mudou no mercado e como a Códice entra.
   A calculadora do topo da seção é o primeiro momento em que o número
   deixa de ser da indústria e passa a ser da rede de quem está lendo.
   ===================================================================== */

export function partirTitulo(titulo: string): string[] {
  const palavras = titulo.split(" ");
  const linhas: string[] = [];
  const porLinha = palavras.length > 9 ? Math.ceil(palavras.length / 3) : Math.ceil(palavras.length / 2);
  for (let i = 0; i < palavras.length; i += porLinha) linhas.push(palavras.slice(i, i + porLinha).join(" "));
  return linhas;
}

export const real = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

export function Mudou({ c }: { c: Conteudo }) {
  const [lojas, setLojas] = useState(10);
  const [displays, setDisplays] = useState(4);
  const [cota, setCota] = useState(1500);
  const [ocupacao, setOcupacao] = useState(50);
  const { alvo, dentro } = useAoEntrar<HTMLUListElement>();

  const conta = useMemo(() => {
    const semanas = 52 * (ocupacao / 100);
    const receita = lojas * displays * semanas * cota;
    const aluguel = lojas * displays * 499 * 12;
    return Math.max(0, Math.round(receita - aluguel));
  }, [lojas, displays, cota, ocupacao]);

  return (
    <section id="mudou" className="escuro grao relative overflow-hidden bg-navy-800">
      <div className="env secao">
        <div className="grid gap-12 lg:grid-cols-[.46fr_.54fr] lg:gap-16">
          <div>
            <p className="chapeu">{c.mudou.chapeu}</p>
            <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.mudou.titulo)} />
            <p className="lead mt-6">{c.mudou.lead}</p>

            <div className="mt-10 flex flex-wrap items-end gap-10">
              <div>
                <p className="font-display text-[clamp(44px,6vw,72px)] font-extrabold leading-none text-teal">
                  {c.mudou.investimento.prefixo}
                  <Contador
                    valor={c.mudou.investimento.valor}
                    formatar={(n) => (n / 10).toFixed(1).replace(".", c.mudou.investimento.separador)}
                  />
                  {c.mudou.investimento.sufixo}
                </p>
                <p className="mt-3 max-w-[26ch] text-[14.5px] leading-snug text-white/60">{c.mudou.investimento.rotulo}</p>
              </div>
              <div>
                <p className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold leading-none text-white">
                  <Contador valor={c.mudou.crescimento.valor} sufixo={c.mudou.crescimento.sufixo} />
                </p>
                <p className="mt-3 text-[14.5px] text-white/60">{c.mudou.crescimento.rotulo}</p>
              </div>
            </div>
            <p className="mt-5 text-[12.5px] text-white/35">{c.mudou.investimento.fonte}</p>

            <ul ref={alvo} className="mt-10 grid gap-2.5">
              {c.mudou.canais.map((canal, i) => {
                const ultimo = i === c.mudou.canais.length - 1;
                return (
                  <li
                    key={canal.nome}
                    className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-700 ${
                      ultimo ? "bg-teal text-navy" : "bg-white/5 text-white"
                    }`}
                    style={{ transitionDelay: `${i * 110}ms`, opacity: dentro ? 1 : 0, transform: dentro ? "none" : "translateX(-14px)" }}
                  >
                    <span className={`num text-[12px] font-bold ${ultimo ? "text-navy/60" : "text-white/35"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[17px] font-bold">{canal.nome}</span>
                    <span className={`ml-auto text-right text-[13px] ${ultimo ? "text-navy/70" : "text-white/50"}`}>{canal.nota}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* calculadora do custo de não agir */}
          <div className="rounded-[28px] bg-white p-7 text-tinta shadow-[var(--shadow-alta)] sm:p-9">
            <h3 className="font-display text-[22px] font-extrabold">{c.mudou.calculadora.titulo}</h3>

            <div className="mt-7 grid gap-6">
              <Deslizador rotulo={c.mudou.calculadora.lojas} valor={lojas} min={1} max={120} passo={1} aoMudar={setLojas} />
              <Deslizador rotulo={c.mudou.calculadora.displays} valor={displays} min={1} max={12} passo={1} aoMudar={setDisplays} />
              <Deslizador
                rotulo={c.mudou.calculadora.cota}
                valor={cota}
                min={500}
                max={4000}
                passo={100}
                aoMudar={setCota}
                formatar={real}
              />
              <Deslizador
                rotulo={c.mudou.calculadora.ocupacao}
                valor={ocupacao}
                min={10}
                max={100}
                passo={5}
                aoMudar={setOcupacao}
                formatar={(v) => `${v}%`}
              />
            </div>

            <div className="mt-8 rounded-2xl bg-navy p-7 text-white">
              <p className="text-[12px] font-bold uppercase tracking-[.16em] text-teal">{c.mudou.calculadora.resultado}</p>
              <p className="num mt-2 font-display text-[clamp(32px,4.4vw,52px)] font-extrabold leading-none">{real(conta)}</p>
              <p className="mt-2 text-[14px] text-white/55">{c.mudou.calculadora.porAno}</p>
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-tinta-3">{c.mudou.calculadora.nota}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Deslizador({
  rotulo,
  valor,
  min,
  max,
  passo,
  aoMudar,
  formatar,
  escuro = false,
}: {
  rotulo: string;
  valor: number;
  min: number;
  max: number;
  passo: number;
  aoMudar: (v: number) => void;
  formatar?: (v: number) => string;
  escuro?: boolean;
}) {
  const id = `campo-${rotulo.replace(/\W+/g, "-").toLowerCase()}`;
  const pct = ((valor - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className={`text-[13.5px] font-semibold ${escuro ? "text-white/70" : "text-tinta-2"}`}>
          {rotulo}
        </label>
        <output htmlFor={id} className={`num font-display text-[19px] font-extrabold ${escuro ? "text-teal" : "text-navy"}`}>
          {formatar ? formatar(valor) : valor}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={passo}
        value={valor}
        onChange={(e) => aoMudar(Number(e.target.value))}
        className="deslizador mt-3"
        style={{ ["--pct" as string]: `${pct}%` }}
      />
    </div>
  );
}

export function ComoFunciona({ c }: { c: Conteudo }) {
  const [ativo, setAtivo] = useState(0);

  return (
    <section id="como" className="secao bg-papel">
      <div className="env">
        <div className="grid gap-10 lg:grid-cols-[.52fr_.48fr] lg:items-end">
          <div>
            <p className="chapeu">{c.comoFunciona.chapeu}</p>
            <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.comoFunciona.titulo)} />
          </div>
          <p className="lead">{c.comoFunciona.lead}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {c.comoFunciona.passos.map((passo, i) => {
            const aberto = ativo === i;
            return (
              <Revelar key={passo.n} atraso={i * 110}>
                <article
                  className="group relative h-full overflow-hidden rounded-[26px] bg-navy text-white shadow-[var(--shadow-suave)]"
                  onMouseEnter={() => setAtivo(i)}
                  onFocus={() => setAtivo(i)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={passo.foto}
                      alt={passo.alt}
                      width={1400}
                      height={1050}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover transition-transform duration-[900ms] ${aberto ? "scale-105" : "scale-100"}`}
                    />
                    <span
                      className="absolute inset-0"
                      aria-hidden="true"
                      style={{ background: "linear-gradient(180deg, rgba(6,27,73,.10) 0%, rgba(6,27,73,.86) 82%)" }}
                    />
                    <span className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-teal px-4 py-2.5 font-display text-[14px] font-extrabold text-navy">
                      <Icone nome={passo.icone} className="h-[18px] w-[18px]" />
                      {passo.n}
                    </span>
                  </div>
                  <div className="relative -mt-12 p-7">
                    <h3 className="font-display text-[20px] font-bold leading-tight">{passo.titulo}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/65">{passo.texto}</p>
                  </div>
                </article>
              </Revelar>
            );
          })}
        </div>

        <Revelar>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-[26px] bg-teal p-8 text-navy sm:p-10">
            <div>
              <p className="num font-display text-[clamp(34px,4.4vw,52px)] font-extrabold leading-none">
                {c.comoFunciona.destaque.valor}
              </p>
              <p className="mt-2 text-[15px] font-semibold">{c.comoFunciona.destaque.rotulo}</p>
            </div>
            <p className="max-w-[34ch] text-[15px] leading-snug text-navy/75">{c.comoFunciona.destaque.nota}</p>
            <p className="rounded-full bg-navy px-5 py-3 text-[13.5px] font-bold text-teal">{c.comoFunciona.regra}</p>
          </div>
        </Revelar>
      </div>
    </section>
  );
}


/* ------------------------------------------------ o que entregamos --- */

export function Entrega({ c }: { c: Conteudo }) {
  return (
    <section id="entrega" className="secao bg-papel">
      <div className="env">
        <div className="grid gap-10 lg:grid-cols-[.52fr_.48fr] lg:items-end">
          <div>
            <p className="chapeu">{c.entrega.chapeu}</p>
            <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.entrega.titulo)} />
          </div>
          <p className="lead">{c.entrega.lead}</p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-tinta/8 sm:grid-cols-2 lg:grid-cols-3">
          {c.entrega.itens.map((item, i) => (
            <Revelar key={item.titulo} como="li" atraso={(i % 3) * 80} className="bg-papel">
              <article className="group flex h-full flex-col gap-4 bg-white p-8 transition-colors duration-300 hover:bg-navy">
                <IconeCaixa nome={item.icone} tom="claro" className="transition-colors duration-300 group-hover:bg-teal group-hover:text-navy" />
                <h3 className="font-display text-[18.5px] font-bold text-tinta transition-colors duration-300 group-hover:text-white">
                  {item.titulo}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-tinta-2 transition-colors duration-300 group-hover:text-white/65">
                  {item.texto}
                </p>
              </article>
            </Revelar>
          ))}
        </ul>

        <Revelar>
          <p className="mt-7 inline-flex items-center gap-3 rounded-full bg-navy px-6 py-4 font-display text-[16.5px] font-bold text-white">
            <Icone nome="check" className="h-5 w-5 text-teal" />
            {c.entrega.fecho}
          </p>
        </Revelar>
      </div>
    </section>
  );
}
