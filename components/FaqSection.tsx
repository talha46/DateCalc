export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
  className?: string;
};

export default function FaqSection({ items, className = "" }: FaqSectionProps) {
  return (
    <section className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <h2 className="text-xl font-semibold text-teal-700">Frequently Asked Questions</h2>
      <p className="mt-2 text-sm text-gray-600">
        Plain English answers shown directly on this page for quick reading.
      </p>
      <dl className="mt-5 space-y-5">
        {items.map((item) => (
          <div key={item.question} className="border-b border-gray-100 pb-5 last:border-b-0 last:pb-0">
            <dt className="text-sm font-semibold text-gray-900">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-gray-700">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
