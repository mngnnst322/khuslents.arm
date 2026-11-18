"use client";

import Image from "next/image";
import Link from "next/link";
import { contactHref, images, videoHref } from "./content";
import { Icon } from "./icons";
import { useLang } from "./shell";
import { Wordmark, GoldButton, Glow, Grain, OutlineButton, SectionTitle, display, eyebrow, section } from "./ui";

/* Лого — public/tselogo.jpg */
function Logo() {
  return (
    <div className="relative mx-auto aspect-[3/2] w-[min(96vw,44rem)] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_60%,transparent_100%)]">
      <Image
        src={images.logo}
        alt="KHUSLENTS.ARM — Built to be a champion"
        fill
        priority
        sizes="(min-width: 768px) 44rem, 96vw"
        className="object-contain"
      />
    </div>
  );
}

/* Сургалтын хөтөлбөрийн картууд — нүүр болон /training хуудсанд */
export function Programs() {
  const { t, other } = useLang();
  return (
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <SectionTitle title={t.programs.title} sub={other.programs.title} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.programs.items.map((p, i) => (
              <a
                key={p.title}
                href="/contact"
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
  );
}

/* Бэлтгэлийн цагийн хуваарь — нүүр болон /training хуудсанд */
export function Schedule() {
  const { t } = useLang();
  return (
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
  );
}

/* ---------- нүүр хуудас ---------- */

export default function Site() {
  const { t, other } = useLang();

  return (
    <>
      {/* Hero */}
      <section id="top" className="relative w-full pt-16">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,#1c160c,transparent_60%),linear-gradient(to_bottom,#0b0906,#050505)]" />
        <div aria-hidden="true" className="sparks pointer-events-none absolute inset-0" />
        <Glow className="left-1/2 top-[40%] w-[46rem]" />
        <Grain />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-10 pt-8 text-center sm:px-6 sm:pt-12">
          <Logo />

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
              <Link key={f.label} href={f.href} className="group flex flex-col items-center gap-2 px-1 text-center">
                <Icon name={f.icon} className="h-8 w-8 text-gold transition group-hover:scale-110 sm:h-10 sm:w-10" />
                <span className="text-[0.7rem] font-bold uppercase tracking-wide text-white sm:text-sm">{f.label}</span>
                <span className="text-[0.65rem] text-white/50 sm:text-xs">{other.features[i].label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Хөтөлбөр */}
      <section id="programs" className={`${section} scroll-mt-16 bg-[#070605] py-20 sm:py-28`}>
        <Glow className="left-[15%] top-[30%] w-[36rem]" />
        <Grain />
        <Programs />
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
        <Schedule />
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
    </>
  );
}
