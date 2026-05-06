import Link from "next/link";
import { differenceInCalendarDays, format } from "date-fns";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import HolidayCountdownTimer from "@/components/HolidayCountdownTimer";

type HolidayCountdownProps = {
  slug: string;
  holidayName: string;
  targetDate: Date;
  isApproximate?: boolean;
};

export default function HolidayCountdown({ slug, holidayName, targetDate, isApproximate = false }: HolidayCountdownProps) {
  const now = new Date();
  const daysLeft = Math.max(0, differenceInCalendarDays(targetDate, now));
  const formattedDate = format(targetDate, "EEEE, MMMM d, yyyy");

  const faq = [
    {
      question: `How many days until ${holidayName}?`,
      answer: `There are ${daysLeft} days until ${holidayName}.`,
    },
    {
      question: `What date is ${holidayName}?`,
      answer: `${holidayName} is on ${formattedDate}.`,
    },
    {
      question: `Does this ${holidayName} countdown update live?`,
      answer: "Yes. The countdown updates every second.",
    },
  ];

  return (
    <CalculatorLayout>
      <FaqJsonLd items={faq} />
      <Breadcrumbs items={[{ label: `Days Until ${holidayName}`, href: `/days-until-${slug}` }]} />

      <h1 className="mb-4 text-3xl font-bold text-teal-700">Days Until {holidayName}</h1>
      <p className="rounded-xl border border-teal-200 bg-teal-50/40 p-4 text-teal-900">
        {holidayName} is on <span className="font-semibold">{formattedDate}</span>.
      </p>
      {isApproximate ? (
        <p className="mt-3 text-sm text-amber-700">
          Islamic holiday dates use hardcoded 2026 estimates and may vary by local moon sighting.
        </p>
      ) : null}

      <HolidayCountdownTimer holidayName={holidayName} targetDateIso={targetDate.toISOString()} />

      <div className="mt-8">
        <AdSenseUnit id="adsense-below-result" />
      </div>

      <section className="mt-8 rounded-xl border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-teal-700">Related Date Tools</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/days-until" className="text-teal-700 underline underline-offset-2 hover:text-teal-900">
            Days Until Calculator
          </Link>
          <Link
            href="/date-difference-calculator"
            className="text-teal-700 underline underline-offset-2 hover:text-teal-900"
          >
            Date Difference Calculator
          </Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}
