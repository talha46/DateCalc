import Link from "next/link";

type BlogLink = {
  href: string;
  label: string;
};

type BlogReadingLinksProps = {
  links: BlogLink[];
};

export default function BlogReadingLinks({ links }: BlogReadingLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="mt-6" aria-labelledby="further-reading-heading">
      <h2 id="further-reading-heading" className="mb-3 text-base font-semibold text-gray-700">
        Further reading
      </h2>

      <ul className="space-y-1 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-teal-700 hover:text-teal-900 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
