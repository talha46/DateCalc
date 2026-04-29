"use client";

import CopyButton from "@/components/CopyButton";

type ResultCardProps = {
  label: string;
  value: string;
  copyText: string;
};

export default function ResultCard({ label, value, copyText }: ResultCardProps) {
  return (
    <article className="min-h-[128px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-start justify-between gap-2">
        <p className="text-sm text-gray-600">{label}</p>
        <CopyButton value={copyText} />
      </div>
      <p className="text-2xl font-bold text-teal-700">{value}</p>
    </article>
  );
}
