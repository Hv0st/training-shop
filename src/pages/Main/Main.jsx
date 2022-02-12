import s from './Main.module.scss';
import Mainscreen from '../../components/mainscreen/Mainscreen';
import Categories from '../../components/categories/Categories';
import Promo from '../../components/promo/Promo';
import Subscribe from '../../components/subscribe/Subscribe';
import Blog from '../../components/blog/Blog';

function Main() {
    return (
      <div className="main">
          <Mainscreen />
          <Categories />
          <Promo />
          <Subscribe />
          <Blog />
      </div>
    );
}

export default Main;