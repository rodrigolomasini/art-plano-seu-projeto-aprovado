import { useEffect, useRef, useState } from "react";
import {
  FileCheck2,
  KeyRound,
  Paintbrush,
  ShieldCheck,
  Clock,
  Award,
  ScrollText,
  Building2,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Instagram,
  HardHat,
  ChevronDown,
  ClipboardList,
  CreditCard,
  Send,
} from "lucide-react";
import teamImg from "@/assets/team.jpg";
import projetoImg from "@/assets/projeto-interiores.png";

const PHONE_DISPLAY = "(11) 91311-0483";
const WA_BASE = "https://wa.me/5511913110483";
const waLink = (msg: string) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

/* ============ SOBRE ============ */
function useCounter(target: number, on: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!on) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.floor(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, on, duration]);
  return v;
}

function StatItem({ value, suffix, label, on }: { value: number; suffix: string; label: string; on: boolean }) {
  const n = useCounter(value, on);
  return (
    <div>
      <div className="font-display text-4xl font-extrabold text-primary md:text-5xl">
        {n.toLocaleString("pt-BR")}
        <span className="text-secondary">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-muted-foreground">{label}</div>
    </div>
  );
}

export function Sobre() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setSeen(true)),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <HardHat className="h-3.5 w-3.5" /> Sobre a ART Plano
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Engenharia responsável para viabilizar os seus sonhos.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A ART Plano nasceu da percepção de um problema real do mercado paulistano: proprietários e
              investidores travados por burocracias condominiais, normas técnicas cada vez mais rigorosas e o
              medo legítimo de paralisações, multas e riscos estruturais.
            </p>
            <p>
              Atuamos como o <strong className="text-foreground">elo técnico</strong> entre o cliente e a
              administração predial — cumprindo com rigor absoluto as normas ABNT e entregando a documentação
              necessária com a agilidade que sua obra exige.
            </p>
            <p>
              Nossa missão é clara: <em>viabilizar sonhos através da engenharia responsável</em>. Acreditamos
              que a segurança técnica é o alicerce de qualquer transformação estética ou estrutural.
            </p>
          </div>

          <div ref={ref} className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <StatItem value={4} suffix="+" label="Anos de experiência" on={seen} />
            <StatItem value={100} suffix="k m²" label="Reformas aprovadas" on={seen} />
            <StatItem value={1} suffix=" dia útil" label="Prazo de entrega" on={seen} />
          </div>
        </div>

        <div className="relative">
          <img
            src={teamImg}
            alt="Equipe de engenheiros e arquitetos da ART Plano em São Paulo"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-2xl md:block">
            <Award className="h-7 w-7" />
            <div className="mt-2 text-2xl font-extrabold">CREA</div>
            <div className="text-xs text-white/80">Engenheiros e arquitetos<br />registrados e habilitados</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVIÇOS ============ */
const services = [
  {
    icon: FileCheck2,
    title: "Emissão de ART para Reformas",
    desc: "Anotação de Responsabilidade Técnica emitida em até 1 dia útil, cobrindo todos os itens da sua reforma com rigor ABNT.",
  },
  {
    icon: KeyRound,
    title: "Vistoria para Entrega de Chaves",
    desc: "Laudo técnico imparcial que identifica vícios construtivos e protege o proprietário antes da assinatura do recebimento.",
  },
  {
    icon: Paintbrush,
    image: projetoImg,
    title: "Projetos de Interiores",
    desc: "Desenvolvimento de projetos técnicos para reformas internas com foco em funcionalidade, segurança e valorização do imóvel.",
  },
  {
    icon: ScrollText,
    title: "Regularização de Imóveis",
    desc: "Adequação documental junto à prefeitura e regularização técnica para imóveis sem averbação ou com pendências.",
  },
  {
    icon: ShieldCheck,
    title: "Análise de Riscos Estruturais",
    desc: "Avaliação preventiva para identificar pontos críticos antes da obra começar — evitando custos e paralisações.",
  },
  {
    icon: Building2,
    title: "Consultoria Técnica Preventiva",
    desc: "Orientação especializada para você executar sua reforma sem entraves administrativos junto ao condomínio.",
  },
];

export function Servicos() {
  return (
    <section id="servicos" className="bg-primary-soft py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Serviços e Soluções
          </div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Documentação técnica completa para sua reforma.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluções de engenharia que eliminam a burocracia entre você e a administração do condomínio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card-elevated flex flex-col">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  {(s as any).image ? (
                    <img src={(s as any).image} alt={s.title} className="h-6 w-6 object-contain" loading="lazy" width={24} height={24} />
                  ) : (
                    <Icon className="h-6 w-6" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={waLink(`Olá! Tenho interesse no serviço: ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary mt-6 text-sm"
                >
                  {s.title === "Emissão de ART para Reformas" ? "Solicite sua ART Agora!" : "Saiba Mais"}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ DIFERENCIAIS ============ */
const diffs = [
  { icon: Clock, title: "Emissão em 1 dia útil", desc: "Documentação pronta no prazo mais ágil do mercado após o pagamento do sinal." },
  { icon: ShieldCheck, title: "Conformidade ABNT", desc: "Cumprimento rigoroso de todas as normas técnicas — sem retrabalho, sem multas." },
  { icon: Award, title: "+100 mil m² aprovados", desc: "Histórico comprovado de reformas viabilizadas em condomínios paulistanos." },
  { icon: ScrollText, title: "Documentação transparente", desc: "Você recebe todos os documentos por e-mail com assinatura digital válida." },
  { icon: Building2, title: "Especialistas em condomínios", desc: "Conhecemos a rotina das administradoras e antecipamos exigências internas." },
  { icon: CheckCircle2, title: "A partir de R$ 200,00*", desc: "Investimento acessível diante do risco de uma obra paralisada ou autuada." },
];

export function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Por que ART Plano
          </div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Autoridade técnica. Agilidade comprovada.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diffs.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="flex gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-md">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESSO ============ */
const steps = [
  { icon: ClipboardList, title: "Preencha o formulário", desc: "Envie os dados do proprietário e detalhes da reforma pretendida via WhatsApp." },
  { icon: CreditCard, title: "Pagamento do sinal (50%)", desc: "Confirmação via Pix para dar início imediato à elaboração da documentação." },
  { icon: Send, title: "Receba por e-mail", desc: "Documentação concluída enviada para assinatura digital — em até 1 dia útil." },
];

export function Processo() {
  return (
    <section className="bg-primary-soft py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Processo
          </div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Três passos para sua ART em mãos.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative rounded-2xl bg-card p-7 shadow-sm">
                <div className="absolute -top-4 left-7 grid h-9 w-9 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <Icon className="mt-2 h-8 w-8 text-secondary" />
                <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ DEPOIMENTOS ============ */
const testimonials = [
  {
    name: "Marcelo Almeida",
    role: "Proprietário · Vila Mariana",
    text: "Conseguiram emitir minha ART no mesmo dia. O síndico aprovou a reforma sem nenhuma exigência adicional. Atendimento técnico impecável.",
    initials: "MA",
  },
  {
    name: "Carolina Ferreira",
    role: "Investidora Imobiliária · Pinheiros",
    text: "Já trabalhei com vários engenheiros e nunca tive um atendimento tão objetivo. Documentação 100% em conformidade com a ABNT. Recomendo de olhos fechados.",
    initials: "CF",
  },
  {
    name: "Rodrigo Tavares",
    role: "Proprietário · Moema",
    text: "Estava com receio de paralisação da obra pelo condomínio. A ART Plano resolveu toda parte técnica e documental — fiquei tranquilo do início ao fim.",
    initials: "RT",
  },
  {
    name: "Patrícia Nunes",
    role: "Arquiteta Parceira · Itaim Bibi",
    text: "Parceiros essenciais para os meus projetos de interiores. Confiança total na parte de engenharia e prazos sempre cumpridos.",
    initials: "PN",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-background py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Depoimentos
          </div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Clientes que dormem tranquilos com suas reformas.
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md md:p-7">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                {t.initials}
              </div>
              <div className="min-w-0">
                <blockquote className="text-sm leading-relaxed text-foreground md:text-base">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-3">
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA FINAL ============ */
export function CTAFinal() {
  return (
    <section className="bg-primary py-20 text-primary-foreground md:py-28">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
          Sua reforma aprovada com segurança jurídica e zero burocracia.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/85 md:text-lg">
          A partir de R$ 200,00*. Documentação completa em até 1 dia útil. Sem dor de cabeça com o síndico,
          sem risco de paralisação, sem multas.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={waLink("Olá! Quero solicitar minha ART agora.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-bold text-primary shadow-2xl transition-all hover:-translate-y-0.5"
          >
            Solicite sua ART agora!
          </a>
          <a
            href={waLink("Olá! Gostaria de tirar algumas dúvidas.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/50 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
const faqs = [
  { q: "A ART cobre todas as reformas?", a: "Sim, a ART serve para todos os itens que você pretende fazer na reforma. No entanto, para itens mais complexos como demolição de paredes ou projetos específicos, pode haver um custo adicional." },
  { q: "Qual a validade da ART?", a: "A data de validade da ART será igual ao período de reforma que informar. Indicamos no máximo 6 meses." },
  { q: "Posso inserir na ART um serviço que ainda não tenho certeza se irei realizar?", a: "Pode ser inserido sim. Caso não realize, não há problema algum." },
  { q: "Qual o prazo para emissão e entrega da ART e documentação?", a: "Após o preenchimento do formulário e pagamento do sinal, a entrega é feita em no máximo 1 dia útil." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-primary-soft py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            FAQ
          </div>
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Perguntas frequentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground hover:bg-muted"
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FOOTER ============ */
export function Footer() {
  return (
    <footer className="bg-foreground py-14 text-white/85">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
              <HardHat className="h-5 w-5" />
            </span>
            <span className="text-xl font-extrabold text-white">ART<span className="font-light">Plano</span></span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Consultoria de engenharia especializada em viabilizar reformas em apartamentos com total
            conformidade técnica e segurança jurídica.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-white">Serviços</a></li>
            <li><a href="#depoimentos" className="hover:text-white">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href={waLink("Olá! Gostaria de tirar dúvidas.")} target="_blank" rel="noopener noreferrer" className="hover:text-white">Tirar Dúvidas</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> {PHONE_DISPLAY}</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> atendimento@artplano.com.br</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> Rua Glória de Dourados, 257 — São Paulo, SP</li>
            <li className="flex items-start gap-2"><Instagram className="mt-0.5 h-4 w-4 shrink-0" /> @artplano</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white">Atendimento</h4>
          <p className="mt-4 text-sm text-white/70">Segunda a Sexta<br />das 8h às 18h</p>
          <a href={waLink("Olá! Quero solicitar minha ART.")} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 text-sm">
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/55">
        © {new Date().getFullYear()} ART Plano · Engenharia e Reformas · Todos os direitos reservados
      </div>
    </footer>
  );
}
