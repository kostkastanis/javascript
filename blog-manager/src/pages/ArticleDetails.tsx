import { useParams, useNavigate } from 'react-router-dom';
import { useArticles } from '../hooks/useArticles';

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { articles, deleteArticle } = useArticles();
  const navigate = useNavigate();

  const article = articles.find(a => a.id === id);
  if (!article) return <p>Article not found.</p>;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(article.id);
      navigate('/articles');
    }
  };

  return (
    <div>
      <h2>{article.title}</h2>
      <p><strong>Category:</strong> {article.category}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p>{article.content}</p>
      <button onClick={handleDelete}>Delete Article</button>
    </div>
  );
};

export default ArticleDetails;