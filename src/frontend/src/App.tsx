import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { router } from './lib/router';

function App() {
  const [currentPath, setCurrentPath] = useState(router.getCurrentPath());

  useEffect(() => {
    const unsubscribe = router.subscribe((path) => {
      setCurrentPath(path);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/products':
        return <ProductsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      default:
        // Redirect to home for unknown paths
        router.navigate('/');
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPath={currentPath} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
