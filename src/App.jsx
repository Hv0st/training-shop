import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import ProductCardMen from './components/productCardMen/ProductCardMen';
import ProductCardWomen from './components/productCardWomen/ProductCardWomen';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className='App' data-test-id='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men/" element={<Men />} />
          <Route path="/women/*" element={<ProductCardWomen />} />
          <Route path="/men/*" element={<ProductCardMen />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;