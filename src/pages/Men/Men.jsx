import s from './Men.module.scss';
import Filter from '../../components/filter/Filter';
import Share from '../../components/share/Share';
import ProductItem from '../../components/productItem/ProductItem';
import productImg1 from '../../components/categories/assets/img/products-men-1.jpg';
import productImg2 from '../../components/categories/assets/img/products-men-2.jpg';
import productImg3 from '../../components/categories/assets/img/products-men-3.jpg';
import productImg4 from '../../components/categories/assets/img/products-men-4.jpg';
import productImg5 from '../../components/categories/assets/img/products-men-5.jpg';
import productImg6 from '../../components/categories/assets/img/products-men-6.jpg';
import productImg7 from '../../components/categories/assets/img/products-men-7.jpg';
import productImg8 from '../../components/categories/assets/img/products-men-8.jpg';

export const Men = () => {
  return (
    <div className={s.men} data-test-id="products-page-men">
      <Share />
      <div className={s.container}>
        <Filter />
        <div className={s.productItems}>
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg2} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg5} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg6} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg7} isSale="" />
          <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg8} isSale="" />
        </div>
      </div>
    </div>
  );
};

export default Men;

