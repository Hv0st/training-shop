import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Product from './pages/Product/Product';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className='App' data-test-id='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;