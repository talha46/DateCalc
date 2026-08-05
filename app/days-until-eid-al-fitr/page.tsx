import type { Metadata } from "next";
import HolidayCountdown from "@/components/HolidayCountdown";
import { holidayConfigBySlug, getUpcomingHolidayDate } from "@/lib/programmaticPages";

const config = holidayConfigBySlug["eid-al-fitr"];

export function generateMetadata(): Metadata {
  return {
    title: "Days Until Eid al-Fitr – Date Calculator",
    description: "Days until Eid al-Fitr — live countdown to the festival marking the end of Ramadan. Dates are approximate and may shift by a day based on moon sighting.",
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
