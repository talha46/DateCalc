import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";

export const metadata: Metadata = {
  title: "About DateCalc",
  description:
    "DateCalc is a free collection of browser-based date and age calculators. No account required. Learn what the site offers and how it works.",
  alternates: { canonical: "https://datecalc.xyz/about" },
};

export default function AboutPage() {
  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <h1 className="mb-4 text-3xl font-bold text-teal-700">About DateCalc</h1>

      <p className="mb-4 text-gray-700">
        DateCalc is a free collection of date and age calculators at{" "}
        <strong>datecalc.xyz</strong>. Every calculation runs directly in your
        browser — no account, no registration, and no personal data is sent to
        a server.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">
        What the site offers
      </h2>
      <p className="mb-3 text-gray-700">
        DateCalc covers the most common date-related questions people need to
        answer quickly and accurately:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6 text-gray-700">
        <li>
          <Link href="/" className="text-teal-700 hover:underline">
            Age Calculator
          </Link>{" "}
          — exact age in years, months, days, and hours from any date of birth
        </li>
        <li>
          <Link
            href="/date-difference-calculator"
            className="text-teal-700 hover:underline"
          >
            Date Difference Calculator
          </Link>{" "}
          — total days, weeks, months, or years between two dates
        </li>
        <li>
          <Link
            href="/business-days-calculator"
            className="text-teal-700 hover:underline"
          >
            Business Days Calculator
          </Link>{" "}
          — working days between dates, with weekends excluded
        </li>
        <li>
          <Link
            href="/birthday-calculator"
            className="text-teal-700 hover:underline"
          >
            Birthday Calculator
          </Link>{" "}
          — day of the week you were born, zodiac sign, and upcoming birthday
        </li>
        <li>
          <Link href="/days-until" className="text-teal-700 hover:underline">
            Days Until
          </Link>{" "}
          — live countdown to any future date or event
        </li>
        <li>
          <Link
            href="/add-days-to-date"
            className="text-teal-700 hover:underline"
          >
            Add Days to Date
          </Link>{" "}
          — find the date that falls a set number of days from any starting
          point
        </li>
        <li>
          <Link
            href="/leap-year-calculator"
            className="text-teal-700 hover:underline"
          >
            Leap Year Calculator
          </Link>{" "}
          — check whether any year is a leap year and find the next occurrence
        </li>
      </ul>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">
        Who the tools are for
      </h2>
      <p className="mb-4 text-gray-700">
        The calculators are built for everyday use: checking a contract
        deadline, counting down to an event, verifying someone&apos;s age for a
        form, or settling a quick date question without opening a spreadsheet.
        All tools are free and require no sign-up.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">
        A note on accuracy
      </h2>
      <p className="text-gray-700">
        Results use standard Gregorian calendar arithmetic and are intended for
        everyday reference. For decisions involving legal deadlines,
        immigration, financial contracts, medical timelines, or employment
        notices, verify the result independently or consult a qualified
        professional.
      </p>
    </CalculatorLayout>
  );
}
