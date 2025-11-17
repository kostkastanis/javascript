// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArticlesProvider } from './context/ArticlesProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetails from './pages/ArticleDetails';
import NewArticle from './pages/NewArticle';
import EditArticle from './pages/EditArticle';

const App = () => (
  <ArticlesProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/new" element={<NewArticle />} />
          <Route path="/edit/:id" element={<EditArticle />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </ArticlesProvider>
);

export default App;
