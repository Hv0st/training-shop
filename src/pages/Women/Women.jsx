import s from './Women.module.scss';
import {Link} from 'react-router-dom';
import Filter from '../../components/filter/Filter';
import Share from '../../components/share/Share';
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
    <div className={s.women}>
      <Share />
      <div className={s.container}>
        <Filter />
        <div className={s.categoriesBottom}>
          <div className={s.products}>
            <ul className={s.productsList}>
              <li className={s.productsItem}>
                <div className={s.productsImgWrap}>
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg1} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg2} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg3} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg4} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>

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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg5} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg6} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg7} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
                  <div className={s.productWrap}>
                    <img className={s.productsImg} src={productImg8} alt="product" />
                    <h3 className={s.productsTitle}>Women's tracksuit Q109</h3>
                    <Link className={s.productLink} to="/product"></Link>
                  </div>
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
      </div>
    </div>
  );
};

export default Women;
