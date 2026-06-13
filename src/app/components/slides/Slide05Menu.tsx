import { motion } from "motion/react";
import { Search, CheckCircle2 } from "lucide-react";

const SUSHI_IMG = "https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?w=300&h=200&fit=crop&auto=format";
const SASHIMI = "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&h=200&fit=crop&auto=format";

const categories = ["Combinados","Sushis","Temakis","Uramakis","Hossomakis","Nigiris","Sashimis","Entradas","Pratos Quentes","Sobremesas","Bebidas"];

const features = [
  "Categorias organizadas",
  "Fotos profissionais",
  "Descrições curtas e atrativas",
  "Preços destacados",
  "Busca rápida de produtos",
  "Navegação intuitiva",
];

const items = [
  { img: SUSHI_IMG, name: "Combinado Premium 50", desc: "50 peças selecionadas", price: "R$ 149" },
  { img: SASHIMI, name: "Sashimi Especial", desc: "Salmão e atum fresco", price: "R$ 68" },
  { img: SUSHI_IMG, name: "Uramaki Spicy", desc: "8 peças com cream cheese", price: "R$ 32" },
];

export function Slide05Menu() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      {/* Right - content */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 32px 0 64px",
      }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12 }}>
            Slide 5
          </div>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 12,
          }}>
            Cardápio Inteligente
          </h2>
          <p style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 24 }}>
            11 categorias organizadas com visualização premium e busca intuitiva.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {categories.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.04 }}
              style={{
                padding: "5px 12px",
                background: i === 0 ? "#B71C1C" : "rgba(255,255,255,0.06)",
                border: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: 99,
                fontFamily: "Inter", fontSize: 11,
                color: i === 0 ? "#fff" : "rgba(255,255,255,0.6)",
              }}
            >
              {c}
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <CheckCircle2 size={15} style={{ color: "#D4AF37" }} />
              <span style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{f}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Left - Mockup cardápio */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px 48px 32px 16px",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            width: "100%", maxWidth: 380,
            background: "#111",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 32px 64px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Header cardápio */}
          <div style={{ background: "#0D0D0D", padding: "16px 16px 0" }}>
            <div style={{ color: "#fff", fontFamily: "Playfair Display", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>
              Nosso Cardápio
            </div>
            {/* Search */}
            <div style={{
              background: "#1a1a1a", borderRadius: 8, padding: "9px 14px",
              display: "flex", alignItems: "center", gap: 8, marginBottom: 12,
              border: "1px solid rgba(255,255,255,0.07)",
            }}>
              <Search size={13} style={{ color: "rgba(255,255,255,0.3)" }} />
              <span style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Inter", fontSize: 12 }}>Buscar prato...</span>
            </div>
            {/* Category tabs */}
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 12 }}>
              {categories.slice(0, 6).map((c, i) => (
                <div key={c} style={{
                  padding: "5px 12px", whiteSpace: "nowrap",
                  background: i === 0 ? "#B71C1C" : "rgba(255,255,255,0.05)",
                  borderRadius: 99, fontFamily: "Inter", fontSize: 10,
                  color: i === 0 ? "#fff" : "rgba(255,255,255,0.5)",
                  flexShrink: 0,
                }}>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Items */}
          <div style={{ padding: "12px 16px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map(item => (
              <div key={item.name} style={{
                display: "flex", gap: 12, alignItems: "center",
                background: "#1a1a1a", borderRadius: 10,
                overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)",
              }}>
                <img src={item.img} alt={item.name} style={{ width: 70, height: 60, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1, padding: "8px 0" }}>
                  <div style={{ color: "#fff", fontFamily: "Inter", fontSize: 11, fontWeight: 600, marginBottom: 3 }}>{item.name}</div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter", fontSize: 10, marginBottom: 6 }}>{item.desc}</div>
                  <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 13, fontWeight: 700 }}>{item.price}</div>
                </div>
                <div style={{
                  marginRight: 12, width: 28, height: 28,
                  background: "#B71C1C", borderRadius: 6,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontSize: 16, fontWeight: 700,
                }}>+</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
