import { motion } from "motion/react";
import { ExternalLink, Instagram, Phone } from "lucide-react";

const SUSHI_BG = "https://images.unsplash.com/photo-1580821082847-c53037ecfe0a?w=1600&h=900&fit=crop&auto=format";
const CHEF_IMG = "https://images.unsplash.com/photo-1681270496598-13c5365730c8?w=500&h=400&fit=crop&auto=format";

function NotebookMockup() {
  return (
    <div style={{
      background: "#1a1a1a",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
      border: "1px solid rgba(255,255,255,0.08)",
      width: "100%",
    }}>
      <div style={{
        background: "#2a2a2a", padding: "8px 14px",
        display: "flex", alignItems: "center", gap: 5,
      }}>
        {["#ff5f57","#febc2e","#28c840"].map(c => (
          <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
        ))}
        <div style={{
          flex: 1, marginLeft: 10, background: "#1a1a1a", borderRadius: 4, height: 16,
          display: "flex", alignItems: "center", paddingLeft: 8,
        }}>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: "Inter" }}>joysushi.com.br</span>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={SUSHI_BG} alt="Site final" style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 50%)" }} />
        <div style={{ position: "absolute", bottom: 10, left: 14, right: 14 }}>
          <div style={{ color: "#D4AF37", fontFamily: "Playfair Display", fontSize: 14, fontWeight: 700 }}>Joy Sushi</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter", fontSize: 9 }}>A melhor experiência japonesa</div>
        </div>
      </div>
      <div style={{ padding: "10px 14px", background: "#111" }}>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ flex: 1, background: "#1a1a1a", borderRadius: 6, padding: "6px 10px" }}>
            <div style={{ height: 5, background: "#B71C1C", borderRadius: 3, width: "70%", marginBottom: 4 }} />
            <div style={{ height: 4, background: "#2a2a2a", borderRadius: 3, width: "90%" }} />
          </div>
          <div style={{ background: "#B71C1C", borderRadius: 6, padding: "6px 14px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#fff", fontFamily: "Inter", fontSize: 9, fontWeight: 600 }}>Pedir →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockupSmall() {
  return (
    <div style={{
      background: "#111", borderRadius: 24, padding: "8px 5px",
      boxShadow: "0 30px 60px rgba(0,0,0,0.7)",
      border: "2px solid rgba(255,255,255,0.1)",
      width: 90,
    }}>
      <div style={{ height: 10, display: "flex", justifyContent: "center", marginBottom: 3 }}>
        <div style={{ width: 30, height: 4, background: "#333", borderRadius: 99 }} />
      </div>
      <div style={{ borderRadius: 16, overflow: "hidden" }}>
        <img src={CHEF_IMG} alt="mobile" style={{ width: "100%", height: 100, objectFit: "cover", display: "block" }} />
        <div style={{ background: "#0D0D0D", padding: "6px 8px" }}>
          <div style={{ height: 4, background: "#B71C1C", borderRadius: 2, width: "70%", marginBottom: 3 }} />
          <div style={{ height: 3, background: "#2a2a2a", borderRadius: 2, width: "90%" }} />
          <div style={{ height: 16, background: "#B71C1C", borderRadius: 4, marginTop: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 7, fontFamily: "Inter", fontWeight: 600 }}>Conhecer →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Slide10Closing() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      position: "relative", overflow: "hidden",
    }}>
      {/* BG */}
      <img
        src={SUSHI_BG}
        alt="bg"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.06 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(183,28,28,0.12) 0%, rgba(13,13,13,0.98) 50%)" }} />

      {/* Top gold line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

      {/* Left - Text */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 56px",
      }}>
        {/* Logo grande */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}
        >
          <div style={{
            width: 56, height: 56, background: "linear-gradient(135deg, #B71C1C, #8B0000)",
            borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 16px 32px rgba(183,28,28,0.4)",
            fontSize: 26, color: "#D4AF37", fontFamily: "Playfair Display", fontWeight: 700,
          }}>J</div>
          <div>
            <div style={{ color: "#fff", fontFamily: "Playfair Display", fontSize: 22, fontWeight: 700, letterSpacing: "0.06em" }}>JOY SUSHI</div>
            <div style={{ color: "rgba(212,175,55,0.7)", fontFamily: "Inter", fontSize: 11, letterSpacing: "0.15em" }}>CULINÁRIA JAPONESA</div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(22px, 2.8vw, 36px)",
            fontWeight: 700, color: "#FFFFFF", lineHeight: 1.3, marginBottom: 16,
          }}
        >
          O sabor da culinária<br />
          japonesa agora com uma<br />
          <span style={{ color: "#B71C1C" }}>experiência digital</span><br />
          à altura da sua marca.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ height: 1, background: "linear-gradient(90deg, #D4AF37, transparent)", maxWidth: 300, marginBottom: 20 }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: "Inter", fontSize: 13,
            color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 36,
          }}
        >
          Projeto desenvolvido por<br />
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>Thiago Antonio</strong> — Desenvolvimento Web e Soluções Digitais
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 28px",
            background: "linear-gradient(135deg, #B71C1C, #8B0000)",
            borderRadius: 10,
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(183,28,28,0.35)",
            alignSelf: "flex-start",
          }}>
            <ExternalLink size={16} style={{ color: "#fff" }} />
            <span style={{ fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: "#fff" }}>
              Conheça o Novo Joy Sushi
            </span>
          </div>

         
            <div style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "9px 16px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
            }}>
              <a
  href="https://wa.me/5511980196642?text=Olá,%20Thiago!"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: "9px 16px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    textDecoration: "none",
  }}
>
  <Phone size={13} style={{ color: "#D4AF37" }} />
  <span style={{ fontFamily: "Inter", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
    (11) 98019-6642
  </span>
</a>
            <div style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "9px 16px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
            }}>
              <span style={{ fontFamily: "Inter", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
  Dev Web
</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right - Mockups */}
      <div style={{
        position: "relative", zIndex: 2,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "32px 48px 32px 16px",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.2 }}
          style={{ position: "relative", width: "100%", maxWidth: 420 }}
        >
          <NotebookMockup />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            style={{
              position: "absolute",
              right: -30, bottom: -24,
            }}
          >
            <PhoneMockupSmall />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
