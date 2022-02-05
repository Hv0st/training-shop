import './_mainsreen.scss';
import Features from '../features/Features';
import img from './assets/img/product-img-1.jpg';
import imgWomen from './assets/img/product-women-img.jpg';
import imgMen from './assets/img/product-men-img.jpg';
import imgAccess from './assets/img/product-accessories-img.jpg';

function Mainscreen() {
    return (
      <div className="mainscreen">
        <div className="container">
            <div className="mainscreen__wrapper">
                <div className="mainscreen__imgs">
                    <div className="mainscreen__img-wrap"><img className="mainscreen__img" src={img} alt="Product image"  />
                        <div className="mainscreen__banner banner banner--big">
                            <span className="banner__text--gray">banner</span>
                            <span className="banner__text--big">your Title text </span>
                        </div>
                        <div className="mainscreen__arrow arrow arrow-left">
                            <span className="arrow__span--left"></span>
                        </div>
                        <div className="mainscreen__arrow arrow arrow-right">
                            <span className="arrow__span--right"></span>
                        </div>
                    </div>
                    <div className="mainscreen__img-wrap"><img className="mainscreen__img" src={imgWomen} alt="Women"  />
                        <div className="mainscreen__banner banner">
                        <span className="banner__text">women</span>
                        </div>
                    </div>
                    <div className="mainscreen__img-wrap"><img className="mainscreen__img" src={imgMen} alt="Men"  />
                        <div className="mainscreen__banner banner">
                        <span className="banner__text">men</span>

                        </div>
                    </div>
                    <div className="mainscreen__img-wrap"><img className="mainscreen__img" src={imgAccess} alt="Accessories"  />
                        <div className="mainscreen__banner banner">
                        <span className="banner__text">accessories</span>

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