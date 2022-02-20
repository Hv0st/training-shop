import './SliderLeft.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/scss/navigation";
import leftImg1 from '../productCard/assets/img/product-img-left-1.jpg';


function SliderLeft() {
    return (
            <div className="slider__wrapper">
                <div className="swiperLeft-button-prev"></div>
                <div className="swiperLeft-button-next"></div>
                <Swiper navigation={{ prevEl: '.swiperLeft-button-prev', nextEl: '.swiperLeft-button-next'}} direction={"vertical"} slidesPerView={4} modules={[Navigation]} className="swiperLeft">
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className="slider__img" src={leftImg1} alt="" /></SwiperSlide>
                </Swiper>
            </div>
    );
}

export default SliderLeft;