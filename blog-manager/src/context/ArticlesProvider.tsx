import { useState, useEffect } from 'react';
import type { Article } from '../types/article';
import { getArticlesFromStorage, saveArticlesToStorage } from '../utils/localStorage';
import { ArticlesContext } from './context';

export const ArticlesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  // Charger depuis localStorage
  useEffect(() => {
    setArticles(getArticlesFromStorage());
  }, []);

  // Sauvegarder automatiquement dans localStorage
  useEffect(() => {
    saveArticlesToStorage(articles);
  }, [articles]);

  const addArticle = (article: Article) => {
    const newArticle = { ...article, id: crypto.randomUUID() };
    setArticles(prev => [...prev, newArticle]); // ← important d'utiliser prev
  };

  const updateArticle = (article: Article) =>
    setArticles(prev => prev.map(a => (a.id === article.id ? article : a)));

  const deleteArticle = (id: string) =>
    setArticles(prev => prev.filter(a => a.id !== id));

  return (
    <ArticlesContext.Provider value={{ articles, addArticle, updateArticle, deleteArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
};
