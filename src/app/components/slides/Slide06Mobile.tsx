import { motion } from "motion/react";
import { Smartphone } from "lucide-react";

const SUSHI_IMG = "https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?w=400&h=300&fit=crop&auto=format";
const CHEF = "https://images.unsplash.com/photo-1681270496598-13c5365730c8?w=400&h=300&fit=crop&auto=format";

const benefits = [
  { icon: "📱", title: "Adaptável", desc: "Ajuste automático em qualquer tela" },
  { icon: "🌀", title: "Fluido", desc: "Rolagem e animações suaves" },
  { icon: "👆", title: "Touch-first", desc: "Botões maiores e áreas de toque otimizadas" },
  { icon: "👁", title: "Legível", desc: "Textos e imagens sempre nítidos" },
  { icon: "🗺", title: "Simples", desc: "Navegação intuitiva como grandes apps" },
  { icon: "🚀", title: "Rápido", desc: "Carregamento otimizado para mobile" },
];

function PhoneMockup() {
  return (
    <div style={{
      width: 200,
      background: "#111",
      borderRadius: 36,
      padding: "12px 8px",
      boxShadow: "0 48px 80px rgba(0,0,0,0.8), 0 0 0 2px rgba(255,255,255,0.1)",
    }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
        <div style={{ width: 50, height: 5, background: "#333", borderRadius: 99 }} />
      </div>
      <div style={{ borderRadius: 24, overflow: "hidden", background: "#0D0D0D" }}>
        {/* Mobile Nav */}
        <div style={{
          background: "#0D0D0D", padding: "10px 14px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ width: 24, height: 24, background: "#B71C1C", borderRadius: 5,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, color: "#D4AF37", fontFamily: "Playfair Display", fontWeight: 700 }}>J</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {[22, 18, 14].map(w => (
              <div key={w} style={{ height: 2, width: w, background: "rgba(255,255,255,0.5)", borderRadius: 99 }} />
            ))}
          </div>
        </div>

        {/* Hero */}
        <div style={{ position: "relative" }}>
          <img src={SUSHI_IMG} alt="sushi" style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, transparent 55%)",
          }} />
          <div style={{ position: "absolute", bottom: 10, left: 10, right: 10 }}>
            <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 7, letterSpacing: "0.2em", marginBottom: 3 }}>ESPECIALIDADE</div>
            <div style={{ color: "#fff", fontFamily: "Playfair Display", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>Sushi Premium</div>
            <div style={{
              background: "#B71C1C", borderRadius: 5,
              padding: "5px 0", textAlign: "center",
              color: "#fff", fontFamily: "Inter", fontSize: 9, fontWeight: 600,
            }}>Ver Cardápio →</div>
          </div>
        </div>

        {/* Quick chips */}
        <div style={{ padding: "10px 10px 4px", display: "flex", gap: 5, flexWrap: "wrap" }}>
          {["Combinados","Sushis","Temakis"].map((c, i) => (
            <div key={c} style={{
              padding: "4px 10px",
              background: i === 0 ? "#B71C1C" : "rgba(255,255,255,0.06)",
              borderRadius: 99, fontFamily: "Inter", fontSize: 8,
              color: i === 0 ? "#fff" : "rgba(255,255,255,0.5)",
            }}>{c}</div>
          ))}
        </div>

        {/* Item */}
        <div style={{ padding: "6px 10px 10px" }}>
          <div style={{
            background: "#1a1a1a", borderRadius: 10, overflow: "hidden",
            display: "flex", border: "1px solid rgba(255,255,255,0.05)",
          }}>
            <img src={CHEF} alt="prato" style={{ width: 60, height: 50, objectFit: "cover" }} />
            <div style={{ flex: 1, padding: "6px 8px" }}>
              <div style={{ color: "#fff", fontFamily: "Inter", fontSize: 9, fontWeight: 600, marginBottom: 2 }}>Combinado 30 Peças</div>
              <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 10, fontWeight: 700 }}>R$ 89</div>
            </div>
            <div style={{
              background: "#B71C1C", width: 24, height: 24, borderRadius: 6, margin: "auto 8px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 14,
            }}>+</div>
          </div>
        </div>

        {/* Bottom nav */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "8px 0", display: "flex", justifyContent: "space-around",
        }}>
          {["🏠","🍣","❤️","👤"].map(icon => (
            <div key={icon} style={{ fontSize: 14, textAlign: "center" }}>{icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Slide06Mobile() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background gradient */}
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(183,28,28,0.06) 0%, transparent 70%)",
      }} />

      {/* Left - Phone */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px 16px 32px 80px",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
        >
          <PhoneMockup />
        </motion.div>
      </div>

      {/* Right - Benefits */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 64px 0 16px",
      }}>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>
            Slide 6
          </div>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 12,
          }}>
            Pensado primeiro<br />para celulares
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 28 }}>
            Mais de 80% dos acessos são pelo celular. O novo site prioriza a experiência mobile sem abrir mão da versão desktop.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10, padding: "14px",
              }}
            >
              <div style={{ fontSize: 20, marginBottom: 6 }}>{b.icon}</div>
              <div style={{ color: "#fff", fontFamily: "Inter", fontSize: 12, fontWeight: 600, marginBottom: 3 }}>{b.title}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter", fontSize: 11, lineHeight: 1.4 }}>{b.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
