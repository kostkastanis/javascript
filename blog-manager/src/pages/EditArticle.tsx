import { useParams, useNavigate } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';
import ArticleForm from '../components/ArticleForm';
import type { Article } from '../types/article';

const EditArticle = () => {
  const { id } = useParams<{ id: string }>();
  const { articles, updateArticle } = useArticles();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === id);

  if (!article) return <p>Article not found</p>;

  const handleSubmit = (updatedArticle: Article) => {
    updateArticle(updatedArticle);
    navigate('/articles');
  };

  return (
    <div>
      <h2>Edit Article</h2>
      <ArticleForm initialData={article} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditArticle;
