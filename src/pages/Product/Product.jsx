import s from './Product.module.scss';
import ProductCard from '../../components/productCard/ProductCardMen';
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
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={ProductItemImg} isSale="" path="/women/1" data="clothes-card-women" />
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="$ 60.00" img={ProductItemImg2} isSale="" path="/women/2" data="clothes-card-women" />
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={ProductItemImg3} isSale="" path="/women/3" data="clothes-card-women" />
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={ProductItemImg4} isSale="" path="/women/4" data="clothes-card-women" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
