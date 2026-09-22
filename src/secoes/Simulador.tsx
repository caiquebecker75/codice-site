import { useMemo, useState } from "react";
import { TituloCortina } from "../componentes/Base";
import { Deslizador, partirTitulo, real } from "./Mercado";
import { CONTATO } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Simulador da rede.
   Mesma conta da apresentação: mês médio de 4,3 semanas, receita de
   cota menos assinatura, acumulada mês a mês. Tudo roda no navegador.
   ===================================================================== */

const SEMANAS_MES = 52 / 12;

export function Simulador({ c }: { c: Conteudo }) {
  const [pacote, setPacote] = useState(0);
  const [displays, setDisplays] = useState(4);
  const [lojas, setLojas] = useState(10);
  const [cota, setCota] = useState(1500);
  const [ocupacao, setOcupacao] = useState(50);
  const [periodo, setPeriodo] = useState(1);

  const meses = c.simulador.periodos[periodo].meses;
  const preco = c.pacotes.itens[pacote].preco;

  const conta = useMemo(() => {
    const frota = lojas * displays;
    const receitaMes = frota * SEMANAS_MES * (ocupacao / 100) * cota;
    const aluguelMes = frota * preco;
    const lucroMes = receitaMes - aluguelMes;
    const serie = Array.from({ length: meses }, (_, i) => lucroMes * (i + 1));
    return {
      frota,
      receita: receitaMes * meses,
      aluguel: aluguelMes * meses,
      lucro: lucroMes * meses,
      serie,
      positivo: lucroMes > 0,
    };
  }, [lojas, displays, ocupacao, cota, preco, meses]);

  const topo = Math.max(...conta.serie.map(Math.abs), 1);

  const corpoEmail = [
    `${c.simulador.campos.pacote}: ${c.pacotes.itens[pacote].nome}`,
    `${c.simulador.campos.lojas}: ${lojas}`,
    `${c.simulador.campos.displays}: ${displays}`,
    `${c.simulador.campos.cota}: ${real(cota)}`,
    `${c.simulador.campos.ocupacao}: ${ocupacao}%`,
    `${c.simulador.campos.periodo}: ${c.simulador.periodos[periodo].rotulo}`,
    "",
    `${c.simulador.saidas.receita}: ${real(conta.receita)}`,
    `${c.simulador.saidas.aluguel}: ${real(conta.aluguel)}`,
    `${c.simulador.saidas.lucro}: ${real(conta.lucro)}`,
  ].join("\n");

  return (
    <section id="simulador" className="escuro grao relative overflow-hidden bg-navy-800">
      <div className="env secao">
        <div className="grid gap-10 lg:grid-cols-[.5fr_.5fr] lg:items-end">
          <div>
            <p className="chapeu">{c.simulador.chapeu}</p>
            <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.simulador.titulo)} />
          </div>
          <p className="lead">{c.simulador.lead}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[.42fr_.58fr]">
          <div className="rounded-[28px] bg-white/6 p-7 sm:p-8">
            <fieldset>
              <legend className="mb-3 text-[13.5px] font-semibold text-white/70">{c.simulador.campos.pacote}</legend>
              <div className="grid grid-cols-3 gap-2">
                {c.pacotes.itens.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={pacote === i}
                    onClick={() => setPacote(i)}
                    className={`rounded-xl px-3 py-3 text-[14px] font-semibold transition-colors ${
                      pacote === i ? "bg-teal text-navy" : "bg-white/8 text-white/70 hover:bg-white/14"
                    }`}
                  >
                    {item.nome}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-7 grid gap-6">
              <Deslizador escuro rotulo={c.simulador.campos.lojas} valor={lojas} min={1} max={120} passo={1} aoMudar={setLojas} />
              <Deslizador escuro rotulo={c.simulador.campos.displays} valor={displays} min={1} max={12} passo={1} aoMudar={setDisplays} />
              <Deslizador escuro rotulo={c.simulador.campos.cota} valor={cota} min={500} max={4000} passo={100} aoMudar={setCota} formatar={real} />
              <Deslizador escuro rotulo={c.simulador.campos.ocupacao} valor={ocupacao} min={10} max={100} passo={5} aoMudar={setOcupacao} formatar={(v) => `${v}%`} />
            </div>

            <fieldset className="mt-7">
              <legend className="mb-3 text-[13.5px] font-semibold text-white/70">{c.simulador.campos.periodo}</legend>
              <div className="grid grid-cols-3 gap-2">
                {c.simulador.periodos.map((item, i) => (
                  <button
                    key={item.rotulo}
                    type="button"
                    aria-pressed={periodo === i}
                    onClick={() => setPeriodo(i)}
                    className={`rounded-xl px-3 py-3 text-[14px] font-semibold transition-colors ${
                      periodo === i ? "bg-white text-navy" : "bg-white/8 text-white/70 hover:bg-white/14"
                    }`}
                  >
                    {item.rotulo}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <Saida rotulo={c.simulador.saidas.receita} valor={conta.receita} />
              <Saida rotulo={c.simulador.saidas.aluguel} valor={conta.aluguel} discreto />
              <Saida rotulo={c.simulador.saidas.lucro} valor={conta.lucro} destaque />
            </div>

            <div className="flex-1 rounded-[28px] bg-white/6 p-7">
              <p className="text-[12px] font-bold uppercase tracking-[.14em] text-white/40">{c.simulador.grafico}</p>
              <div className="mt-6 flex h-52 items-end gap-1.5" role="img" aria-label={`${c.simulador.grafico}: ${real(conta.lucro)}`}>
                {conta.serie.map((valor, i) => (
                  <span key={i} className="flex h-full flex-1 flex-col justify-end">
                    <span
                      className={`w-full rounded-t transition-[height] duration-500 ${conta.positivo ? "bg-gradient-to-t from-azul to-teal" : "bg-[#C0392B]"}`}
                      style={{ height: `${Math.max(3, (Math.abs(valor) / topo) * 100)}%` }}
                    />
                  </span>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[11.5px] text-white/35">
                <span>{c.simulador.periodos[0].rotulo}</span>
                <span>{c.simulador.periodos[periodo].rotulo}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-[46ch] text-[12.5px] leading-relaxed text-white/35">{c.simulador.nota}</p>
              <a
                className="botao botao-teal"
                href={`mailto:${CONTATO.email}?subject=${encodeURIComponent("Simulação da Códice")}&body=${encodeURIComponent(corpoEmail)}`}
              >
                {c.simulador.enviar}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Saida({ rotulo, valor, destaque, discreto }: { rotulo: string; valor: number; destaque?: boolean; discreto?: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${destaque ? "bg-teal text-navy" : "bg-white/6 text-white"}`}>
      <p className={`text-[11.5px] font-bold uppercase tracking-[.12em] ${destaque ? "text-navy/60" : "text-white/40"}`}>{rotulo}</p>
      <p
        className={`num mt-2 font-display text-[clamp(20px,2.3vw,28px)] font-extrabold leading-none ${
          discreto ? "text-white/60" : ""
        }`}
      >
        {real(valor)}
      </p>
    </div>
  );
}
