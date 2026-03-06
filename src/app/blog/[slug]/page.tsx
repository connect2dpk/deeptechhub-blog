import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost, getAllPosts } from '@/lib/mdx';
import { MDXComponents } from '@/components/MDXComponents';
import { formatDate, calculateReadingTime } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} - DeepTechHub`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug).catch(() => null);

  if (!post) {
    notFound();
  }

  const readingTime = post.readingTime;

  return (
    <article className="max-w-2xl mx-auto">
      {/* Back Button */}
      <Link
        href="/blog"
        className="inline-block text-blue-600 dark:text-blue-400 hover:underline mb-6"
      >
        ← Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {post.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {post.title}
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 border-t border-b border-gray-200 dark:border-gray-800 py-4">
          <time dateTime={post.publishedAt} className="flex items-center gap-2">
            <span className="font-semibold">Published:</span> {formatDate(post.publishedAt)}
          </time>
          <span className="flex items-center gap-2">
            <span className="font-semibold">Reading Time:</span> {readingTime}
          </span>
          <span className="flex items-center gap-2">
            <span className="font-semibold">Author:</span> {post.author}
          </span>
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={MDXComponents} />
      </div>

      {/* Related Articles CTA */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Enjoyed this article?
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Check out more articles or share this with your network.
        </p>
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Read More Articles
          </Link>
          <a
            href={`https://twitter.com/intent/tweet?text=Check out this article: ${post.title}&url=https://deeptechhub.dev/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 px-6 py-2 rounded-lg font-semibold transition"
          >
            Share on Twitter
          </a>
        </div>
      </div>
    </article>
  );
}