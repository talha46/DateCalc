import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug.halloween;

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Halloween – Date Calculator",
    description: "Days until Halloween — live countdown to October 31. See the exact date and weekday to help plan costumes, candy orders, and decoration timelines.",
    alternates: { canonical: "https://datecalc.xyz/days-until-halloween" },
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
