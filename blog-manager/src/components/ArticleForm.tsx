import { useState, useEffect } from 'react';
import type { Article } from '../types/article';

interface Props {
  initialData?: Article;
  onSubmit: (article: Article) => void;
}

const ArticleForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
    author: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) setForm({ ...initialData });
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.content || !form.category || !form.author) {
      setError('All fields are required');
      return;
    }
    const article: Article = {
      id: initialData?.id || crypto.randomUUID(),
      createdAt: initialData?.createdAt || new Date().toISOString(),
      ...form
    };
    onSubmit(article);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      <input type="text" placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input type="text" placeholder="Author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
      <textarea placeholder="Content" value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={5} />
      <button type="submit">{initialData ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ArticleForm;
