import { motion } from "motion/react";

const SASHIMI = "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=1400&h=800&fit=crop&auto=format";

export function Slide09Vision() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      {/* BG image */}
      <img
        src={SASHIMI}
        alt="Visão do projeto"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.1,
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at center, rgba(183,28,28,0.12) 0%, rgba(13,13,13,0.97) 70%)",
      }} />

      {/* Gold lines decoration */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37 30%, #D4AF37 70%, transparent)" }} />

      {/* Corner ornaments */}
      {[[0,0],[0,"auto"],["auto",0],["auto","auto"]].map(([t,b,], i) => (
        <div key={i} style={{
          position: "absolute",
          top: typeof t === "number" ? 24 : "auto",
          bottom: typeof t !== "number" ? 24 : "auto",
          left: i % 2 === 0 ? 24 : "auto",
          right: i % 2 !== 0 ? 24 : "auto",
          width: 30, height: 30,
          borderTop: i < 2 ? "2px solid rgba(212,175,55,0.4)" : "none",
          borderBottom: i >= 2 ? "2px solid rgba(212,175,55,0.4)" : "none",
          borderLeft: i % 2 === 0 ? "2px solid rgba(212,175,55,0.4)" : "none",
          borderRight: i % 2 !== 0 ? "2px solid rgba(212,175,55,0.4)" : "none",
        }} />
      ))}

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 800, padding: "0 48px",
        textAlign: "center",
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: 60, height: 60, borderRadius: 14,
            background: "linear-gradient(135deg, #B71C1C, #8B0000)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 32px",
            boxShadow: "0 20px 40px rgba(183,28,28,0.4)",
          }}
        >
          <span style={{ fontSize: 24, fontFamily: "Playfair Display", color: "#D4AF37", fontWeight: 700 }}>J</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            color: "#D4AF37", fontFamily: "Inter", fontSize: 11,
            letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 24,
          }}
        >
          Visão do Projeto
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(18px, 2.4vw, 28px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.7,
            marginBottom: 48,
          }}
        >
          "O objetivo não é apenas criar um site bonito, mas desenvolver uma experiência digital que represente a qualidade, o cuidado e a identidade do Joy Sushi, tornando cada visita ao site tão agradável quanto a experiência de comer no restaurante."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            marginBottom: 32,
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          style={{ display: "flex", gap: 32, justifyContent: "center" }}
        >
          {[
            { num: "10+", label: "Anos de tradição" },
            { num: "500+", label: "Pratos no cardápio" },
            { num: "∞", label: "Experiências únicas" },
          ].map(({ num, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Playfair Display", fontSize: 28, fontWeight: 700, color: "#D4AF37" }}>{num}</div>
              <div style={{ fontFamily: "Inter", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
