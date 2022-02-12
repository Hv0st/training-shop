import s from './Categories.module.scss';
import { Link } from 'react-router-dom';
import Breadcrump from '../breadcrump/Breadcrump';
import ProductItem from '../productItem/ProductItem';
import productImg1 from './assets/img/products-women-1.jpg'
import productImg2 from './assets/img/products-women-2.jpg'
import productImg3 from './assets/img/products-women-3.jpg'
import productImg4 from './assets/img/products-women-4.jpg'
import productImg5 from './assets/img/products-women-5.jpg'
import productImg6 from './assets/img/products-women-6.jpg'
import productImg7 from './assets/img/products-women-7.jpg'
import productImg8 from './assets/img/products-women-8.jpg'
import productImg9 from './assets/img/products-men-1.jpg'
import productImg10 from './assets/img/products-men-2.jpg'
import productImg11 from './assets/img/products-men-3.jpg'
import productImg12 from './assets/img/products-men-4.jpg'
import productImg13 from './assets/img/products-men-5.jpg'
import productImg14 from './assets/img/products-men-6.jpg'
import productImg15 from './assets/img/products-men-7.jpg'
import productImg16 from './assets/img/products-men-8.jpg'




function Categories() {
    return (
        <div className={s.categories}>
            <div className={s.categoriesContainer}>
                <div className={s.categoriesItem}>
                    <div className={s.catigoriesHeader}>
                        <h2 className={s.categoriesTitle}>women's</h2>
                        <Breadcrump />
                    </div>
                    <div className={s.categoriesList}>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="$ 60.00" img={productImg2} isSale="true" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg5} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg6} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg7} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg8} isSale="" />
                    </div>
                </div>
                <div className={s.categoriesItem}>
                    <div className={s.catigoriesHeader}>
                        <h2 className={s.categoriesTitle}>men's</h2>
                        <Breadcrump />
                    </div>
                    <div className={s.categoriesList}>
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg9} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg10} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg11} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg12} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg13} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg14} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg15} isSale="" />
                        <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg16} isSale="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;