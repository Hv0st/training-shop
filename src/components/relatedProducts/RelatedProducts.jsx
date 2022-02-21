import s from './RelatedProducts.module.scss';
import ProductItem from '../productItem/ProductItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import "swiper/scss/navigation";
import { Navigation } from "swiper";
import productImg1 from './assets/img/img1.jpg';
import productImg2 from './assets/img/img2.jpg';
import productImg3 from './assets/img/img3.jpg';
import productImg4 from './assets/img/img4.jpg';
function RelatedProducts() {
    return (
        <div className={s.relatedProduct}>
            <div className={s.container}>
                <div class="swiper-buttonPrev"></div>
                <div class="swiper-buttonNext"></div>
                    <Swiper navigation={{ prevEl: '.swiper-buttonPrev', nextEl: '.swiper-buttonNext'}}
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Navigation]}
                    breakpoints={{
                        1110: {
                            slidesPerView: 4
                        },

                        830: {
                            slidesPerView: 3
                        },

                        600: {
                            slidesPerView: 2
                        },
                        
                        360: {
                            slidesPerView: 1
                        }

                    }}
                    className="mySwiper">
                        <SwiperSlide >
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" path="/women/1" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg2} isSale="" path="/women/2" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" path="/women/3" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" path="/women/4" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg1} isSale="" path="/women/1" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg2} isSale="" path="/women/2" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg3} isSale="" path="/women/3" data="clothes-card-women" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem title="Women's tracksuit Q109" newPrice="$30.00" oldPrice="" img={productImg4} isSale="" path="/women/4" data="clothes-card-women" />
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    );
}

export default RelatedProducts;