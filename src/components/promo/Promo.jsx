import s from './Promo.module.scss'
import PromoItem from '../promoItem/PromoItem';
import promoImg1 from './assets/img/promo-img-1.jpg';
import promoImg2 from './assets/img/promo-img-2.jpg';

function Promo() {
  return (
    <div className={s.promo}>
      <div className={s.promoContainer}>
        <div className={s.promoWrapper}>
          <PromoItem title="lookbook collection" subtitle="New Season" img={promoImg1} />
          <PromoItem title="Get UP to 50% off" subtitle="Sale" img={promoImg2} />
        </div>
      </div>
    </div>
  );
}

export default Promo;