import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/post';
import { formatDate } from '@/lib/posts';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-blue-500/10 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <Image
          src={post.cover || '/images/placeholder-tile.jpg'}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase">
            {post.category}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
            {post.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={post.publishedAt}>
            {formatDate(post.publishedAt)}
          </time>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
}