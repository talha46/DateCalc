import Link from "next/link";
import { addDays, differenceInCalendarDays, differenceInMonths, endOfYear, format } from "date-fns";
import AdSenseUnit from "@/components/AdSenseUnit";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";
import FaqJsonLd from "@/components/FaqJsonLd";

type DaysFromTodayCalculatorProps = {
  days: number;
};

export default function DaysFromTodayCalculator({ days }: DaysFromTodayCalculatorProps) {
  const startDate = new Date();
  const resultDate = addDays(startDate, days);
  const daysRemainingInYear = differenceInCalendarDays(endOfYear(resultDate), resultDate);
  const weeksFromToday = days / 7;
  const monthsFromToday = differenceInMonths(resultDate, startDate);

  const faq = [
    {
      question: `What date is ${days} days from today?`,
      answer: `${days} days from today lands on ${format(resultDate, "EEEE, MMMM d, yyyy")}.`,
    },
    {
      question: `How many weeks are in ${days} days?`,
      answer: `${days} days is ${weeksFromToday.toFixed(2)} weeks.`,
    },
    {
      question: `Can I calculate ${days} days from a custom date?`,
      answer: "Yes. Use the secondary calculator below to pick a start date and add days instantly.",
    },
  ];

  return (
    <CalculatorLayout>
      <FaqJsonLd items={faq} />
      <Breadcrumbs items={[{ label: `${days} Days From Today`, href: `/${days}-days-from-today` }]} />

      <h1 className="mb-4 text-3xl font-bold text-teal-700">{days} Days From Today</h1>

      <section className="rounded-xl border border-teal-200 bg-teal-50/40 p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Resulting Date</p>
        <p className="mt-2 text-4xl font-bold text-teal-800">{format(resultDate, "EEEE, MMMM d, yyyy")}</p>
      </section>

      <section className="mt-6 grid gap-4 rounded-xl border border-gray-200 bg-gray-50 p-4 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Day of Week</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{format(resultDate, "EEEE")}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Days Remaining in Year</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{daysRemainingInYear}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Weeks From Today</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{weeksFromToday.toFixed(2)}</p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4">
          <p className="text-sm text-gray-500">Months From Today</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{monthsFromToday}</p>
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-teal-700">Secondary Calculator</h2>
        <p className="mt-2 text-sm text-gray-600">Pick any start date and add days with the full tool.</p>
        <div className="mt-3">
          <Link href="/add-days-to-date" className="text-teal-700 underline underline-offset-2 hover:text-teal-900">
            Open Add Days to Date Calculator
          </Link>
        </div>
      </section>

      <div className="mt-8">
        <AdSenseUnit id="adsense-below-result" />
      </div>

      <section className="mt-8 rounded-xl border border-gray-200 p-4">
        <h2 className="text-xl font-semibold text-teal-700">More Date Tools</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link href="/add-days-to-date" className="text-teal-700 underline underline-offset-2 hover:text-teal-900">
            Add Days to Date Calculator
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
