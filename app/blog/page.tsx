import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on age math, date differences, leap years, business days, and holiday countdowns—written to help you use DateCalc calculators with confidence.",
  alternates: { canonical: "https://datecalc.xyz/blog" },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-teal-700">DateCalc Blog</h1>
        <p className="mt-3 text-gray-700">
          Practical explainers on dates, deadlines, and age—so you know what the numbers mean before you plug them into a
          calculator.
        </p>
      </header>
      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li key={post.slug} className="rounded-xl border border-gray-200 bg-gray-50/60 p-5 transition hover:border-teal-200">
            <time dateTime={post.publishedAt} className="text-sm text-gray-500">
              {format(new Date(post.publishedAt), "MMMM d, yyyy")}
            </time>
            <h2 className="mt-2 text-xl font-semibold">
              <Link href={`/blog/${post.slug}`} className="text-teal-700 hover:text-teal-900">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-700">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-3 inline-block text-sm font-medium text-teal-700 underline underline-offset-2 hover:text-teal-900"
            >
              Read article
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
