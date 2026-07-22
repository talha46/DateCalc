import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import CalculatorLayout from "@/components/CalculatorLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the DateCalc privacy policy. This site does not collect personal data or require registration.",
  alternates: { canonical: "https://datecalc.xyz/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <CalculatorLayout>
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      <h1 className="mb-3 text-3xl font-bold text-teal-700">Privacy Policy</h1>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">What information we collect</h2>
      <p className="mb-4 text-gray-700">
        DateCalc does not require registration and does not collect names, email addresses, or personally identifiable
        information. Date inputs entered into the calculators are processed entirely in your browser and are not
        transmitted to or stored on any server.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">Analytics</h2>
      <p className="mb-4 text-gray-700">
        This site uses Google Analytics 4 to understand aggregate usage patterns such as which pages are visited and
        which countries visitors come from. Google Analytics collects anonymised usage data using cookies. You can opt
        out using the Google Analytics opt-out browser add-on available at tools.google.com/dlpage/gaoptout.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">Advertising</h2>
      <p className="mb-4 text-gray-700">
        This site participates in Google AdSense, which may display advertisements and use cookies to serve ads based on
        prior visits to this or other websites. Google&apos;s use of advertising cookies enables it and its partners to
        serve ads based on your visit to this site. You can opt out of personalised advertising by visiting Google&apos;s
        Ads Settings at adssettings.google.com.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">Third-party links</h2>
      <p className="mb-4 text-gray-700">
        Pages on this site may link to external websites. DateCalc is not responsible for the privacy practices or
        content of those sites.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">Changes to this policy</h2>
      <p className="mb-4 text-gray-700">
        This privacy policy may be updated occasionally. The current version is available at datecalc.xyz/privacy-policy.
      </p>

      <h2 className="mb-3 mt-6 text-xl font-semibold text-gray-800">Contact</h2>
      <p className="mb-4 text-gray-700">For questions about this privacy policy, visit datecalc.xyz.</p>
    </CalculatorLayout>
  );
}
