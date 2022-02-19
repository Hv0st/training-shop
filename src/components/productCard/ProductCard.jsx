import s from './ProductCard.module.scss';
import Share from '../share/Share';
import Rating from '../rating/Rating';
import ProductNarrative from '../productNarrative/ProuctNarrative';
import RelatedProducts from '../relatedProducts/RelatedProducts';
import leftImg1 from './assets/img/product-img-left-1.jpg';
import leftImg2 from './assets/img/product-img-left-2.jpg';
import leftImg3 from './assets/img/product-img-left-3.jpg';
import leftImg4 from './assets/img/product-img-left-4.jpg';
import mainImg from './assets/img/main-img.jpg';
import rightImg1 from './assets/img/product-color-img-1.jpg';
import rightImg2 from './assets/img/product-color-img-2.jpg';
import rightImg3 from './assets/img/product-color-img-3.jpg';
import rightImg4 from './assets/img/product-color-img-4.jpg';
import heartIcon from './assets/img/heart-icon.svg';
import scalesIcon from './assets/img/scales-icon.svg';
import sizeGuideImg from './assets/img/hanger-icon.svg';
import shipIcon from './assets/img/car-icon.svg';
import returnIcon from './assets/img/return-icon.svg';
import emailIcon from './assets/img/email-icon.svg';
import stripeImg from './assets/img/Stripe.png';
import aesImg from './assets/img/AES256.png';
import palImg from './assets/img/paypal.png';
import visaImg from './assets/img/visa.png';
import mastercardImg from './assets/img/mastercard.png';
import discoverImg from './assets/img/discover.png';
import expressImg from './assets/img/american-express.png';


function ProductCard(props) {
    return (
        <div data-test-id={`product-page-${props.categor}`}>
            <Share />
            <ProductNarrative />
            <div className={s.container}>

                <div className={s.productHeader}>
                </div>
                <div className={s.productCardWrapper}>
                    <div className={s.productCardLeft}>
                        <div className={s.CardLeftArrows}>
                            <div className={s.CardLeftArrowLeft}>
                            </div>
                            <div className={s.CardLeftArrowRight}>
                            </div>
                        </div>
                        <img className={s.productCardLeftImg} src={leftImg1} alt="" />
                        <img className={s.productCardLeftImg} src={leftImg2} alt="" />
                        <img className={s.productCardLeftImg} src={leftImg3} alt="" />
                        <img className={s.productCardLeftImg} src={leftImg4} alt="" />
                    </div>
                    <div className={s.productCardMedium}>
                        <div className={s.productCardMediumImgWrapper}>
                        <img className={s.productCardMediumImg} src={mainImg} alt="" />
                            {/* <div className={s.CardMediumArrows}>
                                <div className={s.CardMediumArrowLeft}>
                                </div>
                                <div className={s.CardMediumArrowRight}>
                                </div>
                            </div> */}
                        </div>

                    </div>
                    <div className={s.productCardRight}>
                        <div className={s.colorSize}>
                            <div className={s.color}>
                                <p className={s.colorText}>color<span className={s.colorTextSpan}>Blue</span></p>
                                <div className={s.colorImages}>
                                    <img className={s.colorImg} src={rightImg1} alt="" />
                                    <img className={s.colorImg} src={rightImg2} alt="" />
                                    <img className={s.colorImg} src={rightImg3} alt="" />
                                    <img className={s.colorImg} src={rightImg4} alt="" />
                                </div>
                            </div>
                            <div className={s.size}>
                                <p className={s.colorText}>size<span className={s.colorTextSpan}>s</span></p>
                                <div className={s.sizeBtns}>
                                    <button className={s.sizeBtn}>XS</button>
                                    <button className={s.sizeBtn}>S</button>
                                    <button className={s.sizeBtn}>M</button>
                                    <button className={s.sizeBtn}>L</button>
                                </div>
                                <div className={s.sizeGuide}>
                                    <img className={s.sizeGuideImg} src={sizeGuideImg} alt="" />
                                    <span className={s.sizeGuideText}>Size guide</span>
                                </div>
                            </div>
                        </div>
                        <div className={s.priceWrap}>
                            <span className={s.price}>$ 379.99</span>
                            <button className={s.priceBtn}>add to card</button>
                            <img className={s.priceIcon} src={heartIcon} alt="" />
                            <img className={s.priceIcon} src={scalesIcon} alt="" />
                        </div>
                        <div className={s.features}>
                            <div className={s.featuresItem}>
                                <img src={shipIcon} alt="" />
                                <span className={s.featuresItemText}>Shipping & Delivery</span>
                            </div>
                            <div className={s.featuresItem}>
                                <img src={returnIcon} alt="" />
                                <span className={s.featuresItemText}>Returns & Exchanges</span>
                            </div>
                            <div className={s.featuresItem}>
                                <img src={emailIcon} alt="" />
                                <span className={s.featuresItemText}>Ask a question</span>
                            </div>
                        </div>
                        <div className={s.pay}>
                            <img className={s.payImg} src={stripeImg} alt="" />
                            <img className={s.payImg} src={aesImg} alt="" />
                            <img className={s.payImg} src={palImg} alt="" />
                            <img className={s.payImg} src={visaImg} alt="" />
                            <img className={s.payImg} src={mastercardImg} alt="" />
                            <img className={s.payImg} src={discoverImg} alt="" />
                            <img className={s.payImg} src={expressImg} alt="" />
                        </div>
                        <div className={s.descript}>
                            <span className={s.desriptText}>description</span>
                        </div>
                        <div className={s.info}>
                            <h4 className={s.infoTitle}>Additional information</h4>
                            <p className={s.infoText}><span className={s.infoTextSpan}>Color:</span>Blue, White, Black, Grey</p>
                            <p className={s.infoText}><span className={s.infoTextSpan}>Size:</span>XS, S, M, L</p>
                            <p className={s.infoText}><span className={s.infoTextSpan}>Material:</span>100% Polyester</p>
                        </div>
                        <div className={s.reviews}>
                            <h4 className={s.reviewsTitle}>reviews</h4>
                            <div className={s.reviewsIntro}>
                                <Rating size="16px" />
                                <span >Write a review</span>
                            </div>
                            <div className={s.feedbacks}>
                                <div className={s.feedback}>
                                    <div className={s.feddbackIntro}>
                                        <span className={s.userName}>Oleh Chabanov</span>
                                        <Rating size="10px" />
                                    </div>
                                    <p className={s.feedbackText}>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                </div>
                                <div className={s.feedback}>
                                    <div className={s.feddbackIntro}>
                                        <span className={s.userName}>ShAmAn design</span>
                                        <Rating size="10px" />
                                    </div>
                                    <p className={s.feedbackText}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RelatedProducts />
        </div>
    );
}
export default ProductCard;