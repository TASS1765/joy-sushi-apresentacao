import { motion } from "motion/react";

const SUSHI_IMG = "https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?w=1600&h=900&fit=crop&auto=format";

function MockupBrowser({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#1a1a1a",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{
        background: "#2a2a2a",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        gap: 6,
      }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <div style={{
          flex: 1,
          marginLeft: 12,
          background: "#1a1a1a",
          borderRadius: 6,
          height: 20,
          display: "flex",
          alignItems: "center",
          paddingLeft: 12,
        }}>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontFamily: "Inter" }}>joysushi.com.br</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function MockupMobile({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: "#111",
      borderRadius: 32,
      overflow: "hidden",
      boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
      border: "2px solid rgba(255,255,255,0.12)",
      padding: "10px 6px",
    }}>
      <div style={{ height: 16, display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 4 }}>
        <div style={{ width: 60, height: 5, background: "#333", borderRadius: 99 }} />
      </div>
      <div style={{ borderRadius: 20, overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
}

export function Slide01Cover() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "#0D0D0D",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* BG image with overlay */}
      <img
        src={SUSHI_IMG}
        alt="Premium sushi"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", opacity: 0.12,
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(183,28,28,0.15) 0%, rgba(13,13,13,0.95) 60%)",
      }} />

      {/* Gold decorative line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: 3,
        background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
      }} />

      {/* Left — Text */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 64px",
      }}>
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 48,
          }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 8,
            background: "#B71C1C",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontFamily: "Playfair Display, serif", color: "#D4AF37", fontWeight: 700,
          }}>J</div>
          <span style={{ color: "#fff", fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 600, letterSpacing: "0.05em" }}>
            JOY SUSHI
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            color: "#D4AF37", fontFamily: "Inter, sans-serif",
            fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Apresentação do Projeto
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Nova<br />
          <span style={{ color: "#B71C1C" }}>Experiência</span><br />
          Digital
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.7,
            maxWidth: 400,
            marginBottom: 40,
          }}
        >
          Um site moderno criado para fortalecer a marca, melhorar a experiência do cliente e aumentar as vendas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: "flex", alignItems: "center", gap: 16,
          }}
        >
          <div style={{
            padding: "12px 28px",
            background: "#B71C1C",
            borderRadius: 8,
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}>
            Ver Proposta
          </div>
          <div style={{
            padding: "12px 28px",
            border: "1px solid rgba(212,175,55,0.4)",
            borderRadius: 8,
            color: "#D4AF37",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            fontWeight: 500,
          }}>
            Thiago Antonio
          </div>
        </motion.div>
      </div>

      {/* Right — Mockups */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px 48px 32px 0",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.2 }}
          style={{ position: "relative", width: "100%", maxWidth: 480 }}
        >
          {/* Desktop mockup */}
          <MockupBrowser>
            <img
              src={SUSHI_IMG}
              alt="Site Joy Sushi"
              style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
            />
            <div style={{ background: "#111", padding: "16px 20px" }}>
              <div style={{ height: 10, background: "#B71C1C", borderRadius: 4, width: "60%", marginBottom: 8 }} />
              <div style={{ height: 8, background: "#2a2a2a", borderRadius: 4, width: "90%", marginBottom: 6 }} />
              <div style={{ height: 8, background: "#2a2a2a", borderRadius: 4, width: "75%", marginBottom: 12 }} />
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ height: 28, background: "#B71C1C", borderRadius: 6, width: 80 }} />
                <div style={{ height: 28, background: "#2a2a2a", borderRadius: 6, width: 80 }} />
              </div>
            </div>
          </MockupBrowser>

          {/* Mobile mockup floating */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              position: "absolute",
              right: -40,
              bottom: -30,
              width: 110,
            }}
          >
            <MockupMobile>
              <img
                src={SUSHI_IMG}
                alt="Mobile Joy Sushi"
                style={{ width: "100%", height: 140, objectFit: "cover", display: "block" }}
              />
              <div style={{ background: "#111", padding: "8px 10px" }}>
                <div style={{ height: 6, background: "#B71C1C", borderRadius: 3, width: "70%", marginBottom: 5 }} />
                <div style={{ height: 5, background: "#2a2a2a", borderRadius: 3, width: "90%", marginBottom: 4 }} />
                <div style={{ height: 20, background: "#B71C1C", borderRadius: 4, width: "100%", marginTop: 8 }} />
              </div>
            </MockupMobile>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
