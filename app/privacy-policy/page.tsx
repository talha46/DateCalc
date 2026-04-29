import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy for DateCalc.tools.",
  alternates: { canonical: "https://datecalc.xyz/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      <h1 className="mb-3 text-3xl font-bold text-teal-700">Privacy Policy</h1>
      <p className="text-gray-700">
        This website does not require login and does not store your calculator inputs on a server.
      </p>
    </CalculatorLayout>
  );
}
