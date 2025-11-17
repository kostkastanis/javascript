import { Link, useNavigate } from 'react-router-dom';
import type { Article } from '../types/article';
import { useArticles } from '../hooks/useArticles';

interface Props {
  article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const { deleteArticle } = useArticles();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteArticle(article.id);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${article.id}`);  // ← redirection vers la page d’édition
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{article.title}</h3>
      <p><strong>Category:</strong> {article.category}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p>{article.content.slice(0, 100)}...</p>
      <div style={{ marginTop: '0.5rem' }}>
        <button onClick={handleEdit} style={{ marginRight: '0.5rem' }}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ArticleCard;