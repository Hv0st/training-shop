import s from './RelatedProducts.module.scss';
import ProductItem from '../productItem/ProductItem';
import productImg1 from './assets/img/img1.jpg';
import productImg2 from './assets/img/img1.jpg';
import productImg3 from './assets/img/img1.jpg';
import productImg4 from './assets/img/img1.jpg';

function RelatedProducts() {
    return (
        <div className={s.relatedProduct}>
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" path="/women/1" data="clothes-card-women" />
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg2} isSale="" path="/women/2" data="clothes-card-women" />
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" path="/women/3" data="clothes-card-women" />
            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" path="/women/4" data="clothes-card-women" />
        </div>
    );
}

export default RelatedProducts;