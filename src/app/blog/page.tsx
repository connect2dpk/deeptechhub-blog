'use client';

import BlogCard from '@/components/BlogCard';
import { Post } from '@/types/post';
import { useState, useEffect } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/posts');
      const allPosts: Post[] = await response.json();
      setPosts(allPosts);
      const uniqueCategories = [...new Set(allPosts.map(p => p.category))];
      setCategories(uniqueCategories);
    }
    fetchPosts();
  }, []);

  const filteredPosts = selectedCategory ? posts.filter(post => post.category === selectedCategory) : posts;

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          All Articles
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          {filteredPosts.length} articles on Java, Spring Boot, and backend development.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full border transition text-sm font-medium ${
            selectedCategory === null
              ? 'bg-blue-600 text-white border-blue-600'
              : 'border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition text-sm font-medium ${
              selectedCategory === category
                ? 'bg-blue-600 text-white border-blue-600'
                : 'border-gray-300 dark:border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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