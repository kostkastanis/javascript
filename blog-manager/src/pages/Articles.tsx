// src/pages/Articles.tsx
import { useState } from 'react';
import { useArticles } from '../hooks/useArticles';
import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';

const Articles = () => {
  const { articles } = useArticles();
  const [filteredArticles, setFilteredArticles] = useState(articles);

  return (
    <div>
      <h2>All Articles</h2>
      <SearchBar articles={articles} onFilter={setFilteredArticles} />
      <ArticleList articles={filteredArticles} />
    </div>
  );
};

export default Articles;