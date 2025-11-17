import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Blog Manager</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/articles">Articles</Link> | <Link to="/new">New Article</Link>
    </nav>
  </header>
);

export default Header;