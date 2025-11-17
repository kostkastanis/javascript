import type { Article } from '../types/article';

const STORAGE_KEY = 'blog_articles';

export const getArticlesFromStorage = (): Article[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveArticlesToStorage = (articles: Article[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
};
