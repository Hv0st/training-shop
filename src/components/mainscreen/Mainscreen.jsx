import s from './Mainsreen.module.scss';
import { Link } from 'react-router-dom'
import Features from '../features/Features';
import img from './assets/img/product-img-1.jpg';
import imgWomen from './assets/img/product-women-img.jpg';
import imgMen from './assets/img/product-men-img.jpg';
import imgAccess from './assets/img/product-accessories-img.jpg';

function Mainscreen() {
    return (
        <div className={s.mainscreen}>
            <div className={s.container}>
                <div className={s.mainscreenImgs}>
                    <div className={s.mainscreenImgWrapper}>
                        <img className={s.mainscreenImg} src={img} alt="" />
                        <div className={`${s.mainscreenBanner} ${s.mainscreenBannerBig}`}>
                            <span className={s.mainscreenBannerSubtitle}>banner</span>
                            <h2 className={`${s.mainscreenBannerTitle} ${s.mainscreenBannerTitleBig}`}>your Title text </h2>
                        </div>
                    </div>
                    <div className={s.mainscreenImgWrapper}>
                        <img className={s.mainscreenImg} src={imgWomen} alt="" />
                        <div className={s.mainscreenBanner}>
                            <h2 className={s.mainscreenBannerTitle}>Women</h2>
                        </div>
                    </div>
                    <div className={s.mainscreenImgWrapper}>
                        <img className={s.mainscreenImg} src={imgMen} alt="" />
                        <div className={s.mainscreenBanner}>
                            <h2 className={s.mainscreenBannerTitle}>men</h2>
                        </div>
                    </div>
                    <div className={s.mainscreenImgWrapper}>
                        <img className={s.mainscreenImg} src={imgAccess} alt="" />
                        <div className={s.mainscreenBanner}>
                            <h2 className={s.mainscreenBannerTitle}>Accessories</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainscreen;