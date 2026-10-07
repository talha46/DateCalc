import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "7 Days From Today – Date Calculator",
    description: "7 days from today — see the exact date and weekday. One week forward from today, with context on trial periods, shipping guarantees, and weekly sprint checkpoints.",
    alternates: { canonical: "https://datecalc.xyz/7-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={7} />;
}
