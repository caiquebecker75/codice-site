import { useEffect, useRef } from "react";

/* =====================================================================
   Ponto que acompanha o mouse e cresce sobre o que é clicável.
   Só existe em ponteiro fino: no toque e para quem pediu menos
   movimento, ele nem entra na página.
   ===================================================================== */

export function Cursor() {
  const ponto = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fino = window.matchMedia("(pointer: fine)").matches;
    const menos = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const no = ponto.current;
    if (!no || !fino || menos) return;

    no.style.opacity = "1";
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let alvoX = x;
    let alvoY = y;
    let quadro = 0;

    const seguir = () => {
      x += (alvoX - x) * 0.22;
      y += (alvoY - y) * 0.22;
      no.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      quadro = requestAnimationFrame(seguir);
    };

    const mover = (e: PointerEvent) => {
      alvoX = e.clientX;
      alvoY = e.clientY;
      const sobre = (e.target as HTMLElement)?.closest("a, button, [role='tab'], input, textarea, label");
      no.classList.toggle("grande", Boolean(sobre));
    };
    const sair = () => {
      no.style.opacity = "0";
    };
    const voltar = () => {
      no.style.opacity = "1";
    };

    quadro = requestAnimationFrame(seguir);
    window.addEventListener("pointermove", mover, { passive: true });
    document.addEventListener("pointerleave", sair);
    document.addEventListener("pointerenter", voltar);
    return () => {
      cancelAnimationFrame(quadro);
      window.removeEventListener("pointermove", mover);
      document.removeEventListener("pointerleave", sair);
      document.removeEventListener("pointerenter", voltar);
    };
  }, []);

  return <div ref={ponto} className="ponto-cursor" style={{ opacity: 0 }} aria-hidden="true" />;
}
