import s from './Footer.module.css';
import facebookIcon from './assets/img/facebook-icon.svg';
import twitterIcon from './assets/img/twitter-icon.svg';
import instaIcon from './assets/img/insta-icon.svg';
import pintIcon from './assets/img/pint-icon.svg';
import locIcon from './assets/img/Group.svg';
import phoneIcon from './assets/img/phone-icon.svg';
import clockIcon from './assets/img/clock-icon.svg';
import mailIcon from './assets/img/mail-icon.svg';
import stripeImg from './assets/img/stripe.png';
import aesImg from './assets/img/eas256.png';
import palImg from './assets/img/paypal.png';
import visaImg from './assets/img/visa.png';
import masterImg from './assets/img/mastercard.png';
import discoverImg from './assets/img/discover.png';
import expressImg from './assets/img/american-express.png';

function Footer() {
    return (
        <div className={s.footer}>
            <div className={s.top}>
                <div className={s.container}>
                    <div className={s.topWrapper}>
                        <h2 className={s.title}>BE IN TOUCH WITH US:</h2>
                        <div className={s.form}>
                            <input type="email" className={s.input} placeholder='Enter your email' />
                            <button className={s.btn}>join us</button>
                        </div>
                        <div className={s.social} >
                            <ul className={s.socialList}>
                                <li className={s.socialItem}>
                                    <a className={s.socialLink} href='/#'>
                                        <img className={s.socialImg} src={facebookIcon} alt="facebook" />
                                    </a>
                                </li>
                                <li className={s.socialItem}>
                                    <a className={s.socialLink} href='/#'>
                                        <img className={s.socialImg} src={twitterIcon} alt="twitter" />
                                    </a>
                                </li>
                                <li className={s.socialItem}>
                                    <a className={s.socialLink} href='/#'>
                                        <img className={s.socialImg} src={instaIcon} alt="instagram" />
                                    </a>
                                </li>
                                <li className={s.socialItem}>
                                    <a className={s.socialLink} href='/#'>
                                        <img className={s.socialImg} src={pintIcon} alt="pintereset" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.main}>
                <div className={s.container}>
                    <div className={s.mainWrapper}>
                        <div className={s.footerCat}>
                            <h4 className={s.footerSubtitle}>Categories</h4>
                            <div className={s.footerList}>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Men</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Women</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Accessories</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Beauty</a>
                                </li>
                            </div>
                        </div>
                        <div className={s.footerCat}>
                            <h4 className={s.footerSubtitle}>Infomation</h4>
                            <div className={s.footerList}>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>About Us</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Contact Us</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Blog</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>FAQs</a>
                                </li>
                            </div>
                        </div>
                        <div className={s.footerCat}>
                            <h4 className={s.footerSubtitle}>Useful links</h4>
                            <div className={s.footerList}>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Terms & Conditions</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Return & Exchanges</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Shipping & Delivery</a>
                                </li>
                                <li className={s.footerItem}>
                                    <a href="/#" className={s.footerLink}>Privacy Policy</a>
                                </li>
                            </div>
                        </div>
                        <div className={s.footerCat}>
                            <h4 className={s.footerSubtitle}>Contact Us</h4>
                            <div className={s.footerList}>
                                <li className={s.footerItem}>
                                    <img src={locIcon} alt="Location" className={s.mainImg} /><span className={s.footerText}>Belarus, Gomel, Lange 17</span>
                                </li>
                                <li className={s.footerItem}>
                                    <img src={phoneIcon } alt="Phone" className={s.mainImg} /><span className={s.footerText}>+375 29 100 20 30</span>
                                </li>
                                <li className={s.footerItem}>
                                    <img src={clockIcon} alt="Prime time" className={s.mainImg} /><span className={s.footerText}>All week 24/7</span>
                                </li>
                                <li className={s.footerItem}>
                                    <img src={mailIcon} alt="Mailto" className={s.mainImg} /><a href="/#" className={s.footerEmail}>info@clevertec.ru</a>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.bottom}>
                <div className={s.container}>
                    <div className={s.bottomWrapper}>
                        <div className={s.copy}>
                            <span className={s.copyText}>Copyright &copy; 2032 all rights reserved</span>
                        </div>
                        <div className={s.pay}>
                            <img className={s.payImg} src={stripeImg} alt="stripe" />
                            <img className={s.payImg} src={aesImg} alt="AES" />
                            <img className={s.payImg} src={palImg} alt="PayPal" />
                            <img className={s.payImg} src={visaImg} alt="Visa" />
                            <img className={s.payImg} src={masterImg} alt="MasterCard" />
                            <img className={s.payImg} src={discoverImg} alt="Discover" />
                            <img className={s.payImg} src={expressImg} alt="American Express" />
                        </div>
                        <a href="/#" className={s.bottomLink}>Clevertec.ru/training</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
