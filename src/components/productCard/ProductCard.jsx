import s from './ProductCard.scss';
import Share from '../share/Share';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Controller } from "swiper";
// import "swiper/css/bundle";
// import "swiper/scss/navigation";
import Rating from '../rating/Rating';
import ProductNarrative from '../productNarrative/ProuctNarrative';
import RelatedProducts from '../relatedProducts/RelatedProducts';
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
import { useState } from 'react';

import leftImg1 from './assets/img/product-img-left-1.jpg';
// navigation={{ prevEl: '.swiperLeft-button-prev', nextEl: '.swiperLeft-button-next' }}

function ProductCard(props) {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null)
    return (
        <div data-test-id={`product-page-${props.categor}`}>
            <Share />
            <ProductNarrative />
            <div className='container'>
                <div className="productHeader">
                </div>
                <div className="productCardWrapper">
                    <div className="slider__wrapper">
                        <div className="swiperLeft-button-prev"></div>
                        <div className="swiperLeft-button-next"></div>
                        <Swiper 
                        navigation={{ prevEl: '.swiperLeft-button-prev', nextEl: '.swiperLeft-button-next' }}  
                        direction={"vertical"} 
                        slidesPerView={4} 
                        modules={[Navigation, Controller]} 
                        onSwiper={setFirstSwiper} 
                        controller={{ control: secondSwiper }}
                        className="swiperLeft">
                            <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                            <SwiperSlide></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="productCardMedium">
                        <Swiper navigation={true} slidesPerView={1} modules={[Controller, Navigation]} onSwiper={setSecondSwiper} controller={{ control: firstSwiper }} className="mySwiper">
                            <SwiperSlide>
                                <div className="productCardMediumImgWrapper">
                                    <img className="productCardMediumImg" src={mainImg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="productCardMediumImgWrapper">
                                    <img className='productCardMediumImg' src={mainImg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="productCardMediumImgWrapper">
                                    <img className='productCardMediumImg' src={mainImg} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="productCardMediumImgWrapper">
                                    <img className='productCardMediumImg' src={mainImg} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='productCardRight'>
                        <div className='colorSize'>
                            <div className='color'>
                                <p className='colorText'>color<span className='colorTextSpan'>Blue</span></p>
                                <div className='colorImages'>
                                    <img className='colorImg' src={rightImg1} alt="" />
                                    <img className='colorImg' src={rightImg2} alt="" />
                                    <img className='colorImg' src={rightImg3} alt="" />
                                    <img className='colorImg' src={rightImg4} alt="" />
                                </div>
                            </div>
                            <div className='size'>
                                <p className='colorText'>size<span className='colorTextSpan'>s</span></p>
                                <div className='sizeBtns'>
                                    <button className='sizeBtn'>XS</button>
                                    <button className='sizeBtn'>S</button>
                                    <button className='sizeBtn'>M</button>
                                    <button className='sizeBtn'>L</button>
                                </div>
                                <div className='sizeGuide'>
                                    <img className='sizeGuideImg' src={sizeGuideImg} alt="" />
                                    <span className='sizeGuideText'>Size guide</span>
                                </div>
                            </div>
                        </div>
                        <div className='priceWrap'>
                            <span className='price'>$ 379.99</span>
                            <button className='priceBtn'>add to card</button>
                            <img className='priceIcon' src={heartIcon} alt="" />
                            <img className='priceIcon' src={scalesIcon} alt="" />
                        </div>
                        <div className='features'>
                            <div className='featuresItem'>
                                <img src={shipIcon} alt="" />
                                <span className='featuresItemText'>Shipping & Delivery</span>
                            </div>
                            <div className='featuresItem'>
                                <img src={returnIcon} alt="" />
                                <span className='featuresItemText'>Returns & Exchanges</span>
                            </div>
                            <div className='featuresItem'>
                                <img src={emailIcon} alt="" />
                                <span className='featuresItemText'>Ask a question</span>
                            </div>
                        </div>
                        <div className='pay'>
                            <img className='payImg' src={stripeImg} alt="" />
                            <img className='payImg' src={aesImg} alt="" />
                            <img className='payImg' src={palImg} alt="" />
                            <img className='payImg' src={visaImg} alt="" />
                            <img className='payImg' src={mastercardImg} alt="" />
                            <img className='payImg' src={discoverImg} alt="" />
                            <img className='payImg' src={expressImg} alt="" />
                        </div>
                        <div className='descript'>
                            <span className='desriptText'>description</span>
                        </div>
                        <div className='info'>
                            <h4 className='infoTitle'>Additional information</h4>
                            <p className='infoText'><span className={s.infoTextSpan}>Color:</span>Blue, White, Black, Grey</p>
                            <p className='infoText'><span className={s.infoTextSpan}>Size:</span>XS, S, M, L</p>
                            <p className='infoText'><span className={s.infoTextSpan}>Material:</span>100% Polyester</p>
                        </div>
                        <div className='reviews'>
                            <h4 className='reviewsTitle'>reviews</h4>
                            <div className='reviewsIntro'>
                                <Rating size="16px" />
                                <span >Write a review</span>
                            </div>
                            <div className='feedbacks'>
                                <div className='feedback'>
                                    <div className='feddbackIntro'>
                                        <span className='userName'>Oleh Chabanov</span>
                                        <Rating size="10px" />
                                    </div>
                                    <p className='feedbackText'>On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                                </div>
                                <div className='feedback'>
                                    <div className='feddbackIntro'>
                                        <span className='userName'>ShAmAn design</span>
                                        <Rating size="10px" />
                                    </div>
                                    <p className='feedbackText'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti</p>
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