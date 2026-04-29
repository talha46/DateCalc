"use client";

import Link from "next/link";
import type { ToolLink } from "@/lib/toolLinks";

type InternalToolsSectionProps = {
  title: string;
  tools: ToolLink[];
  compact?: boolean;
};

export default function InternalToolsSection({ title, tools, compact = false }: InternalToolsSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold text-teal-700">{title}</h2>
      <div className={`grid gap-4 ${compact ? "md:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"}`}>
        {tools.map((tool) => (
          <Link
            key={tool.key}
            href={tool.href}
            className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-teal-300 hover:bg-teal-50/30"
          >
            <h3 className={`font-semibold text-teal-700 ${compact ? "text-base" : "text-lg"}`}>{tool.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
