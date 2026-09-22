import { BotaoMagnetico } from "./Base";
import { Icone, IconeCaixa } from "./Icones";
import { CONTATO } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Faixa de contato.
   Aparece três vezes ao longo da página, sempre logo depois de um
   argumento, porque é ali que a pessoa decide falar com a gente.
   ===================================================================== */

export function FaixaCta({
  c,
  indice,
  tom = "teal",
}: {
  c: Conteudo;
  indice: number;
  tom?: "teal" | "navy" | "claro";
}) {
  const item = c.ctas[indice];
  const fundo =
    tom === "teal" ? "bg-teal text-navy" : tom === "navy" ? "bg-navy text-white" : "bg-white text-tinta";

  return (
    <section aria-labelledby={`${item.id}-titulo`} className={tom === "claro" ? "bg-papel-2" : "bg-papel"}>
      <div className="env">
        <div className={`grid items-center gap-7 rounded-[28px] px-8 py-9 sm:px-10 lg:grid-cols-[auto_1fr_auto] ${fundo} ${tom === "claro" ? "shadow-[var(--shadow-suave)]" : ""}`}>
          <IconeCaixa nome={item.icone} tom={tom === "teal" ? "navy" : tom === "navy" ? "teal" : "azul"} className="h-12 w-12" />

          <div>
            <h2 id={`${item.id}-titulo`} className="font-display text-[clamp(21px,2.4vw,28px)] font-extrabold leading-tight">
              {item.titulo}
            </h2>
            <p className={`mt-2 text-[15.5px] leading-snug ${tom === "teal" ? "text-navy/70" : tom === "navy" ? "text-white/60" : "text-tinta-2"}`}>
              {item.texto}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <BotaoMagnetico href="#falar" className={`botao ${tom === "teal" ? "botao-tinta" : "botao-teal"}`}>
              {item.botao}
              <Icone nome="seta" className="h-4 w-4" />
            </BotaoMagnetico>
            {CONTATO.whatsapp && (
              <a
                href={CONTATO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`botao ${tom === "teal" ? "bg-navy/10 text-navy hover:bg-navy/20" : "botao-vazado"}`}
                aria-label={`${c.conversao.alternativaWhatsapp} ${CONTATO.telefone}`}
              >
                <Icone nome="whatsapp" className="h-[18px] w-[18px]" />
                {c.conversao.alternativaWhatsapp}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Botão flutuante de WhatsApp: some quando o formulário está na tela. */
export function BotaoFlutuante({ c }: { c: Conteudo }) {
  if (!CONTATO.whatsapp) return null;
  return (
    <a
      href={CONTATO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-teal px-5 py-4 font-semibold text-navy shadow-[0_16px_38px_rgba(29,212,200,.4)] transition-transform hover:-translate-y-1"
      aria-label={`${c.conversao.alternativaWhatsapp} ${CONTATO.telefone}`}
    >
      <Icone nome="whatsapp" className="h-5 w-5" />
      <span className="hidden text-[14.5px] sm:inline">{c.conversao.alternativaWhatsapp}</span>
    </a>
  );
}
