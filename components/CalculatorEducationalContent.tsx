import FaqSection, { type FaqItem } from "@/components/FaqSection";

export type EducationalSection = {
  heading: string;
  paragraphs: readonly string[];
};

export type CalculatorEducationalContentProps = {
  howToIntro: string;
  steps: readonly [string, string, string];
  aboutParagraphs: readonly string[];
  /** Optional H2 blocks between About and FAQ (use cases, examples, domain notes) */
  extraSections?: readonly EducationalSection[];
  faqItems: readonly FaqItem[];
  /** Inserted after extra sections and before FAQ — e.g. days-from-today or holiday-only blocks */
  children?: React.ReactNode;
};

export default function CalculatorEducationalContent({
  howToIntro,
  steps,
  aboutParagraphs,
  extraSections,
  faqItems,
  children,
}: CalculatorEducationalContentProps) {
  const faqList: FaqItem[] = [...faqItems];

  return (
    <div className="mt-10 space-y-10">
      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-700">How to Use This Calculator</h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{howToIntro}</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
          <li>{steps[0]}</li>
          <li>{steps[1]}</li>
          <li>{steps[2]}</li>
        </ol>
      </section>

      <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-teal-700">About This Calculator</h2>
        {aboutParagraphs.map((paragraph, index) => (
          <p key={index} className={index === 0 ? "mt-4 text-sm leading-relaxed text-gray-700" : "mt-3 text-sm leading-relaxed text-gray-700"}>
            {paragraph}
          </p>
        ))}
      </section>

      {extraSections?.map((section) => (
        <section key={section.heading} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-700">{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "mt-4 text-sm leading-relaxed text-gray-700" : "mt-3 text-sm leading-relaxed text-gray-700"}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {children}

      <FaqSection items={faqList} />
    </div>
  );
}
