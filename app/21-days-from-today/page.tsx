import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "21 Days From Today – Date Calculator",
    description: "21 days from today — exactly three weeks from today. See the exact date, with context on medication schedules, three-week agile iterations, and educator module planning.",
    alternates: { canonical: "https://datecalc.xyz/21-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={21} />;
}
