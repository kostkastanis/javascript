import React from 'react';
import ArticleCard from './ArticleCard';
import type { Article } from '../types/article';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        articles.map(article => <ArticleCard key={article.id} article={article} />)
      )}
    </div>
  );
};

export default ArticleList;
