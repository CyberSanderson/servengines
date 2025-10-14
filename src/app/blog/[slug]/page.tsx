// src/app/blog/[slug]/page.tsx

import { getPostData, getAllPostIds } from '@/lib/posts';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// generateStaticParams IS NEEDED for Next.js to know which pages to build
export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({ slug: path.params.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const postData = await getPostData(params.slug);
    return {
      title: postData.title,
      description: postData.excerpt,
    };
  } catch { // We don't need to use the 'error' variable here
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let postData;
  try {
    postData = await getPostData(params.slug);
  } catch { // We don't need to use the 'error' variable here
    notFound();
  }
  
  return (
    <article className="bg-white py-12">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{postData.title}</h1>
          <p className="mt-4 text-gray-500">
            By {postData.author} on {new Date(postData.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>
        
        {postData.image && (
          <div className="relative my-8 h-96 w-full max-w-5xl mx-auto">
            <Image
              src={postData.image}
              alt={postData.title}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        )}

        <div 
          className="prose lg:prose-xl max-w-4xl mx-auto" 
          dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} 
        />

        {/* The CTA now uses a Link component, so it must be imported */}
        <div className="text-center mt-16 p-8 bg-slate-50 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900">Ready to Build Your Digital Growth Engine?</h3>
          <p className="mt-2 text-gray-600">
            A powerful website or an AI chatbot can transform your business. 
            If you&apos;re ready to see real results, let&apos;s have a conversation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}