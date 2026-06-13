import { motion } from "motion/react";
import { XCircle } from "lucide-react";

const problems = [
  "Navegação pouco intuitiva",
  "Experiência mobile limitada",
  "Cardápio extenso e visualmente poluído",
  "Menor destaque para os pratos",
  "Pouca interação com o cliente",
  "Experiência digital que não transmite totalmente a qualidade do restaurante",
];

export function Slide02Problems() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "48px 80px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background accent */}
      <div style={{
        position: "absolute", top: -200, right: -200,
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(183,28,28,0.08) 0%, transparent 70%)",
      }} />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: 48 }}
      >
        <div style={{
          color: "#D4AF37", fontFamily: "Inter, sans-serif",
          fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12,
        }}>
          Análise Atual
        </div>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(28px, 3.5vw, 44px)",
          fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2,
        }}>
          Por que modernizar o site?
        </h2>
      </motion.div>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 16, width: "100%", maxWidth: 860,
      }}>
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            style={{
              display: "flex", alignItems: "flex-start", gap: 14,
              background: "rgba(183,28,28,0.07)",
              border: "1px solid rgba(183,28,28,0.2)",
              borderRadius: 12,
              padding: "18px 20px",
            }}
          >
            <XCircle size={20} style={{ color: "#B71C1C", flexShrink: 0, marginTop: 2 }} />
            <span style={{
              fontFamily: "Inter, sans-serif", fontSize: 14,
              color: "rgba(255,255,255,0.8)", lineHeight: 1.5,
            }}>
              {p}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          marginTop: 40, padding: "12px 28px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 99,
          fontFamily: "Inter, sans-serif", fontSize: 13,
          color: "rgba(255,255,255,0.4)",
        }}
      >
        Esses pontos impactam diretamente a conversão e a percepção de qualidade da marca
      </motion.div>
    </div>
  );
}
