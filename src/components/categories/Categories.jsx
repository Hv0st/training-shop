import s from './Categories.module.css';
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
        <>
            <section className={s.categories}>
                <div className={s.container}>
                    <div className={s.categoriesWrapper}>
                        <div className={s.categoriesTop}>
                            <h2 className={s.categoriesTitle}>women's</h2>
                            <div className={s.breadcrump}>
                                <ul className={s.breadcrumpList}>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLinkActive} href="/#" >NEW ARRIVALS</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >SPECIALS</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >BESTSELLERS</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >MOST VIEWED</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >FEATURED PRODUCTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.categoriesBottom}>
                            <div className={s.products}>
                                <ul className={s.productsList}>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg1} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg2} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}>$ 60.00</span>
                                                </div>

                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={s.productsSales}>
                                                <span className={s.productsSalesSpan}>-50%</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg3} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg4} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg5} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg6} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg7} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg8} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className={s.categoriesBtn}>see all</button>
                    </div>
                </div>
            </section>
            <section className={s.categories}>
                <div className={s.container}>
                    <div className={s.categoriesWrapper}>
                        <div className={s.categoriesTop}>
                            <h2 className={s.categoriesTitle}>men's</h2>
                            <div className={s.breadcrump}>
                                <ul className={s.breadcrumpList}>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLinkActive} href="/#" >NEW ARRIVALS</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >SPECIALS</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >BESTSELLERS</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >MOST VIEWED</a>
                                    </li>
                                    <li className={s.breadcrumpItem}>
                                        <a className={s.breadcrumpLink} href="/#" >FEATURED PRODUCTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.categoriesBottom}>
                            <div className={s.products}>
                                <ul className={s.productsList}>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg9} alt="" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg10} alt="" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg11} alt="" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg12} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg13} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg14} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg15} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={s.productsItem}>
                                        <div className={s.productsImgWrap}>
                                            <img className={s.productsImg} src={productImg16} alt="product" />
                                            <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                                            <div className={s.productsIntro}>
                                                <div>
                                                    <span className={s.productsPrice}>$ 30.00</span>
                                                    <span className={s.oldPrice}></span>
                                                </div>
                                                <div className={s.rating}>
                                                    <div className={s.ratingBody}>
                                                        <div className={s.ratingActive}></div>
                                                        <div className={s.ratingItems}>
                                                            <input className={s.ratingItem} type="radio" name="rating" value="1" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="2" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="3" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="4" />
                                                            <input className={s.ratingItem} type="radio" name="rating" value="5" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button className={s.categoriesBtn}>see all</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Categories;