// src/app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Servengines',
  description: 'Articles on web design, AI chatbots, and digital strategy for local businesses.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">The Servengines Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Insights on web design, AI automation, and digital growth strategies for ambitious local businesses.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-16">
          {allPosts.map(({ slug, title, date, excerpt, author }) => (
            <article key={slug} className="group relative flex flex-col items-start">
              <p className="text-sm text-gray-500">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                 <span className="mx-2">&middot;</span> 
                 <span>by {author}</span>
              </p>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 group-hover:text-indigo-600">
                <Link href={`/blog/${slug}`}>{title}</Link>
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">{excerpt}</p>
              <div className="mt-4">
                <Link href={`/blog/${slug}`} className="text-indigo-600 font-semibold hover:text-indigo-800">
                  Read More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
