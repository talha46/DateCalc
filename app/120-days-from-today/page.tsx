import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "120 Days From Today – Date Calculator",
    description: "See the exact date, weekday, and date breakdown for 120 days from today.",
    alternates: { canonical: "https://datecalc.xyz/120-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={120} />;
}
