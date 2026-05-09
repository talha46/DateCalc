import FaqSection, { type FaqItem } from "@/components/FaqSection";

export type CalculatorEducationalContentProps = {
  howToIntro: string;
  steps: readonly [string, string, string];
  aboutParagraphs: readonly [string, string, string];
  faqItems: readonly [FaqItem, FaqItem, FaqItem];
  /** Inserted after “About” and before FAQ — e.g. days-from-today or holiday-only sections */
  children?: React.ReactNode;
};

export default function CalculatorEducationalContent({
  howToIntro,
  steps,
  aboutParagraphs,
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
        <p className="mt-4 text-sm leading-relaxed text-gray-700">{aboutParagraphs[0]}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{aboutParagraphs[1]}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700">{aboutParagraphs[2]}</p>
      </section>

      {children}

      <FaqSection items={faqList} />
    </div>
  );
}
