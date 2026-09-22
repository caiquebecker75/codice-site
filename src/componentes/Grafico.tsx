import { useId, useState } from "react";
import { useAoEntrar } from "../hooks/uso";

/* =====================================================================
   Gráfico de linhas em SVG puro.
   Serve à comparação de custo e à curva de lucro do simulador. Sem
   biblioteca: são duas séries, uma grade e um marcador de cruzamento.
   O leitor de tela recebe a tabela equivalente, logo abaixo.
   ===================================================================== */

export interface Serie {
  nome: string;
  cor: string;
  valores: number[];
  tracejada?: boolean;
  area?: boolean;
}

export function GraficoLinhas({
  series,
  rotulos,
  formatar,
  cruzamento,
  rotuloCruzamento,
  altura = 260,
  escuro = false,
  titulo,
}: {
  series: Serie[];
  rotulos: string[];
  formatar: (v: number) => string;
  /** índice em que a comparação vira, marcado na linha do tempo */
  cruzamento?: number | null;
  rotuloCruzamento?: string;
  altura?: number;
  escuro?: boolean;
  titulo: string;
}) {
  const base = useId().replace(/:/g, "");
  const { alvo, dentro } = useAoEntrar<HTMLDivElement>("0px 0px -15% 0px");
  const [ativo, setAtivo] = useState<number | null>(null);

  const L = 16;
  const R = 16;
  const T = 18;
  const B = 30;
  const larg = 760;
  const alt = altura;
  const n = rotulos.length;

  const todos = series.flatMap((s) => s.valores);
  const maior = Math.max(...todos, 1);
  const menor = Math.min(...todos, 0);
  const faixa = maior - menor || 1;

  const x = (i: number) => L + (i * (larg - L - R)) / Math.max(1, n - 1);
  const y = (v: number) => T + (1 - (v - menor) / faixa) * (alt - T - B);

  const linha = (valores: number[]) => valores.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = (valores: number[]) => `${linha(valores)} L${x(n - 1).toFixed(1)},${y(menor).toFixed(1)} L${x(0).toFixed(1)},${y(menor).toFixed(1)} Z`;

  const grade = escuro ? "rgba(255,255,255,.10)" : "rgba(11,27,58,.10)";
  const textoEixo = escuro ? "rgba(255,255,255,.42)" : "rgba(108,122,149,.9)";

  return (
    <div ref={alvo}>
      <div className="relative">
        <svg
          viewBox={`0 0 ${larg} ${alt}`}
          className="w-full"
          style={{ height: "auto" }}
          role="img"
          aria-label={titulo}
          onMouseLeave={() => setAtivo(null)}
        >
          <defs>
            {series.map((s, i) => (
              <linearGradient key={i} id={`${base}-g${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.cor} stopOpacity="0.28" />
                <stop offset="100%" stopColor={s.cor} stopOpacity="0" />
              </linearGradient>
            ))}
          </defs>

          {[0, 0.25, 0.5, 0.75, 1].map((p) => (
            <line key={p} x1={L} x2={larg - R} y1={T + p * (alt - T - B)} y2={T + p * (alt - T - B)} stroke={grade} strokeWidth="1" />
          ))}

          {series.map((s, i) =>
            s.area ? (
              <path
                key={`a${i}`}
                d={area(s.valores)}
                fill={`url(#${base}-g${i})`}
                style={{ opacity: dentro ? 1 : 0, transition: "opacity .9s ease .4s" }}
              />
            ) : null,
          )}

          {series.map((s, i) => (
            <path
              key={`l${i}`}
              d={linha(s.valores)}
              fill="none"
              stroke={s.cor}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.tracejada ? "7 7" : `${larg * 2}`}
              strokeDashoffset={s.tracejada ? 0 : dentro ? 0 : larg * 2}
              style={{ transition: "stroke-dashoffset 1.6s cubic-bezier(.2,.7,.3,1)", opacity: s.tracejada && !dentro ? 0 : 1 }}
            />
          ))}

          {cruzamento != null && cruzamento >= 0 && (
            <g style={{ opacity: dentro ? 1 : 0, transition: "opacity .5s ease 1.4s" }}>
              <line x1={x(cruzamento)} x2={x(cruzamento)} y1={T} y2={alt - B} stroke={escuro ? "#fff" : "#0B1B3A"} strokeWidth="1" strokeDasharray="4 4" opacity=".4" />
              <circle cx={x(cruzamento)} cy={y(series[0].valores[cruzamento])} r="5.5" fill={escuro ? "#fff" : "#0B1B3A"} />
            </g>
          )}

          {ativo != null && (
            <g>
              <line x1={x(ativo)} x2={x(ativo)} y1={T} y2={alt - B} stroke={escuro ? "rgba(255,255,255,.35)" : "rgba(11,27,58,.25)"} strokeWidth="1" />
              {series.map((s, i) => (
                <circle key={i} cx={x(ativo)} cy={y(s.valores[ativo])} r="4.5" fill={s.cor} />
              ))}
            </g>
          )}

          {rotulos.map((rotulo, i) => (
            <g key={i}>
              <rect
                x={x(i) - (larg - L - R) / (2 * Math.max(1, n - 1))}
                y={T}
                width={(larg - L - R) / Math.max(1, n - 1)}
                height={alt - T - B}
                fill="transparent"
                onMouseEnter={() => setAtivo(i)}
              />
              {(n <= 12 || i % 2 === 0) && (
                <text x={x(i)} y={alt - 10} textAnchor="middle" fontSize="11.5" fill={textoEixo} fontFamily="Inter, sans-serif">
                  {rotulo}
                </text>
              )}
            </g>
          ))}
        </svg>

        {ativo != null && (
          <div
            className={`pointer-events-none absolute top-2 rounded-xl px-3.5 py-2.5 text-[12.5px] shadow-lg ${
              escuro ? "bg-white text-navy" : "bg-navy text-white"
            }`}
            style={{ left: `${(x(ativo) / larg) * 100}%`, transform: "translateX(-50%)" }}
          >
            <p className="font-semibold">{rotulos[ativo]}</p>
            {series.map((s) => (
              <p key={s.nome} className="num mt-0.5 whitespace-nowrap">
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle" style={{ background: s.cor }} />
                {formatar(s.valores[ativo])}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        {series.map((s) => (
          <span key={s.nome} className={`inline-flex items-center gap-2 text-[13px] ${escuro ? "text-white/65" : "text-tinta-2"}`}>
            <span className="h-2.5 w-6 rounded-full" style={{ background: s.tracejada ? `repeating-linear-gradient(90deg, ${s.cor} 0 5px, transparent 5px 9px)` : s.cor }} />
            {s.nome}
          </span>
        ))}
        {cruzamento != null && rotuloCruzamento && (
          <span className={`inline-flex items-center gap-2 text-[13px] ${escuro ? "text-white/65" : "text-tinta-2"}`}>
            <span className={`h-2.5 w-2.5 rounded-full ${escuro ? "bg-white" : "bg-navy"}`} />
            {rotuloCruzamento}
          </span>
        )}
      </div>

      {/* mesma informação, em tabela, para leitor de tela */}
      <table className="sr-only">
        <caption>{titulo}</caption>
        <thead>
          <tr>
            <th scope="col">Período</th>
            {series.map((s) => (
              <th key={s.nome} scope="col">{s.nome}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rotulos.map((rotulo, i) => (
            <tr key={rotulo}>
              <th scope="row">{rotulo}</th>
              {series.map((s) => (
                <td key={s.nome}>{formatar(s.valores[i])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
