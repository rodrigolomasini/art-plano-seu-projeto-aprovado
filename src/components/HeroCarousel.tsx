import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ShieldCheck, FileCheck2, Building2 } from "lucide-react";
import hero1 from "@/assets/hero-engineer.jpg";
import hero2 from "@/assets/hero-documents.jpg";
import hero3 from "@/assets/hero-reform.jpg";

const PHONE = "5511913110483";
const WA_LINK = `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá! Quero solicitar minha ART agora.")}`;

const slides = [
  {
    image: hero1,
    eyebrow: "ART e Laudos Técnicos",
    title: "Documentação para sua reforma aprovada com segurança jurídica.",
    subtitle:
      "Disponibilizamos a documentação para aprovação da sua reforma rapidamente — zero burocracia administrativa e total conformidade com as normas ABNT.",
    icon: FileCheck2,
  },
  {
    image: hero2,
    eyebrow: "Conformidade ABNT",
    title: "Rigor técnico absoluto. Agilidade que sua obra precisa.",
    subtitle:
      "Engenheiros e arquitetos com mais de 100.000 m² de reformas aprovadas. Emissão de ART em até 1 dia útil após o pagamento.",
    icon: ShieldCheck,
  },
  {
    image: hero3,
    eyebrow: "Reformas em Apartamentos · SP",
    title: "O elo técnico entre você e a administração do condomínio.",
    subtitle:
      "Para proprietários e investidores que querem executar obras sem paralisações, multas ou riscos estruturais imprevistos.",
    icon: Building2,
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % total), 6500);
    return () => clearInterval(t);
  }, [total]);

  const go = (n: number) => setI((n + total) % total);

  return (
    <section
      id="hero"
      className="relative min-h-[640px] overflow-hidden bg-primary text-primary-foreground md:min-h-[720px]"
      aria-label="Apresentação ART Plano"
    >
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading={idx === 0 ? "eager" : "lazy"}
            fetchPriority={idx === 0 ? "high" : "auto"}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, oklch(0.33 0.06 256 / 0.94) 0%, oklch(0.33 0.06 256 / 0.78) 45%, oklch(0.33 0.06 256 / 0.35) 100%)",
            }}
          />
        </div>
      ))}

      <div className="container-page relative z-10 flex min-h-[640px] items-center py-20 md:min-h-[720px] md:py-28">
        <div className="max-w-3xl">
          {slides.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className={idx === i ? "block fade-in-up" : "hidden"}>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                  <Icon className="h-4 w-4" />
                  {s.eyebrow}
                </div>
                <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">
                  {s.title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                  {s.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-bold text-primary shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-white/95"
                  >
                    Solicite sua ART agora!
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15"
                  >
                    Conhecer serviços
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Normas ABNT</div>
                  <div className="flex items-center gap-2"><FileCheck2 className="h-5 w-5" /> Entrega em 1 dia útil</div>
                  <div className="flex items-center gap-2"><Building2 className="h-5 w-5" /> +100.000 m² aprovados</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => go(i - 1)}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25 md:block"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(i + 1)}
        aria-label="Próximo slide"
        className="absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25 md:block"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => go(idx)}
            aria-label={`Ir ao slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/75"}`}
          />
        ))}
      </div>
    </section>
  );
}
