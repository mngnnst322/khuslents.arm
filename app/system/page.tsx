import type { Metadata } from "next";
import { SystemView } from "../views";

export const metadata: Metadata = { title: "Бэлтгэлийн систем" };

export default function Page() {
  return <SystemView />;
}
