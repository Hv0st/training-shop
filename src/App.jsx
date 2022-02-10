import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import Product from './pages/Product/Product';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/women" element={<Women />} />
          <Route exact path="/men" element={<Men />} />
          <Route exact path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;