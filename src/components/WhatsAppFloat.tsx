import { MessageCircle } from "lucide-react";

const PHONE = "5511913110483";
const MSG = encodeURIComponent("Olá! Gostaria de solicitar minha ART para reforma.");

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full text-white shadow-2xl transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--color-whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: "var(--color-whatsapp)" }} />
    </a>
  );
}
