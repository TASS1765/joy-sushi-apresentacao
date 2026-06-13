import { motion } from "motion/react";
import { Home, Search, ShoppingBag, Star, Menu as MenuIcon } from "lucide-react";

const SUSHI_IMG = "https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?w=900&h=500&fit=crop&auto=format";
const SASHIMI = "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&h=200&fit=crop&auto=format";
const CHOPSTICK = "https://images.unsplash.com/photo-1681270496598-13c5365730c8?w=300&h=200&fit=crop&auto=format";

const features = [
  { icon: "🍣", label: "Banner principal impactante" },
  { icon: "📸", label: "Fotos em alta qualidade" },
  { icon: "⭐", label: "Destaque para especialidades" },
  { icon: "🔥", label: "Sessão 'Mais Pedidos'" },
  { icon: "🏯", label: "Conheça o Joy Sushi" },
  { icon: "⚡", label: "Botões de ação rápidos" },
];

export function Slide04Home() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      {/* Left - Mockup */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px 24px 32px 48px",
        position: "relative",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
          style={{
            width: "100%", maxWidth: 400,
            background: "#111",
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: "0 32px 64px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Nav bar */}
          <div style={{
            background: "#0D0D0D",
            padding: "12px 20px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 28, height: 28, background: "#B71C1C", borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, color: "#D4AF37", fontFamily: "Playfair Display", fontWeight: 700,
              }}>J</div>
              <span style={{ color: "#fff", fontFamily: "Playfair Display", fontSize: 13, fontWeight: 600 }}>Joy Sushi</span>
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              {["Cardápio","Sobre","Contato"].map(t => (
                <span key={t} style={{ color: "rgba(255,255,255,0.4)", fontFamily: "Inter", fontSize: 10 }}>{t}</span>
              ))}
            </div>
            <div style={{
              background: "#B71C1C", borderRadius: 6, padding: "5px 12px",
              color: "#fff", fontFamily: "Inter", fontSize: 10, fontWeight: 600,
            }}>Pedir</div>
          </div>

          {/* Hero */}
          <div style={{ position: "relative" }}>
            <img src={SUSHI_IMG} alt="Hero sushi" style={{ width: "100%", height: 150, objectFit: "cover", display: "block" }} />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 60%)",
            }} />
            <div style={{ position: "absolute", bottom: 16, left: 16, right: 16 }}>
              <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 9, letterSpacing: "0.2em", marginBottom: 4 }}>ESPECIALIDADE DA CASA</div>
              <div style={{ color: "#fff", fontFamily: "Playfair Display", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                O melhor sushi da cidade
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ background: "#B71C1C", borderRadius: 6, padding: "5px 14px", color: "#fff", fontFamily: "Inter", fontSize: 9, fontWeight: 600 }}>Ver Cardápio</div>
                <div style={{ border: "1px solid rgba(255,255,255,0.3)", borderRadius: 6, padding: "5px 14px", color: "#fff", fontFamily: "Inter", fontSize: 9 }}>Sobre Nós</div>
              </div>
            </div>
          </div>

          {/* Mais Pedidos */}
          <div style={{ padding: "14px 16px" }}>
            <div style={{ color: "#fff", fontFamily: "Playfair Display", fontSize: 13, fontWeight: 600, marginBottom: 10 }}>
              🔥 Mais Pedidos
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { img: SASHIMI, name: "Sashimi Premium", price: "R$ 38" },
                { img: CHOPSTICK, name: "Combinado 30", price: "R$ 89" },
              ].map(item => (
                <div key={item.name} style={{
                  flex: 1, background: "#1a1a1a", borderRadius: 10, overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}>
                  <img src={item.img} alt={item.name} style={{ width: "100%", height: 60, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "8px 10px" }}>
                    <div style={{ color: "#fff", fontFamily: "Inter", fontSize: 9, marginBottom: 3 }}>{item.name}</div>
                    <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 11, fontWeight: 700 }}>{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right - Features */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 64px 0 32px",
      }}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            color: "#D4AF37", fontFamily: "Inter", fontSize: 12,
            letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 12,
          }}>
            Slide 4
          </div>
          <h2 style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(26px, 3vw, 42px)",
            fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2, marginBottom: 12,
          }}>
            Página Inicial
          </h2>
          <p style={{
            fontFamily: "Inter", fontSize: 14,
            color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 32,
          }}>
            A home foi desenhada para causar impacto imediato e converter visitantes em clientes.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "14px 16px",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <span style={{ fontSize: 18 }}>{f.icon}</span>
              <span style={{ fontFamily: "Inter", fontSize: 12, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                {f.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
