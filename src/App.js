import './App.scss';
import Header from './components/header/Header'
import Mainscreen from './components/mainscreen/Mainscreen';
import Categories from './components/categories/Categories';
import Promo from './components/promo/Promo';
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <div className="App" data-test-id="app">
      <Header />
      <Mainscreen />
      <Categories />
      <Promo />
      <Subscribe />
    </div>
  );
}

export default App;
