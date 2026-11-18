"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { brand, content, socials, type Content, type Lang } from "./content";
import { Icon } from "./icons";
import { Wordmark, eyebrow } from "./ui";

type LangCtx = { lang: Lang; t: Content; other: Content };
const LangContext = createContext<LangCtx>({ lang: "mn", t: content.mn, other: content.en });

/* Хуудас бүрт: const { t, other } = useLang(); */
export const useLang = () => useContext(LangContext);

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

export default function Shell({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mn");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = content[lang];
  const other = content[lang === "mn" ? "en" : "mn"];
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage is only readable after mount
      if (saved === "mn" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Цэс нээлттэй үед ард талын хуудас гүйхгүй
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const close = () => setMenuOpen(false);

  return (
    <LangContext.Provider value={{ lang, t, other }}>
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
            <Link href="/" onClick={close} className="md:order-1">
              <Wordmark className="text-lg sm:text-2xl" />
            </Link>
            <nav className="hidden items-center gap-8 text-sm md:order-1 md:flex">
              {t.nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={isActive(n.href) ? "page" : undefined}
                  className={`transition hover:text-gold ${isActive(n.href) ? "text-gold" : "text-white/75"}`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="flex justify-end md:order-3">
              <Link
                href="/contact"
                className="gold-bg hidden h-10 items-center rounded-full px-5 text-sm font-bold text-black transition hover:brightness-110 md:inline-flex"
              >
                {t.login}
              </Link>
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
        </header>

        {/* Утсан дээрх 3 зураасан цэс — бүтэн дэлгэцээр */}
        {menuOpen && (
          <nav className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background/98 px-6 pb-24 pt-6 backdrop-blur-xl md:hidden">
            <Link
              href="/"
              onClick={close}
              className={`flex items-center justify-between border-b border-gold/15 py-5 font-display text-2xl font-bold uppercase ${isActive("/") ? "text-gold" : "text-white"}`}
            >
              {t.bottomNav[0].label}
              <Icon name="chevron" className="h-5 w-5 text-gold" />
            </Link>
            {t.nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={close}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`flex items-center justify-between border-b border-gold/15 py-5 font-display text-2xl font-bold uppercase ${isActive(n.href) ? "text-gold" : "text-white"}`}
              >
                {n.label}
                <Icon name="chevron" className="h-5 w-5 text-gold" />
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={close}
              className="gold-bg mt-8 flex h-14 items-center justify-center rounded-full text-sm font-bold uppercase tracking-wide text-black"
            >
              {t.hero.register}
            </Link>
          </nav>
        )}

        {children}

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
                  <li key={n.href}>
                    <Link href={n.href} className="transition hover:text-gold">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={eyebrow}>{t.footer.social}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-gold">{s.label}</a>
                  </li>
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
            {t.bottomNav.map((b) => (
              <li key={b.href}>
                <Link
                  href={b.href}
                  onClick={close}
                  className={`flex flex-col items-center gap-1 py-2.5 text-[0.7rem] ${isActive(b.href) ? "text-gold" : "text-white/80"}`}
                >
                  <Icon name={b.icon} className="h-6 w-6" />
                  {b.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </LangContext.Provider>
  );
}
