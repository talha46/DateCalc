import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export function generateMetadata(): Metadata {
  return {
    title: "30 Days From Today – Date Calculator",
    description: "30 days from today calculator — see the exact resulting date, day of week, and how 30-day windows apply to return policies, trial periods, and contract deadlines.",
    alternates: { canonical: "https://datecalc.xyz/30-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={30} />;
}
