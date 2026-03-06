import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog - DeepTechHub',
  description: 'All articles about Java, Spring Boot, and backend development.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(p => p.category))];

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          All Articles
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {posts.length} articles on Java, Spring Boot, and backend development.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition text-sm font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No articles found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}