import s from './Mainsreen.module.css';
import Features from '../features/Features';
import img from './assets/img/product-img-1.jpg';
import imgWomen from './assets/img/product-women-img.jpg';
import imgMen from './assets/img/product-men-img.jpg';
import imgAccess from './assets/img/product-accessories-img.jpg';

function Mainscreen() {
    return (
      <div className={s.mainscreen}>
        <div className={s.container}>
            <div className={s.mainscreenWrapper}>
                <div className={s.mainscreenImgs}>
                    <div className={s.mainscreenImgWrap}>
                        <img className={s.mainscreenImg} src={img} alt="Product"  />
                        <div className={s.bannerBig}>
                            <span className={s.bannerTextGray}>banner</span>
                            <span className={s.bannerTextBig}>your Title text </span>
                        </div>
                        <div className={s.arrowLeft}>
                            <span className={s.arrowSpanLeft}></span>
                        </div>
                        <div className={s.arrowRight}>
                            <span className={s.arrowSpanRight}></span>
                        </div>
                    </div>
                    <div className={s.mainscreenImgWrap}>
                        <img className={s.mainscreen__img} src={imgWomen} alt="Women"  />
                        <div className={s.banner}>
                        <span className={s.bannerText}>women</span>
                        </div>
                    </div>
                    <div className={s.mainscreenImgWrap}>
                        <img className={s.mainscreen__img} src={imgMen} alt="Men"  />
                        <div className={s.banner}>
                        <span className={s.bannerText}>men</span>

                        </div>
                    </div>
                    <div className={s.mainscreenImgWrap}>
                        <img className={s.mainscreen__img} src={imgAccess} alt="Accessories"  />
                        <div className={s.banner}>
                        <span className={s.bannerText}>accessories</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Features />
      </div>
    );
  }
  
  export default Mainscreen;