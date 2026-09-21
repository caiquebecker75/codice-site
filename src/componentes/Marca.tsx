/* =====================================================================
   Símbolo da Códice: o "C" hexagonal de três faces com as barras de
   sensor. Mesmo desenho do ícone do sistema, redesenhado em componente
   para acompanhar a cor do contexto.
   ===================================================================== */

export function Simbolo({ className = "", titulo }: { className?: string; titulo?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role={titulo ? "img" : "presentation"} aria-label={titulo} aria-hidden={titulo ? undefined : true}>
      <defs>
        <linearGradient id="cod-face" x1="0" y1="0" x2="1" y2=".3">
          <stop offset="0" stopColor="#2F73FF" />
          <stop offset="1" stopColor="#1DD4C8" />
        </linearGradient>
        <linearGradient id="cod-lado" x1="0" y1="0" x2=".6" y2="1">
          <stop offset="0" stopColor="#1DD4C8" />
          <stop offset="1" stopColor="#2F73FF" />
        </linearGradient>
      </defs>
      <g transform="translate(32 32) scale(.92) translate(-31.75 -32)" strokeLinejoin="round" strokeWidth="2">
        <path d="M11 15.5 34 4l19 9.5L30 25z" fill="url(#cod-face)" stroke="url(#cod-face)" />
        <path d="M9 19l16 8v10l-16 8z" fill="url(#cod-lado)" stroke="url(#cod-lado)" />
        <path d="M11 48.5 30 39l23 11.5L34 60z" fill="url(#cod-face)" stroke="url(#cod-face)" />
        <rect x="32" y="27" width="5" height="10" rx="2.5" fill="#2F73FF" />
        <rect x="40" y="23" width="5.5" height="18" rx="2.75" fill="url(#cod-lado)" />
        <rect x="48.5" y="19" width="6" height="26" rx="3" fill="url(#cod-lado)" />
      </g>
    </svg>
  );
}

export function Logotipo({ className = "", escuro = true }: { className?: string; escuro?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Simbolo className="h-8 w-8" />
      <span
        className={`font-display text-[21px] font-extrabold tracking-tight ${escuro ? "text-white" : "text-navy"}`}
      >
        Códice
      </span>
    </span>
  );
}

/** Hexágono fatiado: motivo gráfico usado como marca d'água nas seções. */
export function Hexagono({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M100 8l79.7 46v92L100 192 20.3 146V54z" />
        <path d="M100 38l53.5 30.9v61.8L100 161.6 46.5 130.7V68.9z" opacity=".65" />
        <path d="M100 68l27.6 15.9v31.8L100 131.6 72.4 115.7V83.9z" opacity=".4" />
        <path d="M100 8v184M20.3 54l159.4 92M179.7 54L20.3 146" opacity=".25" />
      </g>
    </svg>
  );
}
