import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoto: (i: number) => void;
}

export function SlideNav({ current, total, onPrev, onNext, onGoto }: SlideNavProps) {
  return (
    <>
      {/* Dot indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-50">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoto(i)}
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 99,
              background: i === current ? "#D4AF37" : "rgba(255,255,255,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        style={{
          position: "fixed",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 50,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: current === 0 ? "not-allowed" : "pointer",
          opacity: current === 0 ? 0.3 : 1,
          transition: "all 0.2s",
          color: "#fff",
        }}
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        style={{
          position: "fixed",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 50,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "50%",
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: current === total - 1 ? "not-allowed" : "pointer",
          opacity: current === total - 1 ? 0.3 : 1,
          transition: "all 0.2s",
          color: "#fff",
        }}
      >
        <ChevronRight size={22} />
      </button>

      {/* Slide counter */}
      <div
        style={{
          position: "fixed",
          top: 24,
          right: 32,
          zIndex: 50,
          color: "rgba(255,255,255,0.4)",
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          letterSpacing: "0.1em",
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </>
  );
}
