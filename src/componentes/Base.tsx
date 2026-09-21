import { useEffect, useRef, useState, type ReactNode } from "react";
import { useAoEntrar, useContagem, useMenosMovimento } from "../hooks/uso";

/* =====================================================================
   Peças reutilizadas pelas seções. Nenhuma delas depende do navegador
   para renderizar: no servidor saem no estado final, o que mantém o
   HTML legível sem JavaScript.
   ===================================================================== */

/** Revela o bloco quando ele entra na tela. */
export function Revelar({
  children,
  atraso = 0,
  como: Como = "div",
  className = "",
}: {
  children: ReactNode;
  atraso?: number;
  como?: "div" | "li" | "section" | "article" | "p" | "span";
  className?: string;
}) {
  const { alvo, dentro } = useAoEntrar<HTMLDivElement>();
  return (
    <Como
      ref={alvo as never}
      className={`revelar ${dentro ? "visivel" : ""} ${className}`}
      style={{ transitionDelay: `${atraso}ms` }}
    >
      {children}
    </Como>
  );
}

/** Título que sobe por dentro de uma máscara, linha a linha. */
export function TituloCortina({
  linhas,
  className = "",
  id,
}: {
  linhas: ReactNode[];
  className?: string;
  id?: string;
}) {
  const { alvo, dentro } = useAoEntrar<HTMLHeadingElement>("0px 0px -18% 0px");
  return (
    <h2 id={id} ref={alvo} className={`cortina ${dentro ? "visivel" : ""} ${className}`}>
      {linhas.map((linha, i) => (
        <span key={i}>
          <span style={{ transitionDelay: `${i * 90}ms` }}>{linha}</span>
        </span>
      ))}
    </h2>
  );
}

/** Número que conta ao aparecer. */
export function Contador({ valor, sufixo = "" }: { valor: number; sufixo?: string }) {
  const { alvo, dentro } = useAoEntrar<HTMLSpanElement>();
  const atual = useContagem(valor, dentro);
  return (
    <span ref={alvo} className="num">
      {atual}
      {sufixo}
    </span>
  );
}

/** Faixa contínua de palavras. Pausa no hover e no foco. */
export function Faixa({ palavras }: { palavras: string[] }) {
  const dobro = [...palavras, ...palavras, ...palavras, ...palavras];
  return (
    <div className="faixa py-6" aria-hidden="true">
      <div className="faixa-trilho">
        {dobro.map((palavra, i) => (
          <span key={i} className="flex items-center gap-8 pr-8">
            <span className="font-display text-[clamp(28px,5vw,58px)] font-extrabold uppercase tracking-tight text-white/85">
              {palavra}
            </span>
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-teal" aria-hidden="true">
              <path d="M12 2l9 5.2v9.6L12 22l-9-5.2V7.2z" fill="currentColor" opacity=".9" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Botão que puxa levemente o cursor. Sem efeito no toque e no teclado. */
export function BotaoMagnetico({
  children,
  href,
  className = "",
  onClick,
  type,
  disabled,
  externo,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  externo?: boolean;
}) {
  const no = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const menos = useMenosMovimento();

  useEffect(() => {
    const alvo = no.current;
    if (!alvo || menos) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const mover = (evento: PointerEvent) => {
      const caixa = alvo.getBoundingClientRect();
      const x = evento.clientX - caixa.left - caixa.width / 2;
      const y = evento.clientY - caixa.top - caixa.height / 2;
      alvo.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px)`;
    };
    const sair = () => {
      alvo.style.transform = "";
    };
    alvo.addEventListener("pointermove", mover);
    alvo.addEventListener("pointerleave", sair);
    return () => {
      alvo.removeEventListener("pointermove", mover);
      alvo.removeEventListener("pointerleave", sair);
    };
  }, [menos]);

  if (href) {
    return (
      <a
        ref={no}
        href={href}
        className={className}
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button ref={no} type={type ?? "button"} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

/** Lista de perguntas, uma aberta por vez, navegável pelo teclado. */
export function Acordeao({ itens }: { itens: { pergunta: string; resposta: string }[] }) {
  const [aberto, setAberto] = useState<number | null>(0);
  return (
    <div className="divide-y divide-tinta/10 border-y border-tinta/10">
      {itens.map((item, i) => {
        const ativo = aberto === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                className="group flex w-full items-start gap-5 py-6 text-left"
                aria-expanded={ativo}
                aria-controls={`resposta-${i}`}
                id={`pergunta-${i}`}
                onClick={() => setAberto(ativo ? null : i)}
              >
                <span className="mt-1 font-display text-sm font-bold text-azul num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-[19px] font-bold leading-snug text-tinta sm:text-[22px]">
                  {item.pergunta}
                </span>
                <span
                  className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-papel-2 transition-transform duration-300 ${
                    ativo ? "rotate-45 bg-azul text-white" : "text-tinta-2"
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`resposta-${i}`}
              role="region"
              aria-labelledby={`pergunta-${i}`}
              hidden={!ativo}
              className="pb-7 pl-11 pr-10 text-[16px] leading-relaxed text-tinta-2"
            >
              {item.resposta}
            </div>
          </div>
        );
      })}
    </div>
  );
}
