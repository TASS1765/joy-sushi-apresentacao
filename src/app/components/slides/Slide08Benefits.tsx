import { motion } from "motion/react";
import { TrendingUp, Heart, Shield, Target, Zap, Globe, Award, Sparkles } from "lucide-react";

const benefits = [
  { icon: TrendingUp, title: "Maior Profissionalismo", desc: "Site que transmite confiança e credibilidade desde o primeiro segundo", color: "#B71C1C" },
  { icon: Heart, title: "Melhor Experiência", desc: "Navegação intuitiva que faz o cliente se sentir em casa", color: "#D4AF37" },
  { icon: Shield, title: "Mais Confiança", desc: "Design premium que reforça a qualidade do seu restaurante", color: "#B71C1C" },
  { icon: Target, title: "Mais Conversões", desc: "Maior possibilidade de transformar visitas em pedidos reais", color: "#D4AF37" },
  { icon: Zap, title: "Diferencial Competitivo", desc: "Destaque perante os concorrentes com presença digital superior", color: "#B71C1C" },
  { icon: Globe, title: "Presença Digital", desc: "Disponível 24h para alcançar novos clientes a qualquer momento", color: "#D4AF37" },
  { icon: Award, title: "Valorização da Marca", desc: "Identidade visual coerente que fortalece o Joy Sushi", color: "#B71C1C" },
  { icon: Sparkles, title: "Experiência Premium", desc: "Cada detalhe pensado para impressionar e encantar", color: "#D4AF37" },
];

export function Slide08Benefits() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 64px",
      position: "relative", overflow: "hidden",
    }}>
      {/* BG circles */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: 700, height: 700, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(183,28,28,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: 40 }}>
        <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 10 }}>
          Resultados
        </div>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(26px, 3.5vw, 44px)",
          fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2,
        }}>
          Benefícios para o Joy Sushi
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, width: "100%" }}>
        {benefits.map((b, i) => {
          const Icon = b.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${i % 2 === 0 ? "rgba(183,28,28,0.2)" : "rgba(212,175,55,0.15)"}`,
                borderRadius: 14,
                padding: "24px 20px",
                display: "flex", flexDirection: "column", gap: 12,
                cursor: "default",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${b.color}18`,
                border: `1px solid ${b.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={18} style={{ color: b.color }} />
              </div>
              <div>
                <div style={{
                  fontFamily: "Inter", fontSize: 13, fontWeight: 600,
                  color: "#fff", marginBottom: 6, lineHeight: 1.3,
                }}>
                  {b.title}
                </div>
                <div style={{
                  fontFamily: "Inter", fontSize: 11,
                  color: "rgba(255,255,255,0.45)", lineHeight: 1.5,
                }}>
                  {b.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
