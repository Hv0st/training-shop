import './App.scss';
import Header from './components/header/Header'
import Mainscreen from './components/mainscreen/Mainscreen';
import Categories from './components/categories/Categories';
import Promo from './components/promo/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainscreen />
      <Categories />
      <Promo />
    </div>
  );
}

export default App;
