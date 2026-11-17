"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  brand,
  contactHref,
  content,
  images,
  socials,
  videoHref,
  type Lang,
} from "./content";
import { Icon } from "./icons";

const eyebrow = "text-xs font-semibold uppercase tracking-[0.25em] text-gold/80";
const display = "font-display font-bold uppercase leading-[0.95] tracking-[-0.01em]";
const section = "relative overflow-hidden border-t border-gold/10";

/* ---------- жижиг хэсгүүд ---------- */

function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`gold-text font-cinzel font-bold tracking-wide ${className}`}>{brand.name}</span>;
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex rounded-full border border-gold/40 p-0.5 text-xs font-bold">
      {(["mn", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 uppercase transition ${
            lang === l ? "gold-bg text-black" : "text-white/80 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

function GoldButton({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="gold-bg inline-flex h-14 items-center justify-center gap-3 rounded-full px-7 text-sm font-bold uppercase tracking-wide text-black shadow-[0_0_30px_rgba(212,165,60,0.35)] transition hover:brightness-110"
    >
      <Icon name={icon} className="h-5 w-5" />
      {children}
      <Icon name="chevron" className="h-4 w-4" />
    </a>
  );
}

function OutlineButton({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-gold/70 px-7 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-gold/10"
    >
      <Icon name={icon} className="h-5 w-5 text-gold" />
      {children}
      <Icon name="chevron" className="h-4 w-4 text-gold" />
    </a>
  );
}

function Glow({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`aura pointer-events-none absolute aspect-square rounded-full bg-[radial-gradient(closest-side,rgba(212,165,60,0.20),rgba(212,165,60,0.05)_55%,transparent_75%)] ${className}`}
    />
  );
}

function Grain() {
  return <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-60" />;
}

function SectionTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="reveal text-center">
      <h2 className={`text-[clamp(1.8rem,5vw,3.25rem)] text-white ${display}`}>{title}</h2>
      <div className="mt-3 flex items-center justify-center gap-4">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold sm:w-32" />
        <span className="font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-gold sm:text-sm">{sub}</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold sm:w-32" />
      </div>
    </div>
  );
}

/* Бамбай хэлбэртэй лого: зураг + титэм + лавр */
function Crest() {
  return (
    <div className="relative mx-auto w-[min(78vw,22rem)]">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="shield" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0 L1,0.1 V0.55 C1,0.78 0.76,0.92 0.5,1 C0.24,0.92 0,0.78 0,0.55 V0.1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Титэм */}
      <svg viewBox="0 0 100 40" className="absolute -top-[13%] left-1/2 z-20 w-[34%] -translate-x-1/2 drop-shadow-[0_0_12px_rgba(246,215,127,0.5)]" aria-hidden="true">
        <defs>
          <linearGradient id="g-crown" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fbe7a6" />
            <stop offset=".5" stopColor="#d4a53c" />
            <stop offset="1" stopColor="#8a5d17" />
          </linearGradient>
        </defs>
        <path d="M8 36 L4 10 L28 24 L50 2 L72 24 L96 10 L92 36 Z" fill="url(#g-crown)" stroke="#5c3d0d" strokeWidth="1.2" />
        <circle cx="50" cy="6" r="3.5" fill="#fbe7a6" />
        <circle cx="4" cy="10" r="3" fill="#fbe7a6" />
        <circle cx="96" cy="10" r="3" fill="#fbe7a6" />
      </svg>

      {/* Лавр */}
      {[false, true].map((flip) => (
        <svg
          key={String(flip)}
          viewBox="0 0 40 120"
          aria-hidden="true"
          className={`absolute top-[18%] z-0 w-[22%] text-gold ${flip ? "-right-[14%] -scale-x-100" : "-left-[14%]"}`}
        >
          <path d="M34 115 C10 90 6 50 22 8" fill="none" stroke="currentColor" strokeWidth="2" />
          {Array.from({ length: 7 }).map((_, i) => {
            const y = 100 - i * 14;
            const x = 26 - Math.sin(i / 2.2) * 12;
            return <ellipse key={i} cx={x - 6} cy={y} rx="7" ry="3" transform={`rotate(-35 ${x - 6} ${y})`} fill="currentColor" />;
          })}
        </svg>
      ))}

      {/* Бамбай */}
      <div className="gold-bg relative z-10 aspect-[5/6] p-[3%] drop-shadow-[0_0_40px_rgba(212,165,60,0.35)]" style={{ clipPath: "url(#shield)" }}>
        <div className="relative h-full w-full bg-black" style={{ clipPath: "url(#shield)" }}>
          <Image
            src={images.hero}
            alt="KHUSLENTS.ARM — Монголын шигшээ багийн тамирчин тэмцээнд"
            fill
            priority
            sizes="22rem"
            className="object-cover object-[60%_center] grayscale-[35%] contrast-110"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />
        </div>
      </div>

      {/* Нэрийн тууз */}
      <div className="absolute inset-x-[-10%] bottom-[12%] z-20 text-center">
        <p className="metal-text font-cinzel text-[clamp(1.8rem,8vw,3.2rem)] font-black leading-none tracking-tight">
          {brand.name}
        </p>
        <p className="mt-2 font-cinzel text-[clamp(0.55rem,2vw,0.75rem)] font-bold uppercase tracking-[0.35em] text-white/90">
          {brand.motto}
        </p>
      </div>
    </div>
  );
}

/* ---------- үндсэн хуудас ---------- */

export default function Site() {
  const [lang, setLangState] = useState<Lang>("mn");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const other = content[lang === "mn" ? "en" : "mn"];

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "mn" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return (
    <main className="relative isolate w-full overflow-x-clip bg-background pb-20 md:pb-0">
      {/* Скролл прогресс */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-white/5">
        <div className="scroll-progress gold-bg h-full w-full shadow-[0_0_12px_rgba(212,165,60,0.5)]" />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/15 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6 md:flex md:justify-between">
          <div className="md:order-2">
            <LangToggle lang={lang} setLang={setLang} />
          </div>
          <a href="#top" className="md:order-1">
            <Wordmark className="text-lg sm:text-2xl" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/75 md:order-1 md:flex">
            {t.nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-gold">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex justify-end md:order-3">
            <a
              href="#contact"
              className="gold-bg hidden h-10 items-center rounded-full px-5 text-sm font-bold text-black transition hover:brightness-110 md:inline-flex"
            >
              {t.login}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className="text-gold md:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-8 w-8" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-gold/15 bg-background/95 px-4 py-4 md:hidden">
            {t.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/5 py-3 text-base text-white/85"
              >
                {n.label}
                <Icon name="chevron" className="h-4 w-4 text-gold" />
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative w-full pt-16">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#1c160c,transparent_60%),linear-gradient(to_bottom,#0b0906,#050505)]" />
        <div aria-hidden="true" className="sparks pointer-events-none absolute inset-0" />
        <Glow className="left-1/2 top-[40%] w-[46rem]" />
        <Grain />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-10 pt-20 text-center sm:px-6 sm:pt-24">
          <Crest />

          <p className="metal-text mt-12 font-cinzel text-[clamp(1rem,3.5vw,1.6rem)] font-semibold uppercase italic tracking-[0.4em]">
            Built to be a
          </p>
          <p className="metal-text font-cinzel text-[clamp(2.2rem,9vw,4.5rem)] font-bold uppercase italic leading-tight tracking-[0.25em]">
            Champion
          </p>
          <div aria-hidden="true" className="mt-4 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_12px_rgba(212,165,60,0.8)]" />

          <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <GoldButton href={contactHref} icon="userPlus">{t.hero.register}</GoldButton>
            <OutlineButton href="#video" icon="playCircle">{t.hero.intro}</OutlineButton>
          </div>
        </div>

        {/* 4 онцлог */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="grid grid-cols-4 divide-x divide-gold/20 border-y border-gold/20 bg-black/30 py-6 backdrop-blur-sm">
            {t.features.map((f, i) => (
              <a key={f.label} href={f.href} className="group flex flex-col items-center gap-2 px-1 text-center">
                <Icon name={f.icon} className="h-8 w-8 text-gold transition group-hover:scale-110 sm:h-10 sm:w-10" />
                <span className="text-[0.7rem] font-bold uppercase tracking-wide text-white sm:text-sm">{f.label}</span>
                <span className="text-[0.65rem] text-white/50 sm:text-xs">{other.features[i].label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Хөтөлбөр */}
      <section id="programs" className={`${section} scroll-mt-16 bg-[#070605] py-20 sm:py-28`}>
        <Glow className="left-[15%] top-[30%] w-[36rem]" />
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <SectionTitle title={t.programs.title} sub={other.programs.title} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.programs.items.map((p, i) => (
              <a
                key={p.title}
                href={contactHref}
                className="reveal group flex flex-col overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-[#16120a] to-[#0a0907] transition hover:border-gold hover:shadow-[0_0_30px_rgba(212,165,60,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[radial-gradient(ellipse_at_center,#2a2214,#0a0907)]">
                  {p.image ? (
                    <Image src={p.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover grayscale transition duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="grid h-full place-items-center">
                      <Icon name="dumbbell" className="h-24 w-24 text-white/20" />
                    </div>
                  )}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0a0907] to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start gap-4">
                    <Icon name={p.icon} className="mt-1 h-7 w-7 shrink-0 text-gold" />
                    <div>
                      <h3 className="font-display text-xl font-bold uppercase text-white">{p.title}</h3>
                      <p className="text-sm text-white/50">{other.programs.items[i].title}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/65">{p.text}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    {p.badge ? (
                      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase text-gold">
                        <Icon name="trophy" className="h-4 w-4" />
                        {p.badge}
                      </span>
                    ) : (
                      <span />
                    )}
                    <Icon name="chevron" className="h-5 w-5 text-gold transition group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Аялал / timeline */}
      <section id="journey" className={`${section} scroll-mt-16 bg-[#080707] py-20 sm:py-28`}>
        <Glow className="left-[85%] top-[70%] hidden w-[42rem] lg:block" />
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="reveal">
            <p className={eyebrow}>{t.journey.eyebrow}</p>
            <h2 className={`mt-5 max-w-4xl text-balance text-[clamp(2.25rem,7vw,5rem)] text-white ${display}`}>
              {t.journey.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <div className="reveal group relative mx-auto aspect-square w-full max-w-[20rem] overflow-hidden rounded-2xl border border-gold/40 lg:mx-0 lg:max-w-none">
              <Image src={images.journey} alt="" fill sizes="(min-width: 1024px) 26rem, 20rem" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080707] to-transparent" />
              <p className="gold-text absolute bottom-4 left-5 font-display text-2xl font-bold uppercase tracking-wide">
                {t.journey.name}
              </p>
            </div>
            <div className="reveal flex flex-col justify-center">
              <p className={eyebrow}>{t.journey.subtitle}</p>
              <ol className="mt-6 divide-y divide-gold/15 border-y border-gold/15">
                {t.journey.items.map((item) => (
                  <li key={item.year} className="group flex items-baseline gap-5 py-5">
                    <span className="w-28 shrink-0 font-display text-lg font-bold uppercase text-white transition-colors group-hover:text-gold sm:w-44 sm:text-2xl">
                      {item.year}
                    </span>
                    <p className="text-sm leading-relaxed text-white/70 sm:text-base">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Том уриа */}
      <section className={`${section} bg-[#070606] py-16 sm:py-32`}>
        <div aria-hidden="true" className="rays pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[64rem] opacity-60" />
        <Glow className="left-1/2 top-1/2 w-[44rem]" />
        <Grain />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="reveal">
            <p className={eyebrow}>{t.statement.eyebrow}</p>
            <div aria-hidden="true" className="mx-auto mt-6 flex h-1 w-24 overflow-hidden rounded-full">
              <span className="flex-1 bg-[#DA2032]" />
              <span className="flex-1 bg-[#0066B3]" />
              <span className="flex-1 bg-[#DA2032]" />
            </div>
          </div>
          <p className={`reveal mx-auto mt-8 max-w-4xl text-balance text-[clamp(2.25rem,7vw,5.25rem)] text-white ${display}`}>
            {t.statement.big}
          </p>
          <p className="reveal mt-8 font-serif text-[clamp(1.6rem,4vw,2.5rem)] italic text-white/80">
            {t.statement.italic}
          </p>
          <p className={`reveal gold-text mt-6 text-[clamp(2.5rem,9vw,6.5rem)] [filter:drop-shadow(0_0_30px_rgba(212,165,60,0.4))] ${display}`}>
            {t.statement.glow}
          </p>
        </div>
      </section>

      {/* Видео */}
      <section id="video" className={`${section} scroll-mt-16 bg-[#0a0909] py-20 sm:py-28`}>
        <Grain />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle title={t.video.title} sub={other.video.title} />
          <p className="reveal mx-auto mt-6 max-w-xl text-center text-base text-white/60">{t.video.text}</p>
          <a
            href={videoHref}
            target="_blank"
            rel="noreferrer"
            className="reveal group relative mt-10 block aspect-video overflow-hidden rounded-2xl border border-gold/40"
          >
            <Image src={images.hero} alt="" fill sizes="(min-width: 1024px) 64rem, 100vw" className="object-cover object-[50%_30%] brightness-50 transition duration-700 group-hover:scale-[1.03] group-hover:brightness-75" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="gold-bg grid h-20 w-20 place-items-center rounded-full text-black shadow-[0_0_40px_rgba(212,165,60,0.6)] transition group-hover:scale-110">
                <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15l13-7.5-13-7.5Z" /></svg>
              </span>
            </span>
            <span className="absolute bottom-5 left-6 text-sm font-bold uppercase tracking-wide text-white">{t.video.cta}</span>
          </a>
        </div>
      </section>

      {/* Хуваарь */}
      <section id="schedule" className={`${section} scroll-mt-16 bg-[#080707] py-20 sm:py-28`}>
        <Glow className="left-[10%] top-[60%] w-[36rem]" />
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="reveal max-w-2xl">
            <p className={eyebrow}>{t.schedule.eyebrow}</p>
            <h2 className={`mt-5 text-[clamp(2.25rem,7vw,5rem)] text-white ${display}`}>{t.schedule.title}</h2>
            <p className="mt-6 text-base leading-relaxed text-white/60">{t.schedule.text}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.schedule.items.map((item) => (
              <div key={item.title} className="reveal rounded-2xl border border-gold/30 bg-white/[0.02] p-8 transition hover:border-gold">
                <p className="gold-text font-display text-5xl font-bold sm:text-6xl">{item.time}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-white/60">{item.place}</p>
                <a href={item.mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:brightness-125">
                  {t.schedule.map} <Icon name="chevron" className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Төгсгөл CTA */}
      <section id="contact" className={`${section} scroll-mt-16 bg-[#070606] py-20 sm:py-32`}>
        <div aria-hidden="true" className="sparks pointer-events-none absolute inset-0 opacity-70" />
        <Glow className="left-1/2 top-1/2 w-[44rem]" />
        <Grain />
        <div className="reveal relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Wordmark className="text-sm tracking-[0.3em]" />
          <h2 className={`mt-5 text-balance text-[clamp(2.25rem,7vw,5rem)] text-white ${display}`}>{t.closing.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">{t.closing.text}</p>
          <div className="mt-10 flex justify-center">
            <GoldButton href={contactHref} icon="userPlus">{t.hero.register}</GoldButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-[#050404]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
          <div>
            <Wordmark className="text-2xl" />
            <p className="mt-1 font-cinzel text-[0.65rem] uppercase tracking-[0.3em] text-white/50">{brand.motto}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">{t.footer.tagline}</p>
          </div>
          <div>
            <p className={eyebrow}>{t.footer.menu}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {t.nav.map((n) => (
                <li key={n.href}><a href={n.href} className="transition hover:text-gold">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className={eyebrow}>{t.footer.social}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {socials.map((s) => (
                <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-gold">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>© 2026 {brand.name}. {t.footer.rights}</p>
            <div className="flex gap-5">
              {t.footer.legal.map((l) => (
                <a key={l} href="#" className="transition hover:text-white/70">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Утсан дээрх доод цэс */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/20 bg-[#0a0907]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl md:hidden">
        <ul className="grid grid-cols-5">
          {t.bottomNav.map((b, i) => (
            <li key={b.href + b.icon}>
              <a href={b.href} className={`flex flex-col items-center gap-1 py-2.5 text-[0.7rem] ${i === 0 ? "text-gold" : "text-white/80"}`}>
                <Icon name={b.icon} className="h-6 w-6" />
                {b.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
