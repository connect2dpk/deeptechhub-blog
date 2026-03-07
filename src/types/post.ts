export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  readingTime: string;
  content: string;
  tags?: string[];
  cover?: string;
  featured?: boolean;
}

export interface PostMeta {
  title: string;
  description: string;
  publishedAt: string;
  author: string;
  category: string;
  tags?: string[];
  cover?: string;
  featured?: boolean;
}