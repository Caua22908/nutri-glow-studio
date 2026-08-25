import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  ClipboardList,
  HeartPulse,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  Minus,
  Plus,
  Sparkles,
  Users,
} from "lucide-react";

import heroNutri from "@/assets/hero-nutri.jpg";
import consulta from "@/assets/consulta.jpg";
import comida from "@/assets/comida.jpg";
import grupo from "@/assets/grupo.jpg";
import { AuroraBackground } from "@/components/site/aurora-background";
import { Counter } from "@/components/site/counter";
import {
  Parallax,
  Reveal,
  ScrollProgressBar,
  TiltCard,
  WordsReveal,
} from "@/components/site/motion-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stefani da Hora | Nutricionista em São Tomé de Paripe" },
      {
        name: "description",
        content:
          "Emagrecimento definitivo além da estética. Consultas presenciais e online, plano alimentar calculado, bioimpedância e acompanhamento humanizado para mulheres.",
      },
      {
        property: "og:title",
        content: "Stefani da Hora | Nutricionista em São Tomé de Paripe",
      },
      {
        property: "og:description",
        content:
          "Emagrecimento além da estética: plano alimentar calculado, bioimpedância e acompanhamento próximo, presencial ou online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5571000000000";
const INSTAGRAM = "https://www.instagram.com/nutri_stefani/";

const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Consulta", href: "#consulta" },
  { label: "Programas", href: "#programas" },
  { label: "Resultados", href: "#resultados" },
  { label: "Dúvidas", href: "#duvidas" },
];

const marquee = [
  "Emagrecimento definitivo",
  "Bioimpedância",
  "Plano alimentar calculado",
  "Hipertrofia e definição",
  "Fórmulas manipuladas",
  "Acompanhamento Mounjaro & Ozempic",
  "Grupos gratuitos para mulheres",
];

const pillars = [
  {
    icon: HeartPulse,
    title: "Além da estética",
    text: "Exames, rotina e saúde mental entram na conta. O número da balança é consequência, nunca o objetivo único.",
  },
  {
    icon: ClipboardList,
    title: "Dieta que cabe na vida",
    text: "Plano alimentar calculado com a comida que você já come. Simples, acessível e sustentável no dia a dia.",
  },
  {
    icon: Users,
    title: "Sem julgamento",
    text: "Errou no fim de semana? A gente ajusta. Aqui o acompanhamento é próximo, humano e sempre disponível.",
  },
  {
    icon: Leaf,
    title: "Zero suplemento à toa",
    text: "Só indico o que faz diferença real no seu resultado. Nada de listas caras e desnecessárias.",
  },
];

const steps = [
  {
    n: "01",
    title: "Avaliação corporal",
    text: "Dobras cutâneas e bioimpedância para enxergar massa magra, gordura, água corporal e metabolismo.",
  },
  {
    n: "02",
    title: "Plano alimentar calculado",
    text: "Cardápio montado sobre a sua rotina, sua renda e seu paladar — com substituições para cada refeição.",
  },
  {
    n: "03",
    title: "Suporte e ajustes",
    text: "Fórmulas manipuladas quando necessário e acompanhamento no uso de Mounjaro e Ozempic com segurança.",
  },
  {
    n: "04",
    title: "Autonomia",
    text: "O objetivo é você evoluir sem mim depois da meta alcançada. Alta é sucesso, não perda de cliente.",
  },
];

const programs = [
  {
    tag: "Presencial",
    title: "Consulta em São Tomé de Paripe",
    text: "Avaliação completa com bioimpedância, plano alimentar e retorno acompanhado de perto.",
    image: consulta,
    highlight: false,
  },
  {
    tag: "Online",
    title: "Acompanhamento à distância",
    text: "Todo o Brasil e fora dele. Mesma estrutura da consulta presencial, com suporte por mensagem.",
    image: comida,
    highlight: true,
  },
  {
    tag: "Gratuito",
    title: "Grupo VIP de mulheres",
    text: "Comunidade com conteúdo, receitas e desafios. Mais de 300 autoestimas recuperadas.",
    image: grupo,
    highlight: false,
  },
];

const testimonials = [
  {
    name: "Maiara S.",
    text: "Ótima nutricionista, atenciosa. Gostei demais do atendimento, ela está de parabéns por toda a orientação.",
  },
  {
    name: "Aninha A.",
    text: "Excelente profissional, atendimento de excelência. Mudou minha relação com a comida.",
  },
  {
    name: "Alana T.",
    text: "Arrasa! Consegui emagrecer sem passar fome e ainda entendendo o porquê de cada escolha.",
  },
];

const faqs = [
  {
    q: "Atende online?",
    a: "Sim. O acompanhamento online contempla avaliação, plano alimentar calculado e suporte por mensagem — para qualquer lugar do Brasil ou do exterior.",
  },
  {
    q: "Preciso passar fome para emagrecer?",
    a: "Não. O plano é montado com os alimentos da sua rotina e com quantidades calculadas para o seu gasto energético. Emagrecer com fome é o caminho mais rápido para recuperar o peso.",
  },
  {
    q: "Faz acompanhamento de Mounjaro e Ozempic?",
    a: "Faço. A medicação sozinha não sustenta resultado: o acompanhamento nutricional protege massa magra, reduz efeitos colaterais e prepara a manutenção.",
  },
  {
    q: "Quanto tempo dura o acompanhamento?",
    a: "Varia com o objetivo, mas o combinado é sempre o mesmo: te dar autonomia para seguir sem depender de mim quando a meta chegar.",
  },
];

function Index() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <ScrollProgressBar />

      {/* NAV */}
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5"
      >
        <nav className="surface-glass flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 shadow-soft sm:px-6">
          <a href="#topo" className="font-display text-base leading-none tracking-tight sm:text-lg">
            Stefani <span className="text-gradient-warm">da Hora</span>
          </a>
          <ul className="hidden items-center gap-7 text-[0.8rem] font-medium text-muted-foreground md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative inline-block transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.78rem] font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
          >
            Agendar
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>
      </motion.header>

      {/* HERO */}
      <section
        id="topo"
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-32 pb-20"
      >
        <motion.div style={{ opacity: heroFade }} className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="surface-glass mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-secondary"
            >
              <Sparkles className="size-3.5 text-primary" />
              Nutricionista • CRN
            </motion.div>

            <h1 className="font-display text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.95]">
              <WordsReveal text="Emagrecimento" className="block" />
              <span className="block text-gradient-warm italic">
                <WordsReveal text="além da estética." />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Plano alimentar calculado, bioimpedância e acompanhamento próximo — para mulheres que
              querem resultado que dura, sem dieta impossível e sem julgamento.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
                style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
              >
                <MessageCircle className="size-4" />
                Marcar minha consulta
              </a>
              <a
                href="#consulta"
                className="inline-flex items-center gap-2 rounded-full border border-secondary/25 px-6 py-3.5 text-sm font-semibold text-secondary transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
              >
                Como funciona
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10 flex items-center gap-2 text-xs text-muted-foreground"
            >
              <MapPin className="size-3.5 text-primary" />
              São Tomé de Paripe, Bahia — e online para todo o Brasil
            </motion.div>
          </div>

          <motion.div style={{ y: heroY, scale: heroScale }} className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[3rem] blur-2xl"
              style={{ background: "var(--gradient-warm)", opacity: 0.35 }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grain-overlay relative overflow-hidden rounded-[2.5rem] shadow-soft"
            >
              <img
                src={heroNutri}
                alt="Stefani da Hora, nutricionista, em seu consultório"
                width={1024}
                height={1408}
                className="h-[clamp(24rem,58vh,34rem)] w-full object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="surface-glass float-slow absolute -bottom-6 -left-4 rounded-2xl px-5 py-4 shadow-soft sm:-left-10"
            >
              <p className="font-display text-2xl text-gradient-warm">
                +<Counter to={300} />
              </p>
              <p className="text-[0.7rem] leading-tight text-muted-foreground">
                autoestimas recuperadas
                <br />
                em todo o Brasil
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="relative overflow-hidden border-y border-secondary/10 bg-secondary py-4">
        <div className="marquee-track flex w-max gap-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-10 text-sm font-medium tracking-wide text-secondary-foreground/80"
            >
              {item}
              <Leaf className="size-3.5 text-primary" />
            </span>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative px-4 py-28 sm:py-36">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <Parallax distance={46}>
            <div className="grain-overlay relative overflow-hidden rounded-[2.5rem] shadow-soft">
              <img
                src={comida}
                alt="Prato equilibrado com frango grelhado, arroz integral, feijão, abacate e frutas"
                width={1200}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Parallax>

          <div>
            <Reveal>
              <p className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-primary">
                Quem é a sua nutri
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3rem)] leading-[1.05]">
                É por isso que eu sou{" "}
                <span className="text-gradient-warm italic">a sua nutri</span>
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
                Não sou uma nutri famosa, mas já ajudei muitas mulheres. Minhas dietas são simples e
                eficazes, e o sucesso, pra mim, nunca esteve só na balança.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.09}>
                  <TiltCard className="surface-glass h-full rounded-2xl p-5 transition-shadow duration-300 hover:shadow-soft">
                    <p.icon className="size-5 text-primary" />
                    <h3 className="mt-3 font-display text-lg">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTA / STEPS */}
      <section id="consulta" className="relative overflow-hidden px-4 py-28 sm:py-36">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-full"
          style={{ background: "var(--gradient-forest)" }}
        />
        <div className="mx-auto max-w-6xl text-secondary-foreground">
          <Reveal>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-primary">
              É assim que funciona
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4.4vw,3rem)] leading-[1.05] text-secondary-foreground">
              A minha consulta, do primeiro contato à sua{" "}
              <span className="text-gradient-warm italic">autonomia</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="h-full">
                <div className="group relative h-full bg-[oklch(0.24_0.048_158)] p-7 transition-colors duration-500 hover:bg-[oklch(0.28_0.055_158)]">
                  <span className="font-display text-4xl text-primary/45 transition-colors duration-500 group-hover:text-primary">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-secondary-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Activity, label: "Bioimpedância completa" },
              { icon: ClipboardList, label: "Fórmulas manipuladas" },
              { icon: HeartPulse, label: "Suporte entre consultas" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-3 rounded-2xl border border-cream/12 px-5 py-4">
                  <item.icon className="size-4 shrink-0 text-primary" />
                  <span className="text-sm text-cream/85">{item.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMAS */}
      <section id="programas" className="relative px-4 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-primary">
              Formatos de atendimento
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4.4vw,3rem)] leading-[1.05]">
              Escolha como quer <span className="text-gradient-warm italic">começar</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12} className="h-full">
                <TiltCard className="grain-overlay group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1200}
                      height={912}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                    <span
                      className="absolute top-4 left-4 rounded-full px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-primary-foreground uppercase"
                      style={{ background: "var(--gradient-warm)" }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      Quero esse
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                  {p.highlight && (
                    <div
                      className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{ boxShadow: "var(--shadow-glow)" }}
                    />
                  )}
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="relative px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="surface-glass grid gap-10 rounded-[2.5rem] px-8 py-12 shadow-soft sm:grid-cols-3">
            {[
              { to: 300, suffix: "+", label: "mulheres acompanhadas" },
              { to: 601, suffix: "", label: "conteúdos publicados" },
              { to: 100, suffix: "%", label: "plano feito sob medida" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="font-display text-[clamp(2.4rem,5vw,3.4rem)] leading-none text-gradient-warm">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1} className="h-full">
                <figure className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="mb-4 flex gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Sparkles key={s} className="size-3.5" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/85">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="relative px-4 py-28 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <p className="text-[0.72rem] font-semibold tracking-[0.22em] uppercase text-primary">
              Dúvidas frequentes
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3rem)] leading-[1.05]">
              Antes de <span className="text-gradient-warm italic">começar</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ficou alguma pergunta de fora? Me chama no WhatsApp — eu respondo pessoalmente.
            </p>
          </Reveal>

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.07}>
                <FaqItem {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grain-overlay relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center">
            <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-forest)" }} />
            <div
              className="aurora-field drift-slow -z-10"
              style={{
                background:
                  "radial-gradient(40% 50% at 50% 50%, oklch(0.78 0.13 62 / 0.55), transparent 70%)",
              }}
            />
            <Reveal>
              <h2 className="mx-auto max-w-2xl font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.03] text-secondary-foreground">
                Sua próxima versão começa com{" "}
                <span className="text-gradient-warm italic">uma decisão</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/70">
                Vagas limitadas por mês para garantir acompanhamento de verdade.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
                  style={{ background: "var(--gradient-warm)", boxShadow: "var(--shadow-glow)" }}
                >
                  <MessageCircle className="size-4" />
                  Falar no WhatsApp
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-semibold text-secondary-foreground transition-colors duration-300 hover:bg-cream/10"
                >
                  <Instagram className="size-4" />
                  @nutri_stefani
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p className="font-display text-sm text-foreground">
            Stefani <span className="text-gradient-warm">da Hora</span> · Nutricionista
          </p>
          <p>São Tomé de Paripe, Bahia · Atendimento online para todo o Brasil</p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg leading-snug">{q}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-primary transition-colors duration-300 hover:border-primary">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{a}</p>
      </motion.div>
    </div>
  );
}
