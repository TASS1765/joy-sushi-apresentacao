import { motion } from "motion/react";
import {
  Globe, LayoutGrid, Smartphone, Tag, Image, Star, MessageCircle, Phone, Clock, MapPin,
  ShoppingCart, Package, User, LayoutDashboard, BarChart2, Bell, CreditCard, Truck, Ticket, Award, LineChart, Mail, Database
} from "lucide-react";

const current = [
  { icon: Globe, label: "Site institucional profissional" },
  { icon: LayoutGrid, label: "Cardápio digital moderno" },
  { icon: Smartphone, label: "Layout responsivo" },
  { icon: Tag, label: "Categorias organizadas" },
  { icon: Image, label: "Galeria de pratos" },
  { icon: Star, label: "Destaque para produtos" },
  { icon: MessageCircle, label: "Integração com WhatsApp" },
  { icon: Phone, label: "Informações de contato" },
  { icon: Clock, label: "Horários de funcionamento" },
  { icon: MapPin, label: "Localização" },
];

const future = [
  { icon: ShoppingCart, label: "Carrinho de compras" },
  { icon: Package, label: "Sistema de pedidos online" },
  { icon: User, label: "Cadastro de clientes" },
  { icon: LayoutDashboard, label: "Painel administrativo" },
  { icon: BarChart2, label: "Relatórios de pedidos" },
  { icon: Bell, label: "Notificações automáticas" },
  { icon: CreditCard, label: "Pagamento online" },
  { icon: Truck, label: "Controle de entregas" },
  { icon: Ticket, label: "Sistema de cupons" },
  { icon: Award, label: "Programa de fidelidade" },
  { icon: LineChart, label: "Estatísticas e métricas" },
  { icon: Mail, label: "E-mails automáticos" },
  { icon: Database, label: "Banco de dados em nuvem" },
];

export function Slide07Features() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#0D0D0D",
      display: "flex", flexDirection: "column",
      padding: "40px 64px",
      position: "relative", overflow: "hidden",
    }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 32 }}>
        <div style={{ color: "#D4AF37", fontFamily: "Inter", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 8 }}>
          Slide 7
        </div>
        <h2 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(24px, 3vw, 38px)",
          fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2,
        }}>
          Funcionalidades Oferecidas
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, flex: 1 }}>
        {/* Current */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 16,
            padding: "10px 16px",
            background: "rgba(212,175,55,0.1)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: 10,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#D4AF37" }} />
            <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: "#D4AF37" }}>
              Funcionalidades Atuais — Inclusas no projeto
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {current.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8, padding: "10px 12px",
                }}
              >
                <Icon size={14} style={{ color: "#D4AF37", flexShrink: 0 }} />
                <span style={{ fontFamily: "Inter", fontSize: 11, color: "rgba(255,255,255,0.8)", lineHeight: 1.3 }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 16,
            padding: "10px 16px",
            background: "rgba(183,28,28,0.08)",
            border: "1px solid rgba(183,28,28,0.2)",
            borderRadius: 10,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#B71C1C" }} />
            <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>
              Funcionalidades Futuras — Expansão opcional
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {future.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.04 }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: 8, padding: "10px 12px",
                  opacity: 0.7,
                }}
              >
                <Icon size={14} style={{ color: "rgba(255,255,255,0.35)", flexShrink: 0 }} />
                <span style={{ fontFamily: "Inter", fontSize: 11, color: "rgba(255,255,255,0.5)", lineHeight: 1.3 }}>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
