import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { Post, PostMeta } from '@/types/post';
import { calculateReadingTime } from '@/lib/posts';

const postsDirectory = join(process.cwd(), 'content', 'blog');

export async function getPost(slug: string): Promise<Post> {
  const filePath = join(postsDirectory, `${slug}.mdx`);
  const fileContent = await readFile(filePath, 'utf-8');

  const { data, content } = matter(fileContent);

  return {
    slug,
    content,
    readingTime: calculateReadingTime(content),
    ...(data as PostMeta),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await readdir(postsDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace('.mdx', '');
        const post = await getPost(slug);
        return post;
      })
  );

  // Sort by date descending
  return posts.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}