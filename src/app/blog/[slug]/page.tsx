// src/app/blog/[slug]/page.tsx

import { getPostData, getAllPostIds, Post } from '@/lib/posts'; // 1. Import Post type
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// ... generateStaticParams and generateMetadata functions are fine ...

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let postData: Post; // 2. Use the Post type here
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
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

        {/* ... (CTA section remains the same) ... */}
      </div>
    </article>
  );
}