import { useEffect, useState } from "react";
import { Menu, X, HardHat } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const WA = `https://wa.me/5511913110483?text=${encodeURIComponent("Olá! Tenho algumas dúvidas sobre a ART.")}`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#hero" className="flex items-center gap-2.5">
          <span
            className={`grid h-10 w-10 place-items-center rounded-lg ${scrolled ? "bg-primary text-primary-foreground" : "bg-white/15 text-white backdrop-blur-sm"}`}
          >
            <HardHat className="h-5 w-5" />
          </span>
          <span className={`text-xl font-extrabold tracking-tight ${scrolled ? "text-primary" : "text-white"}`}>
            ART<span className="font-light">Plano</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition hover:opacity-70 ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={WA} target="_blank" rel="noopener noreferrer" className={`text-sm font-semibold ${scrolled ? "text-secondary" : "text-white/90"} hover:opacity-80`}>
            Tirar Dúvidas
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            Solicite sua ART
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-primary mt-3 text-sm">
              Solicite sua ART
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
