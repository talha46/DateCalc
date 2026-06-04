import Breadcrumbs from "@/components/Breadcrumbs";
import { format } from "date-fns";

type BlogArticleLayoutProps = {
  title: string;
  publishedAt: string;
  slug: string;
  children: React.ReactNode;
};

export default function BlogArticleLayout({ title, publishedAt, slug, children }: BlogArticleLayoutProps) {
  const formattedDate = format(new Date(publishedAt), "MMMM d, yyyy");

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: title, href: `/blog/${slug}` },
        ]}
      />
      <header className="mb-8 border-b border-gray-200 pb-6">
        <time dateTime={publishedAt} className="text-sm text-gray-500">
          {formattedDate}
        </time>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-teal-700">{title}</h1>
      </header>
      <article className="article-body text-base leading-relaxed text-gray-800 [&_a]:text-teal-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-900 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-teal-700 [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_li]:mt-1 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </article>
    </div>
  );
}
