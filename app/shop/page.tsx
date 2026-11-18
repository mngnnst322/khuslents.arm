import type { Metadata } from "next";
import { ShopView } from "../views";

export const metadata: Metadata = { title: "Дэлгүүр" };

export default function Page() {
  return <ShopView />;
}
