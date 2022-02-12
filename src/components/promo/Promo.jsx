import s from './Promo.module.scss'
import promoImg1 from './assets/img/promo-img-1.jpg';
import promoImg2 from './assets/img/promo-img-2.jpg';

function Promo() {
    return (
      <div className={s.promo}>
        <div className={s.container}>
          <div className={s.promoWrapper}>
            <div className={s.promoImgWrap}>
              <img className={s.promoImg} src={promoImg1} alt="New season" />
              <div className={s.banner}>
              <span className={s.bannerTextGray}>new season</span>
                <h2 className={s.bannerText}>lookbook collection</h2>
              </div>
            </div>
            <div className={s.promoImgWrap}>
              <img className={s.promoImg} src={promoImg2} alt="Sale" />
              <div className={s.banner}>
                <span className={s.bannerTextGray}>sale</span>
                <h2 className={s.bannerText}>Get UP to <span className={s.bannerTextColor}>50% off</span></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Promo;