import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug["new-year"];

export function generateMetadata(): Metadata {
  return {
    title: "Days Until New Year – Date Calculator",
    description: "Live countdown and exact date for New Year.",
    alternates: { canonical: "https://datecalc.xyz/days-until-new-year" },
  };
}

export default function Page() {
  return (
    <HolidayCountdown
      slug={config.slug}
      holidayName={config.name}
      targetDate={getUpcomingHolidayDate(config.slug)}
      isApproximate={config.isApproximate}
    />
  );
}
