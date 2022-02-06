import './App.scss';
import Header from './components/header/Header'
import Mainscreen from './components/mainscreen/Mainscreen';
import Categories from './components/categories/Categories';
import Promo from './components/promo/Promo';
import Subscribe from './components/subscribe/Subscribe';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Mainscreen />
      <Categories />
      <Promo />
      <Subscribe />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
