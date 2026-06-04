import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticleLayout from "@/components/BlogArticleLayout";
import { blogArticleComponents } from "@/lib/blog/articles";
import { blogPostBySlug, blogPosts } from "@/lib/blog/posts";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = blogPostBySlug[params.slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://datecalc.xyz/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPostBySlug[params.slug];
  const Article = blogArticleComponents[params.slug];

  if (!post || !Article) notFound();

  return (
    <BlogArticleLayout title={post.title} publishedAt={post.publishedAt} slug={post.slug}>
      <Article />
    </BlogArticleLayout>
  );
}
