import { Post } from '@/types/post';

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function extractExcerpt(content: string, length: number = 160): string {
  return content.replace(/\[.*?\]\(.*?\)/g, '').slice(0, length) + '...';
}