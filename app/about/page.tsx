import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about DateCalc.tools and our free date calculators.",
  alternates: { canonical: "https://datecalc.xyz/about" },
};

export default function AboutPage() {
  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <h1 className="mb-3 text-3xl font-bold text-teal-700">About DateCalc.tools</h1>
      <p className="text-gray-700">
        DateCalc.tools is a simple collection of fast, free date calculators built for everyday use.
      </p>
    </CalculatorLayout>
  );
}
