import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "90 Days From Today – Date Calculator",
    description: "90 days from today calculator — find the exact date and day of week, with context on how 90-day windows apply to Schengen visas, trial periods, and legal deadlines.",
    alternates: { canonical: "https://datecalc.xyz/90-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={90} />;
}
