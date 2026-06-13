import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const INTERIOR = "https://images.unsplash.com/photo-1531973968078-9bb02785f13d?w=600&h=400&fit=crop&auto=format";

const proposals = [
  "Design moderno e premium",
  "Layout totalmente responsivo",
  "Navegação simples e intuitiva",
  "Destaque para os pratos mais vendidos",
  "Maior valorização da identidade da marca",
  "Experiência agradável em qualquer dispositivo",
];

export function Slide03Proposal() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      overflow: "hidden", position: "relative",
    }}>
      {/* Left - Image */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          src={INTERIOR}
          alt="Ambiente elegante"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(13,13,13,0) 60%, #0D0D0D 100%)",
        }} />
        {/* Gold line */}
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: 3, background: "linear-gradient(to bottom, transparent, #D4AF37, transparent)",
        }} />
      </div>

      {/* Right - Content */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 64px",
        position: "relative", zIndex: 2,
      }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            color: "#D4AF37", fontFamily: "Inter, sans-serif",
            fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12,
          }}>
            Nossa Proposta
          </div>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(24px, 2.8vw, 38px)",
            fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 36,
          }}>
            Criando uma experiência que combina com o Joy Sushi
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {proposals.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.09 }}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <CheckCircle2 size={18} style={{ color: "#D4AF37", flexShrink: 0 }} />
              <span style={{
                fontFamily: "Inter, sans-serif", fontSize: 14,
                color: "rgba(255,255,255,0.85)", lineHeight: 1.5,
              }}>
                {p}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
