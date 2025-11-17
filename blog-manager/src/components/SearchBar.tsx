// src/components/SearchBar.tsx
import { useState, useEffect } from 'react';
import type { Article } from '../types/article';

interface SearchBarProps {
  articles: Article[];
  onFilter: (filtered: Article[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ articles, onFilter }) => {
  const [titleTerm, setTitleTerm] = useState('');
  const [categoryTerm, setCategoryTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(titleTerm.toLowerCase()) &&
      article.category.toLowerCase().includes(categoryTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    onFilter(sorted);
  }, [titleTerm, categoryTerm, sortOrder, articles, onFilter]);

  const handleSortToggle = () => setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));

  return (
    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search by title..."
        value={titleTerm}
        onChange={e => setTitleTerm(e.target.value)}
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Filter by category..."
        value={categoryTerm}
        onChange={e => setCategoryTerm(e.target.value)}
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <button onClick={handleSortToggle} style={{ padding: '0.5rem' }}>
        {sortOrder === 'asc' ? 'Oldest first' : 'Newest first'}
      </button>
    </div>
  );
};

export default SearchBar;