import { useEffect, useState } from "react";
import { BotaoMagnetico } from "../componentes/Base";
import { Icone } from "../componentes/Icones";
import { CONTATO } from "../conteudo/config";
import type { Conteudo } from "../conteudo/tipos";

/* =====================================================================
   Herói.
   Foto do produto na loja de um lado, promessa e chamada do outro.
   Sem abertura cinematográfica: quem chega aqui quer entender o
   negócio nos primeiros segundos.
   ===================================================================== */

export function Heroi({ c }: { c: Conteudo }) {
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMontado(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="topo" className="relative overflow-hidden bg-white pt-[70px]">
      <div className="env grid items-center gap-12 py-14 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:py-20">
        <div>
          <p
            className={`chapeu transition-all duration-700 ${montado ? "opacity-100" : "translate-y-2 opacity-0"}`}
          >
            {c.heroi.chapeu}
          </p>

          <h1 className="mt-5 font-display text-[clamp(34px,4.6vw,56px)] font-extrabold leading-[1.06] tracking-[-.03em] text-navy">
            {c.heroi.titulo.map((parte, i) => (
              <span key={i} className="block overflow-hidden">
                <span
                  className={`block transition-transform duration-[850ms] ${montado ? "translate-y-0" : "translate-y-full"} ${
                    i === 1 ? "text-azul" : ""
                  }`}
                  style={{ transitionDelay: `${120 + i * 110}ms`, transitionTimingFunction: "cubic-bezier(.16,.84,.26,1)" }}
                >
                  {parte}
                </span>
              </span>
            ))}
          </h1>

          <p
            className={`lead mt-6 transition-all duration-700 ${montado ? "opacity-100" : "translate-y-3 opacity-0"}`}
            style={{ transitionDelay: "420ms" }}
          >
            {c.heroi.lead}
          </p>

          <div
            className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 ${montado ? "opacity-100" : "translate-y-3 opacity-0"}`}
            style={{ transitionDelay: "520ms" }}
          >
            <BotaoMagnetico href="#falar" className="botao">
              {c.heroi.ctaPrimario}
              <Icone nome="seta" className="h-4 w-4" />
            </BotaoMagnetico>
            <a href="#conta" className="botao bg-papel-2 text-navy hover:bg-papel-2/70">
              {c.heroi.ctaSecundario}
            </a>
          </div>

          <dl
            className={`mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-tinta/10 pt-7 transition-all duration-700 ${
              montado ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "640ms" }}
          >
            {c.heroi.selos.map((selo) => (
              <div key={selo.rotulo}>
                <dt className="num font-display text-[clamp(21px,2.2vw,26px)] font-extrabold leading-none text-navy">{selo.valor}</dt>
                <dd className="mt-1.5 text-[13px] text-tinta-3">{selo.rotulo}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure
          className={`relative transition-all duration-1000 ${montado ? "opacity-100" : "translate-y-5 opacity-0"}`}
          style={{ transitionDelay: "260ms" }}
        >
          <img
            src="/fotos/foto-ilha-supermercado.jpg"
            alt={c.heroi.legendaFoto}
            width={1400}
            height={787}
            fetchPriority="high"
            decoding="async"
            className="w-full rounded-[26px] object-cover shadow-[0_30px_70px_rgba(6,27,73,.18)]"
          />
          {CONTATO.whatsapp && (
            <figcaption className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_40px_rgba(6,27,73,.16)]">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-navy">
                <Icone nome="loja" className="h-5 w-5" />
              </span>
              <span className="text-[13.5px] font-semibold leading-tight text-navy">
                {c.como.regra}
              </span>
            </figcaption>
          )}
        </figure>
      </div>
    </section>
  );
}

/** Faixa de credibilidade, logo abaixo do herói. */
export function Prova({ c }: { c: Conteudo }) {
  return (
    <section className="border-y border-tinta/8 bg-papel py-10">
      <div className="env grid items-center gap-8 lg:grid-cols-[.44fr_.56fr]">
        <p className="text-[15px] leading-snug text-tinta-2">{c.prova.frase}</p>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.16em] text-tinta-3">{c.prova.marcas}</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-10 gap-y-5">
            {["allianz", "bradesco", "claro", "gpa", "vivo"].map((marca) => (
              <li key={marca}>
                <img
                  src={`/marcas/cli-${marca}.png`}
                  alt={marca}
                  height={24}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-auto opacity-70 [filter:brightness(0)_saturate(100%)_opacity(.45)]"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
