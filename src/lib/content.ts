import { getCollection, type CollectionEntry } from 'astro:content';

export async function getBlogPosts(lang: 'en' | 'ru') {
  const collection = lang === 'en' ? 'blog_en' : 'blog_ru';
  try {
    const posts = await getCollection(collection as 'blog_en');
    return posts.sort(
      (a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
    );
  } catch {
    return [];
  }
}

export async function getPortfolioCases() {
  try {
    return await getCollection('portfolio');
  } catch {
    return [];
  }
}

export type BlogPost = CollectionEntry<'blog_en'>;
export type PortfolioCase = CollectionEntry<'portfolio'>;
