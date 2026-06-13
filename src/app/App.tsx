import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SlideNav } from "./components/SlideNav";
import { Slide01Cover } from "./components/slides/Slide01Cover";
import { Slide02Problems } from "./components/slides/Slide02Problems";
import { Slide03Proposal } from "./components/slides/Slide03Proposal";
import { Slide04Home } from "./components/slides/Slide04Home";
import { Slide05Menu } from "./components/slides/Slide05Menu";
import { Slide06Mobile } from "./components/slides/Slide06Mobile";
import { Slide07Features } from "./components/slides/Slide07Features";
import { Slide08Benefits } from "./components/slides/Slide08Benefits";
import { Slide09Vision } from "./components/slides/Slide09Vision";
import { Slide10Closing } from "./components/slides/Slide10Closing";

const slides = [
  { id: 1, component: Slide01Cover, title: "Capa" },
  { id: 2, component: Slide02Problems, title: "Oportunidades" },
  { id: 3, component: Slide03Proposal, title: "Nossa Proposta" },
  { id: 4, component: Slide04Home, title: "Página Inicial" },
  { id: 5, component: Slide05Menu, title: "Cardápio" },
  { id: 6, component: Slide06Mobile, title: "Mobile" },
  { id: 7, component: Slide07Features, title: "Funcionalidades" },
  { id: 8, component: Slide08Benefits, title: "Benefícios" },
  { id: 9, component: Slide09Vision, title: "Visão do Projeto" },
  { id: 10, component: Slide10Closing, title: "Encerramento" },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [[current, direction], setPage] = useState([0, 0]);

  const goTo = useCallback((next: number, dir?: number) => {
    if (next < 0 || next >= slides.length) return;
    setPage(([cur]) => [next, dir ?? (next > cur ? 1 : -1)]);
  }, []);

  const prev = useCallback(() => setPage(([cur, _]) => [Math.max(0, cur - 1), -1]), []);
  const next = useCallback(() => setPage(([cur, _]) => [Math.min(slides.length - 1, cur + 1), 1]), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = slides[current].component;

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: "#0D0D0D",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Brand watermark top-left */}
      <div style={{
        position: "fixed", top: 22, left: 32, zIndex: 50,
        display: "flex", alignItems: "center", gap: 8,
        pointerEvents: "none",
      }}>
        <div style={{
          width: 28, height: 28, background: "#B71C1C", borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, color: "#D4AF37", fontFamily: "Playfair Display, serif", fontWeight: 700,
        }}>J</div>
        <span style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif", fontSize: 12, letterSpacing: "0.08em" }}>
          Joy Sushi
        </span>
      </div>

      {/* Animated slide */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "absolute", inset: 0 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation controls */}
      <SlideNav
        current={current}
        total={slides.length}
        onPrev={prev}
        onNext={next}
        onGoto={goTo}
      />

      {/* Slide title label */}
      <div style={{
        position: "fixed", bottom: 5, left: "50%", transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.18)", fontFamily: "Inter, sans-serif", fontSize: 9,
        letterSpacing: "0.18em", textTransform: "uppercase",
        pointerEvents: "none",
      }}>
        {slides[current].title}
      </div>
    </div>
  );
}
