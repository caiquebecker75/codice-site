import { useId, useState } from "react";
import { Faixa, Revelar, TituloCortina } from "../componentes/Base";
import { Hexagono } from "../componentes/Marca";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Manifesto, desafio e a virada.
   Três seções com moldes diferentes de propósito: editorial, grade
   interativa e demonstração com as regras reais do produto.
   ===================================================================== */

export function Manifesto({ c }: { c: Conteudo }) {
  return (
    <section id="manifesto" className="escuro relative overflow-hidden bg-navy-800">
      <div className="env secao relative">
        <div className="grid gap-12 lg:grid-cols-[.38fr_.62fr] lg:gap-20">
          <div>
            <p className="chapeu">{c.manifesto.chapeu}</p>
            <Hexagono className="mt-10 hidden h-40 w-40 text-teal/40 lg:block" />
          </div>
          <div>
            <TituloCortina
              className="titulo-secao max-w-[19ch]"
              linhas={partirTitulo(c.manifesto.titulo)}
            />
            <div className="mt-10 grid gap-6 border-l-2 border-teal/40 pl-6 sm:pl-9">
              {c.manifesto.paragrafos.map((paragrafo, i) => (
                <Revelar key={i} atraso={i * 90}>
                  <p className={`text-[17px] leading-relaxed ${i === 2 ? "text-white" : "text-white/70"}`}>
                    {paragrafo}
                  </p>
                </Revelar>
              ))}
            </div>
            <Revelar atraso={180}>
              <p className="mt-10 font-display text-[clamp(22px,2.6vw,32px)] font-extrabold text-teal">
                {c.manifesto.assinatura}
              </p>
            </Revelar>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-navy-900/60">
        <Faixa palavras={c.manifesto.marquee} />
      </div>
    </section>
  );
}

export function Desafio({ c }: { c: Conteudo }) {
  const [aberto, setAberto] = useState<number | null>(null);

  return (
    <section id="desafio" className="secao bg-papel">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.desafio.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.desafio.titulo)} />
          <p className="lead mt-6">{c.desafio.lead}</p>
          <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[.14em] text-azul">
            <span className="h-1.5 w-1.5 animate-[pulsar_2.4s_ease-in-out_infinite] rounded-full bg-azul" aria-hidden="true" />
            {c.desafio.instrucao}
          </p>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2">
          {c.desafio.itens.map((item, i) => {
            const ativo = aberto === i;
            return (
              <Revelar key={item.n} como="li" atraso={(i % 2) * 90}>
                <button
                  type="button"
                  aria-expanded={ativo}
                  onClick={() => setAberto(ativo ? null : i)}
                  className={`group relative flex h-full w-full flex-col items-start overflow-hidden rounded-[26px] p-8 text-left transition-all duration-400 ${
                    ativo ? "bg-navy text-white shadow-[var(--shadow-alta)]" : "bg-white shadow-[var(--shadow-suave)] hover:-translate-y-1"
                  }`}
                >
                  <span
                    className={`font-display text-[54px] font-extrabold leading-none num transition-colors ${
                      ativo ? "text-teal" : "text-papel-2 group-hover:text-azul/25"
                    }`}
                  >
                    {item.n}
                  </span>
                  <span className={`mt-5 font-display text-[21px] font-bold leading-tight ${ativo ? "text-white" : "text-tinta"}`}>
                    {item.titulo}
                  </span>
                  <span className={`mt-3 text-[15px] leading-relaxed ${ativo ? "text-white/70" : "text-tinta-2"}`}>
                    {item.texto}
                  </span>

                  <span
                    className={`grid w-full transition-[grid-template-rows,opacity] duration-500 ${
                      ativo ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block rounded-2xl bg-white/10 p-5 text-[14.5px] leading-relaxed text-teal">
                        {item.efeito}
                      </span>
                    </span>
                  </span>

                  <span
                    className={`mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[.16em] transition-colors ${
                      ativo ? "text-white/60" : "text-azul"
                    }`}
                    aria-hidden="true"
                  >
                    <span className={`grid h-6 w-6 place-items-center rounded-full transition-transform duration-300 ${ativo ? "rotate-45 bg-teal text-navy" : "bg-papel text-azul"}`}>
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </span>
                </button>
              </Revelar>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function Solucao({ c }: { c: Conteudo }) {
  const [aba, setAba] = useState(0);
  const base = useId();

  return (
    <section id="solucao" className="secao relative overflow-hidden bg-papel-2">
      <div className="env">
        <div className="max-w-3xl">
          <p className="chapeu">{c.solucao.chapeu}</p>
          <TituloCortina className="titulo-secao mt-6" linhas={partirTitulo(c.solucao.titulo)} />
          <p className="lead mt-6">{c.solucao.lead}</p>
        </div>

        <div className="mt-12" role="tablist" aria-label={c.solucao.chapeu}>
          <div className="inline-flex rounded-full bg-white p-1.5 shadow-[var(--shadow-suave)]">
            {c.solucao.abas.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                id={`${base}-aba-${i}`}
                aria-selected={aba === i}
                aria-controls={`${base}-painel-${i}`}
                tabIndex={aba === i ? 0 : -1}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                    e.preventDefault();
                    const proximo = (aba + (e.key === "ArrowRight" ? 1 : -1) + c.solucao.abas.length) % c.solucao.abas.length;
                    setAba(proximo);
                    document.getElementById(`${base}-aba-${proximo}`)?.focus();
                  }
                }}
                onClick={() => setAba(i)}
                className={`rounded-full px-6 py-3 text-[15px] font-semibold transition-colors ${
                  aba === i ? "bg-navy text-white" : "text-tinta-2 hover:text-tinta"
                }`}
              >
                {item.nome}
              </button>
            ))}
          </div>
        </div>

        {c.solucao.abas.map((item, i) => (
          <div
            key={item.id}
            role="tabpanel"
            id={`${base}-painel-${i}`}
            aria-labelledby={`${base}-aba-${i}`}
            hidden={aba !== i}
            className="mt-8 grid gap-6 lg:grid-cols-[.86fr_1.14fr]"
          >
            <div className="cartao flex flex-col p-8">
              <h3 className="font-display text-[26px] font-extrabold text-tinta">{item.nome}</h3>
              <p className="mt-1 text-[12.5px] font-bold uppercase tracking-[.12em] text-tinta-3">{item.unidade}</p>
              <dl className="mt-7 grid gap-4">
                {item.linhas.map((linha) => (
                  <div key={linha.rotulo} className="grid grid-cols-[92px_1fr] items-baseline gap-4 border-b border-tinta/8 pb-4">
                    <dt className="text-[13px] font-semibold uppercase tracking-[.08em] text-tinta-3">{linha.rotulo}</dt>
                    <dd className="text-[15.5px] text-tinta">{linha.valor}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 rounded-2xl bg-navy p-6 text-white">
                <p className="text-[12px] font-bold uppercase tracking-[.16em] text-teal">{item.travaTitulo}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-white/75">{item.trava}</p>
              </div>
            </div>

            <div className="cartao flex flex-col p-8">
              <p className="text-[12.5px] font-bold uppercase tracking-[.12em] text-tinta-3">{item.demo}</p>
              {item.id === "midia" ? <DemoSemanas legenda={c.heroi.painel.legenda} /> : <DemoPeriodo />}
            </div>
          </div>
        ))}

        <Revelar>
          <p className="mt-10 max-w-4xl font-display text-[clamp(20px,2.3vw,30px)] font-bold leading-snug text-tinta">
            {c.solucao.fecho}
          </p>
        </Revelar>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- demos ---- */

/** 26 semanas: algumas já vendidas. Selecionar uma vendida mostra a recusa. */
function DemoSemanas({ legenda }: { legenda: [string, string, string] }) {
  const vendidas = [2, 3, 9, 14, 15, 21];
  const [escolhidas, setEscolhidas] = useState<number[]>([]);
  const [recusa, setRecusa] = useState<number | null>(null);

  return (
    <div className="mt-5">
      <div className="grid grid-cols-[repeat(13,minmax(0,1fr))] gap-1.5">
        {Array.from({ length: 26 }, (_, i) => {
          const vendida = vendidas.includes(i);
          const escolhida = escolhidas.includes(i);
          return (
            <button
              key={i}
              type="button"
              aria-label={`Semana ${i + 1}${vendida ? " (vendida)" : ""}`}
              aria-pressed={escolhida}
              onClick={() => {
                if (vendida) {
                  setRecusa(i);
                  window.setTimeout(() => setRecusa((atual) => (atual === i ? null : atual)), 2600);
                  return;
                }
                setRecusa(null);
                setEscolhidas((atual) => (atual.includes(i) ? atual.filter((n) => n !== i) : [...atual, i]));
              }}
              className={`aspect-square rounded-md transition-all duration-200 ${
                vendida
                  ? `bg-azul ${recusa === i ? "ring-2 ring-[#FF6B6B] ring-offset-2" : ""}`
                  : escolhida
                    ? "bg-teal"
                    : "bg-papel-2 hover:bg-papel-2/60"
              }`}
            />
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-[12px] text-tinta-3">
        {legenda.map((rotulo, i) => (
          <span key={rotulo} className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: i === 0 ? "#2F73FF" : i === 1 ? "#1DD4C8" : "#E9EDF5" }} />
            {rotulo}
          </span>
        ))}
      </div>

      <div className="mt-5 min-h-[86px] rounded-2xl bg-papel p-5" aria-live="polite">
        {recusa !== null ? (
          <p className="text-[14.5px] leading-relaxed text-[#B3261E]">
            <b className="font-semibold">CotaIndisponivel</b>
            <span className="mt-1 block text-tinta-2">
              Esta semana já foi vendida para outro anunciante. A transação recusa a segunda venda no ato, com o motivo na tela.
            </span>
          </p>
        ) : escolhidas.length > 0 ? (
          <p className="text-[14.5px] leading-relaxed text-tinta-2">
            <b className="font-semibold text-tinta num">{escolhidas.length}</b> semanas selecionadas. A venda é tudo ou nada: a
            campanha entra inteira ou nenhuma semana é reservada.
          </p>
        ) : (
          <p className="text-[14.5px] leading-relaxed text-tinta-3">
            As semanas em azul já pertencem a outro anunciante. Tente clicar em uma delas.
          </p>
        )}
      </div>
    </div>
  );
}

/** Agenda do ativo: escolher um mês tenta reservar três meses seguidos. */
function DemoPeriodo() {
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const ocupados = [3, 4, 5, 9];
  const [inicio, setInicio] = useState<number | null>(null);
  const conflita = inicio !== null && [inicio, inicio + 1, inicio + 2].some((m) => ocupados.includes(m));

  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-1">
        {meses.map((mes, i) => {
          const ocupado = ocupados.includes(i);
          const tentativa = inicio !== null && i >= inicio && i < inicio + 3;
          return (
            <button
              key={mes}
              type="button"
              aria-label={`${mes}${ocupado ? " (ocupado)" : ""}`}
              aria-pressed={tentativa}
              onClick={() => setInicio(i > 9 ? 9 : i)}
              className={`flex h-20 flex-col items-center justify-end rounded-lg pb-2 text-[10px] font-semibold transition-colors ${
                ocupado
                  ? "bg-navy text-white/70"
                  : tentativa
                    ? conflita
                      ? "bg-[#FFDAD6] text-[#8C1D18]"
                      : "bg-teal text-navy"
                    : "bg-papel-2 text-tinta-3 hover:bg-papel"
              }`}
            >
              {mes}
            </button>
          );
        })}
      </div>

      <div className="mt-5 min-h-[86px] rounded-2xl bg-papel p-5" aria-live="polite">
        {inicio === null ? (
          <p className="text-[14.5px] leading-relaxed text-tinta-3">
            Os meses em azul escuro já têm locação. Clique em um mês para tentar reservar três meses a partir dele.
          </p>
        ) : conflita ? (
          <p className="text-[14.5px] leading-relaxed text-[#B3261E]">
            <b className="font-semibold">PeriodoOcupado</b>
            <span className="mt-1 block text-tinta-2">
              A agenda do ativo já tem locação neste intervalo. A conferência acontece dentro da transação, então não existe
              reserva sobreposta nem em duas sessões ao mesmo tempo.
            </span>
          </p>
        ) : (
          <p className="text-[14.5px] leading-relaxed text-tinta-2">
            Período livre. A reserva grava na agenda do ativo e passa a bloquear qualquer tentativa concorrente.
          </p>
        )}
      </div>
    </div>
  );
}

/** Quebra o título em linhas curtas para a máscara de cortina. */
export function partirTitulo(titulo: string): string[] {
  const palavras = titulo.split(" ");
  const linhas: string[] = [];
  const porLinha = palavras.length > 9 ? Math.ceil(palavras.length / 3) : Math.ceil(palavras.length / 2);
  for (let i = 0; i < palavras.length; i += porLinha) {
    linhas.push(palavras.slice(i, i + porLinha).join(" "));
  }
  return linhas;
}
