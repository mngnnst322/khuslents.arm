import type { Metadata } from "next";
import { ContactView } from "../views";

export const metadata: Metadata = { title: "Холбоо барих" };

export default function Page() {
  return <ContactView />;
}
