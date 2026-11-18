import Link from "next/link";
import { brand } from "./content";
import { Icon } from "./icons";

export const eyebrow = "text-xs font-semibold uppercase tracking-[0.25em] text-gold/80";
export const display = "font-display font-bold uppercase leading-[0.95] tracking-[-0.01em]";
export const section = "relative overflow-hidden border-t border-gold/10";

export function Wordmark({ className = "" }: { className?: string }) {
  return <span className={`gold-text font-cinzel font-bold tracking-wide ${className}`}>{brand.name}</span>;
}

function SmartLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a href={href} className={className} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

export function GoldButton({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="gold-bg inline-flex h-14 items-center justify-center gap-3 rounded-full px-7 text-sm font-bold uppercase tracking-wide text-black shadow-[0_0_30px_rgba(212,165,60,0.35)] transition hover:brightness-110"
    >
      <Icon name={icon} className="h-5 w-5" />
      {children}
      <Icon name="chevron" className="h-4 w-4" />
    </SmartLink>
  );
}

export function OutlineButton({ href, icon, children }: { href: string; icon: string; children: React.ReactNode }) {
  return (
    <SmartLink
      href={href}
      className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-gold/70 px-7 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-gold/10"
    >
      <Icon name={icon} className="h-5 w-5 text-gold" />
      {children}
      <Icon name="chevron" className="h-4 w-4 text-gold" />
    </SmartLink>
  );
}

export function Glow({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`aura pointer-events-none absolute aspect-square rounded-full bg-[radial-gradient(closest-side,rgba(212,165,60,0.20),rgba(212,165,60,0.05)_55%,transparent_75%)] ${className}`}
    />
  );
}

export function Grain() {
  return <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-60" />;
}

export function SectionTitle({ title, sub }: { title: string; sub: string }) {
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

/* Дэд хуудасны толгой хэсэг */
export function PageHero({ eyebrow: eb, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden pt-16">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#1c160c,transparent_65%),linear-gradient(to_bottom,#0b0906,#060505)]" />
      <div aria-hidden="true" className="sparks pointer-events-none absolute inset-0" />
      <Glow className="left-1/2 top-[30%] w-[40rem]" />
      <Grain />
      <div className="relative mx-auto max-w-5xl px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-28">
        <p className={eyebrow}>{eb}</p>
        <h1 className={`mx-auto mt-5 max-w-4xl text-balance text-[clamp(2.25rem,7vw,5rem)] text-white ${display}`}>{title}</h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">{text}</p>
        <div aria-hidden="true" className="mx-auto mt-10 h-px w-full max-w-xl bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_12px_rgba(212,165,60,0.8)]" />
      </div>
    </section>
  );
}
