import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug["eid-al-fitr"];

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Eid al-Fitr – Date Calculator",
    description: "Live countdown and exact date for Eid al-Fitr.",
    alternates: { canonical: "https://datecalc.xyz/days-until-eid-al-fitr" },
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
