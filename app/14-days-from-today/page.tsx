import type { Metadata } from "next";
import DaysFromTodayCalculator from "@/components/DaysFromTodayCalculator";

export const dynamic = "force-dynamic";

export function generateMetadata(): Metadata {
  return {
    title: "14 Days From Today – Date Calculator",
    description: "14 days from today — exactly two weeks from today. See the exact date and weekday, with context on pay cycles, biweekly agile milestones, and rental approval timelines.",
    alternates: { canonical: "https://datecalc.xyz/14-days-from-today" },
  };
}

export default function Page() {
  return <DaysFromTodayCalculator days={14} />;
}
