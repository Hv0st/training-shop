import s from './RelatedProducts.module.scss';
import ProductItem from '../productItem/ProductItem';
import productImg1 from './assets/img/img1.jpg';
import productImg2 from './assets/img/img2.jpg';
import productImg3 from './assets/img/img3.jpg';
import productImg4 from './assets/img/img4.jpg';

function RelatedProducts() {
    return (
        <div className={s.relatedProduct}>
            <div className={s.container}>
                <div className={s.RelatedProductList}>
                    <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" path="/women/1" data="clothes-card-women" />
                    <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg2} isSale="" path="/women/2" data="clothes-card-women" />
                    <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" path="/women/3" data="clothes-card-women" />
                    <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" path="/women/4" data="clothes-card-women" />a
                </div>
            </div>
        </div>
    );
}

export default RelatedProducts;