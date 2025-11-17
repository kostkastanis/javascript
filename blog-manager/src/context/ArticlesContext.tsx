import { createContext } from 'react';
import type { Article } from '../types/article';

interface ArticlesContextProps {
  articles: Article[];
  addArticle: (article: Article) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: string) => void;
}

export const ArticlesContext = createContext<ArticlesContextProps | undefined>(undefined);
