import s from './Product.module.scss';
import ProductCard from '../.././components/productCard/ProductCard';
import ProductItem from '../../components/productItem/ProductItem';
import ProductItemImg from './assets/img/related-img-1.jpg';
import ProductItemImg2 from './assets/img/related-img-2.jpg';
import ProductItemImg3 from './assets/img/related-img-3.jpg';
import ProductItemImg4 from './assets/img/related-img-4.jpg';

function Product() {
  return (
    <div className={s.productCard}>
      <ProductCard />
      <div className={s.productCardContainer}>
        <div className={s.relatedProducts}>
          <div className={s.relatedProductsHeader}>
            <h2 className={s.relatedProductsHeaderTitle}>related products</h2>
          </div>
          <div className={s.relatedProductsItems}>
            <ProductItem title="Women's tracksuit Q109" img={ProductItemImg} newPrice="$30.00" oldPrice="" isSale="" />
            <ProductItem title="Women's tracksuit Q109" img={ProductItemImg2} newPrice="$30.00" oldPrice="" isSale="true" />
            <ProductItem title="Women's tracksuit Q109" img={ProductItemImg3} newPrice="$30.00" oldPrice="" isSale="" />
            <ProductItem title="Women's tracksuit Q109" img={ProductItemImg4} newPrice="$30.00" oldPrice="" isSale="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
