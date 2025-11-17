import { useArticles } from '../hooks/useArticles';
import { useNavigate } from 'react-router-dom';
import ArticleForm from '../components/ArticleForm';
import type { Article } from '../types/article';

const NewArticle = () => {
  const { addArticle } = useArticles();
  const navigate = useNavigate();

  const handleSubmit = (article: Article) => {
    addArticle(article);
    navigate('/articles');
  };

  return (
    <div>
      <h2>Create New Article</h2>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default NewArticle;
