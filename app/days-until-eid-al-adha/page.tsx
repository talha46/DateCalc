import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug["eid-al-adha"];

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Eid al-Adha – Date Calculator",
    description: "Days until Eid al-Adha — live countdown to the festival of sacrifice. Dates are approximate and may vary by a day based on the Islamic lunar calendar.",
    alternates: { canonical: "https://datecalc.xyz/days-until-eid-al-adha" },
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
