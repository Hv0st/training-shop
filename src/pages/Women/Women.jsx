import s from './Women.module.scss';
import Filter from '../../components/filter/Filter';
import Share from '../../components/share/Share';
import ProductItem from '../../components/productItem/ProductItem';
import productImg1 from '../../components/categories/assets/img/products-women-1.jpg';
import productImg2 from '../../components/categories/assets/img/products-women-2.jpg';
import productImg3 from '../../components/categories/assets/img/products-women-3.jpg';
import productImg4 from '../../components/categories/assets/img/products-women-4.jpg';
import productImg5 from '../../components/categories/assets/img/products-women-5.jpg';
import productImg6 from '../../components/categories/assets/img/products-women-6.jpg';
import productImg7 from '../../components/categories/assets/img/products-women-7.jpg';
import productImg8 from '../../components/categories/assets/img/products-women-8.jpg';

export const Women = () => {
  return (
    <div className={s.women} data-test-id="products-page-women">
      <Share title="Women"/>
      <div className={s.container}>
        <Filter />
        <div className={s.productItems}>
        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" path="/women/1" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="$ 60.00" img={productImg2} isSale="true" path="/women/2" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" path="/women/3" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" path="/women/4" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg5} isSale="" path="/women/5" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg6} isSale="" path="/women/6" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg7} isSale="" path="/women/7" data="clothes-card-women"/>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg8} isSale="" path="/women/8" data="clothes-card-women"/>
        </div>
      </div>
    </div>
  );
};

export default Women;
