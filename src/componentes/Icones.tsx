import type { SVGProps } from "react";

/* =====================================================================
   Ícones autorais da Códice.
   Um único traço (1.7), cantos redondos e a mesma caixa de 24, para
   que qualquer ícone sirva em qualquer seção sem parecer colagem.
   ===================================================================== */

export type NomeIcone =
  | "display" | "loja" | "calendario" | "dinheiro" | "grafico" | "sensor"
  | "ferramenta" | "caminhao" | "qr" | "tela" | "luz" | "wifi"
  | "escudo" | "relogio" | "mapa" | "camera" | "check" | "seta"
  | "whatsapp" | "email" | "fabrica" | "pessoas" | "alerta" | "balanca";

const D: Record<NomeIcone, string> = {
  display: "M4 4h16v12H4zM9 20h6M12 16v4",
  loja: "M4 9l2-5h12l2 5M4 9v11h16V9M4 9h16M10 20v-6h4v6",
  calendario: "M4 7h16v13H4zM8 3v4M16 3v4M4 11h16",
  dinheiro: "M3 7h18v10H3zM12 9.6a2.4 2.4 0 100 4.8 2.4 2.4 0 000-4.8M6.5 10v4M17.5 10v4",
  grafico: "M4 20V9M10 20V4M16 20v-7M22 20H2",
  sensor: "M12 3v6M5.6 5.6l4.2 4.2M3 12h6M5.6 18.4l4.2-4.2M18.4 5.6l-4.2 4.2M21 12h-6M18.4 18.4l-4.2-4.2M12 21v-6",
  ferramenta: "M14.5 5.5a4 4 0 105.2 5.2L21 9.3 14.7 3 13.3 4.3zM12.9 9.6L4 18.5V21h2.5l8.9-8.9",
  caminhao: "M3 7h11v10H3zM14 11h4l3 3v3h-7M6.5 20a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6M17.5 20a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6",
  qr: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z",
  tela: "M3 5h18v11H3zM8 20h8M12 16v4M7 9h6",
  luz: "M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9V16h7v-2.1A6 6 0 0012 3z",
  wifi: "M5 12.5a10 10 0 0114 0M8 16a6 6 0 018 0M12 19.5h.01",
  escudo: "M12 3l8 3v6c0 4.5-3.2 7.6-8 9-4.8-1.4-8-4.5-8-9V6zM9 12l2 2 4-4",
  relogio: "M12 4a8 8 0 100 16 8 8 0 000-16M12 8v4.5l3 1.8",
  mapa: "M9 3L3 5.5v15L9 18l6 3 6-2.5v-15L15 6zM9 3v15M15 6v15",
  camera: "M4 7h3l1.5-2h7L17 7h3v13H4zM12 17a4 4 0 100-8 4 4 0 000 8",
  check: "M5 13l4 4 10-10",
  seta: "M4 12h15M13 6l6 6-6 6",
  whatsapp: "M20 11.5a8 8 0 01-12 6.9L4 19.5l1.2-3.8A8 8 0 1120 11.5zM9 9.5c0 3 2.5 5.5 5.5 5.5l.9-1.6-2-1-1 .9c-1-.5-1.8-1.3-2.3-2.3l.9-1-1-2z",
  email: "M3 6h18v12H3zM3 7l9 6 9-6",
  fabrica: "M3 20V10l5 3V10l5 3V6l8 4v10zM3 20h18M8 16h2M14 16h2",
  pessoas: "M9 11a3.2 3.2 0 100-6.4A3.2 3.2 0 009 11M3 20v-1.5C3 16 5.7 15 9 15s6 1 6 3.5V20M16 11.2a3 3 0 10-.6-5.9M17 15c2.4.3 4 1.4 4 3.5V20",
  alerta: "M12 4l9 16H3zM12 10v4M12 17h.01",
  balanca: "M12 4v16M7 8h10M5 8l-2.5 6h5zM19 8l-2.5 6h5zM8 20h8",
};

export function Icone({
  nome,
  className = "h-5 w-5",
  ...resto
}: { nome: NomeIcone; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...resto}
    >
      <path d={D[nome]} />
    </svg>
  );
}

/** Ícone dentro de um quadrado sólido, o padrão das listas do site. */
export function IconeCaixa({
  nome,
  tom = "azul",
  className = "",
}: {
  nome: NomeIcone;
  tom?: "azul" | "teal" | "navy" | "claro";
  className?: string;
}) {
  const fundos: Record<string, string> = {
    azul: "bg-azul text-white",
    teal: "bg-teal text-navy",
    navy: "bg-navy text-teal",
    claro: "bg-papel-2 text-navy",
  };
  return (
    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${fundos[tom]} ${className}`}>
      <Icone nome={nome} className="h-[22px] w-[22px]" />
    </span>
  );
}
