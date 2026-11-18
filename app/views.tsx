"use client";

import Image from "next/image";
import { useState } from "react";
import { contactHref, orderInstagram, orderMessenger, orderPhone, phone, products, schedulePlace, socials } from "./content";
import { Icon } from "./icons";
import { useLang } from "./shell";
import { Programs, Schedule } from "./site";
import { GoldButton, Glow, Grain, PageHero, display, eyebrow, section } from "./ui";

/* /training */
export function TrainingView() {
  const { t } = useLang();
  const p = t.pages.training;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} text={p.text} />

      {/* Зөвхөн 20 хүн */}
      <section className={`${section} bg-[#070605] py-12 sm:py-16`}>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <div className="reveal flex flex-col items-center gap-6 rounded-2xl border border-gold/50 bg-gradient-to-b from-[#16120a] to-[#0a0907] p-8 text-center shadow-[0_0_40px_rgba(212,165,60,0.15)] sm:flex-row sm:text-left">
            <p className="gold-text font-display text-7xl font-bold leading-none sm:text-8xl">20</p>
            <div>
              <p className="font-display text-xl font-bold uppercase text-white sm:text-2xl">{p.limit}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{p.limitText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Сургалтын давуу тал */}
      <section className={`${section} bg-[#080707] py-20 sm:py-28`}>
        <Glow className="left-[85%] top-[40%] w-[36rem]" />
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <h2 className={`reveal text-center text-[clamp(1.8rem,5vw,3.25rem)] text-white ${display}`}>{p.benefitsTitle}</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.benefits.map((b, i) => (
              <div key={b.title} className="reveal relative rounded-2xl border border-gold/30 bg-white/[0.02] p-7 transition hover:border-gold">
                <span className="gold-text absolute right-6 top-5 font-display text-3xl font-bold opacity-60">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={b.icon} className="h-9 w-9 text-gold" />
                <h3 className="mt-5 font-display text-xl font-bold uppercase text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PriceCard price={p.price} extra={p.limit} cta={t.hero.register} />

      {/* Онлайн сургалт */}
      <section className={`${section} bg-[#080707] py-20 sm:py-28`}>
        <Glow className="left-[15%] top-[50%] w-[36rem]" />
        <Grain />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
          <div className="reveal">
            <Icon name="headset" className="h-10 w-10 text-gold" />
            <h2 className={`mt-5 text-[clamp(2rem,6vw,4rem)] text-white ${display}`}>{p.online.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">{p.online.text}</p>
          </div>
          <ul className="reveal divide-y divide-gold/15 border-y border-gold/15">
            {p.online.items.map((item) => (
              <li key={item} className="flex items-center gap-4 py-5">
                <span className="gold-bg grid h-7 w-7 shrink-0 place-items-center rounded-full text-black">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-base text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${section} bg-[#070605] py-20 sm:py-28`}>
        <Glow className="left-[15%] top-[30%] w-[36rem]" />
        <Grain />
        <Programs />
      </section>

      <section className={`${section} bg-[#080707] py-20 sm:py-28`}>
        <Glow className="left-[10%] top-[60%] w-[36rem]" />
        <Grain />
        <Schedule />
      </section>

      <Cta />
    </>
  );
}

/* /system */
export function SystemView() {
  const { t } = useLang();
  const p = t.pages.system;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} text={p.text} />

      <section className={`${section} bg-[#070605] py-20 sm:py-28`}>
        <Glow className="left-[80%] top-[40%] w-[36rem]" />
        <Grain />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <p className={`reveal ${eyebrow}`}>{p.pillarsTitle}</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.pillars.map((x) => (
              <div key={x.title} className="reveal rounded-2xl border border-gold/30 bg-white/[0.02] p-7 transition hover:border-gold">
                <Icon name={x.icon} className="h-9 w-9 text-gold" />
                <h3 className="mt-5 font-display text-2xl font-bold uppercase text-white">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${section} bg-[#080707] py-20 sm:py-28`}>
        <Grain />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className={`reveal text-[clamp(2rem,6vw,4rem)] text-white ${display}`}>{p.stepsTitle}</h2>
          <ol className="mt-10 divide-y divide-gold/15 border-y border-gold/15">
            {p.steps.map((s, i) => (
              <li key={s.title} className="reveal flex items-baseline gap-6 py-6">
                <span className="gold-text w-12 shrink-0 font-display text-4xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-display text-xl font-bold uppercase text-white">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60 sm:text-base">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PriceCard price={p.price} cta={p.buy} icon="layers" />

      <Cta />
    </>
  );
}

/* /shop */
type Product = (typeof products)[number];

function ProductCard({ product }: { product: Product }) {
  const { lang, t } = useLang();
  const p = t.pages.shop;
  const info = product[lang];
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [qty, setQty] = useState(1);

  const message = [
    p.messageIntro,
    `${info.name}${size ? ` — ${p.size}: ${size}` : ""} — ${p.qty}: ${qty}`,
  ].join("\n");
  const messengerHref = `${orderMessenger}${orderMessenger.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;

  return (
    <div className="reveal flex flex-col overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-b from-[#16120a] to-[#0a0907]">
      <div className="relative aspect-square bg-[radial-gradient(ellipse_at_center,#2a2214,#0a0907)]">
        {product.image ? (
          <Image src={product.image} alt={info.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
        ) : (
          <div className="grid h-full place-items-center">
            <Icon name={product.category === "merch" ? "bag" : "dumbbell"} className="h-20 w-20 text-gold/30" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-bold uppercase leading-tight text-white">{info.name}</h3>
        <p className="text-sm leading-relaxed text-white/60">{info.text}</p>
        <p className="gold-text font-display text-2xl font-bold">
          {product.price ? `${product.price.toLocaleString("en-US")}₮` : <span className="text-base text-white/40 [-webkit-text-fill-color:currentColor]">{p.noPrice}</span>}
        </p>

        {product.sizes.length > 0 && (
          <div>
            <p className="text-xs uppercase tracking-wider text-white/50">{p.size}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  aria-pressed={size === s}
                  className={`h-9 min-w-10 rounded-full border px-3 text-sm font-semibold transition ${
                    size === s ? "gold-bg border-transparent text-black" : "border-gold/40 text-white/80 hover:border-gold"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-3">
          <p className="text-xs uppercase tracking-wider text-white/50">{p.qty}</p>
          <div className="flex items-center rounded-full border border-gold/40">
            <button type="button" aria-label="-" onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-9 w-9 text-lg text-gold">−</button>
            <span className="w-6 text-center text-sm font-semibold text-white">{qty}</span>
            <button type="button" aria-label="+" onClick={() => setQty((q) => Math.min(20, q + 1))} className="h-9 w-9 text-lg text-gold">+</button>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-3">
          {orderMessenger && (
          <a
            href={messengerHref}
            target="_blank"
            rel="noreferrer"
            className="gold-bg inline-flex h-12 items-center justify-center gap-2 rounded-full text-sm font-bold uppercase tracking-wide text-black transition hover:brightness-110"
          >
            <Icon name="mail" className="h-4 w-4" />
            {p.order}
          </a>
          )}
          {orderInstagram && (
            <a
              href={orderInstagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/60 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-gold/10"
            >
              {p.instagram}
            </a>
          )}
          {orderPhone && (
            <a
              href={`tel:${orderPhone}`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-gold/60 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-gold/10"
            >
              {p.call}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ShopView() {
  const { t } = useLang();
  const p = t.pages.shop;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} text={p.text} />
      {(["merch", "gear"] as const).map((cat, idx) => (
        <section key={cat} className={`${section} ${idx ? "bg-[#080707]" : "bg-[#070605]"} py-16 sm:py-24`}>
          <Glow className={`${idx ? "left-[85%]" : "left-[15%]"} top-1/2 w-[36rem]`} />
          <Grain />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
            <h2 className={`reveal text-[clamp(1.8rem,5vw,3.25rem)] text-white ${display}`}>{p.categories[cat]}</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.filter((x) => x.category === cat).map((x) => (
                <ProductCard key={x.id} product={x} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className={`${section} bg-[#070606] py-16 sm:py-24`}>
        <Grain />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className={`reveal text-[clamp(1.8rem,5vw,3rem)] text-white ${display}`}>{p.howTitle}</h2>
          <ol className="mt-8 divide-y divide-gold/15 border-y border-gold/15">
            {p.how.map((h, i) => (
              <li key={h} className="reveal flex items-baseline gap-6 py-5">
                <span className="gold-text w-10 shrink-0 font-display text-3xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-base text-white/75">{h}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

/* /contact */
export function ContactView() {
  const { t } = useLang();
  const p = t.pages.contact;
  const email = contactHref.replace("mailto:", "");
  const card = "reveal flex flex-col gap-3 rounded-2xl border border-gold/30 bg-white/[0.02] p-7 transition hover:border-gold";
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} text={p.text} />
      <section className={`${section} bg-[#070605] py-20 sm:py-28`}>
        <Grain />
        <div className="relative mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <a href={contactHref} className={card}>
            <Icon name="mail" className="h-8 w-8 text-gold" />
            <p className={eyebrow}>{p.email}</p>
            <p className="break-all text-lg font-semibold text-white">{email}</p>
          </a>
          <a href={`tel:+976${phone}`} className={card}>
            <Icon name="phone" className="h-8 w-8 text-gold" />
            <p className={eyebrow}>{p.phone}</p>
            <p className="text-lg font-semibold text-white">{phone.replace(/(\d{4})(\d{4})/, "$1-$2")}</p>
          </a>
          <div className={card}>
            <Icon name="users" className="h-8 w-8 text-gold" />
            <p className={eyebrow}>{p.social}</p>
            <ul className="space-y-1 text-lg font-semibold text-white">
              {socials.filter((s) => s.label !== "Email").map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="transition hover:text-gold">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <a href={schedulePlace} target="_blank" rel="noreferrer" className={card}>
            <Icon name="pin" className="h-8 w-8 text-gold" />
            <p className={eyebrow}>{p.location}</p>
            <p className="text-lg font-semibold text-white">{t.schedule.map}</p>
          </a>
        </div>
      </section>
      <Cta />
    </>
  );
}

type Price = { title: string; label: string; amount: string; per: string; note: string };

/* Төлбөрийн карт — /training, /system */
function PriceCard({ price, extra, cta, icon = "userPlus" }: { price: Price; extra?: string; cta: string; icon?: string }) {
  return (
    <section className={`${section} bg-[#070606] py-20 sm:py-28`}>
      <Glow className="left-1/2 top-1/2 w-[36rem]" />
      <Grain />
      <div className="relative mx-auto max-w-md px-4 sm:px-6">
        <h2 className={`reveal text-center text-[clamp(1.8rem,5vw,3.25rem)] text-white ${display}`}>{price.title}</h2>
        <div className="reveal mt-10 rounded-2xl border border-gold/60 bg-gradient-to-b from-[#16120a] to-[#0a0907] p-8 text-center shadow-[0_0_40px_rgba(212,165,60,0.18)]">
          <p className={eyebrow}>{price.label}</p>
          <p className="mt-4 flex items-baseline justify-center gap-2">
            <span className="gold-text font-display text-6xl font-bold sm:text-7xl">{price.amount}</span>
            {price.per && <span className="text-base text-white/60">{price.per}</span>}
          </p>
          <p className="mt-3 text-sm text-white/50">{price.note}</p>
          {extra && <p className="mt-4 text-sm font-semibold text-gold">{extra}</p>}
          <div className="mt-8 flex justify-center">
            <GoldButton href={contactHref} icon={icon}>{cta}</GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const { t } = useLang();
  return (
    <section className={`${section} bg-[#070606] py-20 sm:py-28`}>
      <div aria-hidden="true" className="sparks pointer-events-none absolute inset-0 opacity-70" />
      <Glow className="left-1/2 top-1/2 w-[40rem]" />
      <Grain />
      <div className="reveal relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className={`text-balance text-[clamp(2rem,6vw,4.5rem)] text-white ${display}`}>{t.closing.title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/60">{t.closing.text}</p>
        <div className="mt-10 flex justify-center">
          <GoldButton href={contactHref} icon="userPlus">{t.hero.register}</GoldButton>
        </div>
      </div>
    </section>
  );
}
