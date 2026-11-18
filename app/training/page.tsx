import type { Metadata } from "next";
import { TrainingView } from "../views";

export const metadata: Metadata = { title: "Сургалт" };

export default function Page() {
  return <TrainingView />;
}
