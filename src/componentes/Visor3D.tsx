import { createElement, useEffect, useState } from "react";
import { useAoEntrar } from "../hooks/uso";

/* =====================================================================
   Visor 3D dos displays.
   O model-viewer é pesado, então só entra quando a seção aparece na
   tela. Até lá, e caso o script falhe, fica o poster do modelo: a
   pessoa vê o display de qualquer jeito.
   ===================================================================== */

let carregando: Promise<void> | null = null;

function carregarVisor(): Promise<void> {
  if (carregando) return carregando;
  carregando = new Promise((resolve, reject) => {
    if (customElements.get("model-viewer")) return resolve();
    const script = document.createElement("script");
    script.type = "module";
    script.src = "/vendor/model-viewer.min.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("model-viewer"));
    document.head.appendChild(script);
  });
  return carregando;
}

export function Visor3D({
  modelo,
  alt,
  className = "",
  instrucao,
  girar = true,
  srcUrl,
  posterUrl,
  iosSrc,
}: {
  modelo: string;
  alt: string;
  className?: string;
  instrucao?: string;
  girar?: boolean;
  /** GLB/poster/usdz remotos (ex.: o Display Universal em AR); sem eles, usa /3d/{modelo}. */
  srcUrl?: string;
  posterUrl?: string;
  iosSrc?: string;
}) {
  const { alvo, dentro } = useAoEntrar<HTMLDivElement>("200px 0px 200px 0px");
  const [pronto, setPronto] = useState(false);
  const [falhou, setFalhou] = useState(false);

  useEffect(() => {
    if (!dentro) return;
    let vivo = true;
    carregarVisor()
      .then(() => vivo && setPronto(true))
      .catch(() => vivo && setFalhou(true));
    return () => {
      vivo = false;
    };
  }, [dentro]);

  const poster = posterUrl ?? `/3d/${modelo}-poster.webp`;
  const src = srcUrl ?? `/3d/${modelo}.glb`;

  return (
    <div ref={alvo} className={`relative ${className}`}>
      {pronto && !falhou ? (
        createElement("model-viewer", {
          src,
          poster,
          "ios-src": iosSrc,
          alt,
          "camera-controls": true,
          // sem zoom por rolagem: o scroll continua sendo da página
          "disable-zoom": true,
          "disable-pan": true,
          "touch-action": "pan-y",
          "shadow-intensity": "1",
          "environment-image": "neutral",
          exposure: "1.05",
          "auto-rotate": girar ? true : undefined,
          "rotation-per-second": "18deg",
          "interaction-prompt": "none",
          ar: true,
          "ar-modes": "webxr scene-viewer quick-look",
          style: { width: "100%", height: "100%", background: "transparent", "--poster-color": "transparent" },
        })
      ) : (
        <img src={poster} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-contain" />
      )}
      {instrucao && (
        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy/70 px-4 py-2 text-[11.5px] font-semibold uppercase tracking-[.12em] text-white/70 backdrop-blur-sm">
          {instrucao}
        </p>
      )}
    </div>
  );
}
