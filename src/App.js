import './App.scss';
import Header from './components/header/Header'
import Mainscreen from './components/mainscreen/Mainscreen';
import Categories from './components/categories/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainscreen />
      <Categories />
    </div>
  );
}

export default App;
