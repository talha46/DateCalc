import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "60 Days From Today – Date Calculator",
    description: "60 days from today calculator — find the exact date and weekday, plus how 60-day periods apply to visa rules, insurance waiting periods, and notice deadlines.",
    alternates: { canonical: "https://datecalc.xyz/60-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={60} />;
}
