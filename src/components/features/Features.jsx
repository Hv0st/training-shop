import s from'./Features.module.scss';
import shippingImg from './assets/img/shipping-icon.svg';
import returnImg from './assets/img/return-icon.svg';
import supportImg from './assets/img/support-icon.svg';

function Features() {
    return (
      <div className={s.features}>
        <div className={s.container}>
          <div className={s.featuresWrapper}>
            <ul className={s.featuresList}>
              <li className={s.featuresItem}>
                <img className={s.featuresImg} src={shippingImg} alt="Free shipping"  />
                <div className={s.featuresIntro}>
                  <h3 className={s.featuresTitle}>FREE SHIPPING</h3>
                  <p className={s.featuresText}>On all UA order or order above $100</p>
                </div>
              </li>
              <li className={s.featuresItem}>
                <img className={s.featuresImg} src={returnImg} alt="30 days return"  />
                <div className={s.featuresIntro}>
                  <h3 className={s.featuresTitle}>30 DAYS RETURN</h3>
                  <p className={s.featuresText}>Simply return it within 30 days for an exchange</p>
                </div>
              </li>
              <li className={s.featuresItem}>
                <img className={s.featuresImg} src={supportImg} alt="support 24/7"  />
                <div className={s.featuresIntro}>
                  <h3 className={s.featuresTitle}>SUPPORT 24/7</h3>
                  <p className={s.featuresText}>Contact us 24 hours a day, 7 days a week</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Features;