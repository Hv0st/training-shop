import './_features.scss';
import shippingImg from './assets/img/shipping-icon.svg';
import returnImg from './assets/img/return-icon.svg';
import supportImg from './assets/img/support-icon.svg';

function Features() {
    return (
      <div className="features">
        <div className="container">
          <div className="features__wrapper">
            <ul className="features__list">
              <li className="features__item">
                <img className="features__img" src={shippingImg} alt="Free shipping"  />
                <div className="features__intro">
                  <h3 className="features__title">FREE SHIPPING</h3>
                  <p className="feature__text">On all UA order or order above $100</p>
                </div>
              </li>
              <li className="features__item">
                <img className="features__img" src={returnImg} alt="30 days return"  />
                <div className="features__intro">
                  <h3 className="features__title">30 DAYS RETURN</h3>
                  <p className="feature__text">Simply return it within 30 days for an exchange</p>
                </div>
              </li>
              <li className="features__item">
                <img className="features__img" src={supportImg} alt="support 24/7"  />
                <div className="features__intro">
                  <h3 className="features__title">SUPPORT 24/7</h3>
                  <p className="features__text">Contact us 24 hours a day, 7 days a week</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Features;