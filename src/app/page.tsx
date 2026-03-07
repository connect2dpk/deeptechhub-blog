import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'DeepTechHub - Java, Spring Boot & Backend Development',
  description: 'Explore in-depth articles on Java, Spring Boot, microservices, system design, and modern backend development. Written by developers, for developers.',
  keywords: 'Java, Spring Boot, backend development, microservices, system design, programming tutorials',
  openGraph: {
    title: 'DeepTechHub - Java, Spring Boot & Backend Development',
    description: 'Explore in-depth articles on Java, Spring Boot, microservices, system design, and modern backend development.',
    type: 'website',
    url: 'https://deeptechhub.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeepTechHub - Java, Spring Boot & Backend Development',
    description: 'Explore in-depth articles on Java, Spring Boot, microservices, system design, and modern backend development.',
  },
};

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter(post => post.featured).slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 mb-16">
        <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Deep Dive into Tech
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed">
          Explore in-depth articles on Java, Spring Boot, microservices, cloud infrastructure, system design, and modern backend development.
        </p>
        <div className="flex gap-4">
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Read All Articles
          </Link>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-12 text-center mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
          Get notified when new articles are published.
        </p>
        <form className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}