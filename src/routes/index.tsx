import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import {
  Sobre,
  Servicos,
  Diferenciais,
  Processo,
  Depoimentos,
  CTAFinal,
  FAQ,
  Footer,
} from "@/components/Sections";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ART Plano · Emissão de ART e Laudos Técnicos para Reformas em São Paulo" },
      {
        name: "description",
        content:
          "Consultoria de engenharia especializada em ART, laudos e regularização para reformas em apartamentos. Documentação em 1 dia útil com total conformidade ABNT.",
      },
      { property: "og:title", content: "ART Plano · Engenharia para Reformas com Segurança Jurídica" },
      {
        property: "og:description",
        content:
          "Emissão de ART, vistorias e regularização para reformas em São Paulo. Agilidade extrema e rigor ABNT.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <Sobre />
        <Servicos />
        <Diferenciais />
        <Processo />
        <Depoimentos />
        <CTAFinal />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
