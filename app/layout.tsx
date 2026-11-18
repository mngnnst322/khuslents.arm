import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Manrope, Oswald } from "next/font/google";
import "./globals.css";
import Shell from "./shell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["500"],
  style: ["italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel-face",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export const metadata: Metadata = {
  title: { default: "KHUSLENTS.ARM | Гар барилдаан", template: "%s | KHUSLENTS.ARM" },
  description: "Гар барилдааны бэлтгэл, тэмцээн, рейтинг — Монголд.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="mn"
      className={`${manrope.variable} ${oswald.variable} ${cormorant.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
