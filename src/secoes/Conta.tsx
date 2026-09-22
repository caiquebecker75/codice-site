import { useMemo, useState } from "react";
import { GraficoLinhas } from "../componentes/Grafico";
import { Icone } from "../componentes/Icones";
import { Cabeca } from "./Home";
import { real } from "./Produto";
import { CONTATO } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   A conta da rede: a comparação de desembolso e o simulador, juntos.
   Quem chega aqui já entendeu o produto e quer saber se fecha a conta.
   ===================================================================== */

const SEMANAS_MES = 52 / 12;
const MANUTENCAO = 70;

export function Conta({ c }: { c: Conteudo }) {
  const [lojas, setLojas] = useState(10);
  const [displays, setDisplays] = useState(4);
  const [cota, setCota] = useState(1500);
  const [ocupacao, setOcupacao] = useState(50);

  const curvaComprar = Array.from({ length: 12 }, (_, i) => c.conta.comprar.valor + MANUTENCAO * i);
  const curvaAssinar = Array.from({ length: 12 }, (_, i) => c.conta.assinar.valor * (i + 1));
  const virada = curvaAssinar.findIndex((v, i) => v > curvaComprar[i]);

  const conta = useMemo(() => {
    const frota = lojas * displays;
    const receita = frota * SEMANAS_MES * (ocupacao / 100) * cota * 12;
    const aluguel = frota * c.conta.assinar.valor * 12;
    return { receita, aluguel, lucro: receita - aluguel };
  }, [lojas, displays, cota, ocupacao, c.conta.assinar.valor]);

  const corpoEmail = [
    `${c.conta.simulador.campos.lojas}: ${lojas}`,
    `${c.conta.simulador.campos.displays}: ${displays}`,
    `${c.conta.simulador.campos.cota}: ${real(cota)}`,
    `${c.conta.simulador.campos.ocupacao}: ${ocupacao}%`,
    "",
    `${c.conta.simulador.saidas.receita}: ${real(conta.receita)}`,
    `${c.conta.simulador.saidas.aluguel}: ${real(conta.aluguel)}`,
    `${c.conta.simulador.saidas.lucro}: ${real(conta.lucro)}`,
  ].join("\n");

  return (
    <section id="conta" className="secao bg-white">
      <div className="env">
        <Cabeca chapeu={c.conta.chapeu} titulo={c.conta.titulo} lead={c.conta.lead} centro />

        {/* comparação de desembolso */}
        <div className="mt-12 grid gap-5 lg:grid-cols-[.42fr_.58fr]">
          <div className="grid content-start gap-4">
            <div className="rounded-[22px] border border-tinta/8 bg-white p-7">
              <p className="text-[13.5px] font-semibold text-tinta-3">{c.conta.comprar.titulo}</p>
              <p className="num mt-2 font-display text-[clamp(30px,3.4vw,40px)] font-extrabold leading-none text-tinta-3">
                {real(c.conta.comprar.valor)}
              </p>
              <p className="mt-2 text-[13.5px] text-tinta-3">{c.conta.comprar.nota}</p>
            </div>

            <div className="relative rounded-[22px] bg-navy p-7 text-white">
              <span className="absolute right-6 top-6 rounded-full bg-teal px-3 py-1.5 text-[11.5px] font-bold text-navy">
                {c.conta.assinar.selo}
              </span>
              <p className="text-[13.5px] font-semibold text-white/60">{c.conta.assinar.titulo}</p>
              <p className="num mt-2 font-display text-[clamp(30px,3.4vw,40px)] font-extrabold leading-none text-teal">
                {real(c.conta.assinar.valor)}
              </p>
              <p className="mt-2 text-[13.5px] text-white/60">{c.conta.assinar.nota}</p>
            </div>

            <ul className="grid gap-2.5">
              {c.conta.argumento.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-papel px-5 py-4 text-[14.5px] leading-snug text-tinta-2">
                  <Icone nome="check" className="mt-0.5 h-4 w-4 shrink-0 text-azul" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-tinta/8 bg-papel p-7 sm:p-8">
            <h3 className="font-display text-[18px] font-bold text-navy">{c.conta.grafico.titulo}</h3>
            <div className="mt-6">
              <GraficoLinhas
                titulo={c.conta.grafico.titulo}
                rotulos={Array.from({ length: 12 }, (_, i) => `${c.conta.grafico.mes}${i + 1}`)}
                formatar={real}
                cruzamento={virada}
                rotuloCruzamento={c.conta.grafico.virada}
                series={[
                  { nome: c.conta.grafico.serieComprar, cor: "#6C7A95", valores: curvaComprar, tracejada: true },
                  { nome: c.conta.grafico.serieAssinar, cor: "#2F73FF", valores: curvaAssinar, area: true },
                ]}
              />
            </div>
          </div>
        </div>

        {/* simulador */}
        <div className="mt-6 overflow-hidden rounded-[28px] bg-navy text-white">
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[.44fr_.56fr] lg:gap-12">
            <div>
              <h3 className="font-display text-[clamp(22px,2.4vw,28px)] font-extrabold">{c.conta.simulador.titulo}</h3>
              <div className="mt-7 grid gap-6">
                <Deslizador rotulo={c.conta.simulador.campos.lojas} valor={lojas} min={1} max={120} passo={1} aoMudar={setLojas} />
                <Deslizador rotulo={c.conta.simulador.campos.displays} valor={displays} min={1} max={12} passo={1} aoMudar={setDisplays} />
                <Deslizador rotulo={c.conta.simulador.campos.cota} valor={cota} min={500} max={4000} passo={100} aoMudar={setCota} formatar={real} />
                <Deslizador rotulo={c.conta.simulador.campos.ocupacao} valor={ocupacao} min={10} max={100} passo={5} aoMudar={setOcupacao} formatar={(v) => `${v}%`} />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[11.5px] font-bold uppercase tracking-[.16em] text-white/35">{c.conta.simulador.periodo}</p>

              <div className="mt-5 grid gap-3">
                <Saida rotulo={c.conta.simulador.saidas.receita} valor={conta.receita} />
                <Saida rotulo={c.conta.simulador.saidas.aluguel} valor={conta.aluguel} discreto />
                <Saida rotulo={c.conta.simulador.saidas.lucro} valor={conta.lucro} destaque />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  className="botao botao-teal"
                  href={`mailto:${CONTATO.email}?subject=${encodeURIComponent("Simulação da Códice")}&body=${encodeURIComponent(corpoEmail)}`}
                >
                  {c.conta.simulador.cta}
                  <Icone nome="seta" className="h-4 w-4" />
                </a>
                <p className="text-[12px] text-white/35">{c.conta.simulador.nota}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Saida({ rotulo, valor, destaque, discreto }: { rotulo: string; valor: number; destaque?: boolean; discreto?: boolean }) {
  return (
    <div className={`flex items-center justify-between gap-5 rounded-2xl px-6 py-5 ${destaque ? "bg-teal text-navy" : "bg-white/6"}`}>
      <p className={`text-[13.5px] font-semibold ${destaque ? "text-navy/70" : "text-white/50"}`}>{rotulo}</p>
      <p className={`num font-display text-[clamp(20px,2.2vw,26px)] font-extrabold leading-none ${discreto ? "text-white/55" : ""}`}>
        {real(valor)}
      </p>
    </div>
  );
}

function Deslizador({
  rotulo,
  valor,
  min,
  max,
  passo,
  aoMudar,
  formatar,
}: {
  rotulo: string;
  valor: number;
  min: number;
  max: number;
  passo: number;
  aoMudar: (v: number) => void;
  formatar?: (v: number) => string;
}) {
  const id = `sim-${rotulo.replace(/\W+/g, "-").toLowerCase()}`;
  const pct = ((valor - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[13.5px] font-semibold text-white/70">
          {rotulo}
        </label>
        <output htmlFor={id} className="num font-display text-[19px] font-extrabold text-teal">
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
