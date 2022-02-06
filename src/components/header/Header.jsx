import s from './Header.module.css';
import phoneIcon from './assets/img/phone-icon.svg';
import locIcon from './assets/img/loc-icon.svg';
import clockIcon from './assets/img/clock-icon.svg';
import facebookIcon from './assets/img/facebook-icon.svg';
import twitterIcon from './assets/img/twitter-icon.svg';
import instaIcon from './assets/img/insta-icon.svg';
import pintIcon from './assets/img/pint-icon.svg';
import logoImg from './assets/img/logo.png';
import searchIcon from './assets/img/search-icon.svg';
import planetIcon from './assets/img/planet-icon.svg';
import userIcon from './assets/img/user-icon.svg';
import cartIcon from './assets/img/cart-icon.svg';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.headerTop}>
        <div className={s.container}>
          <div className={s.headerTopWrap}>
            <div className={s.headerContacts}>
              <ul className={s.contactsList}>
                <li className={s.contactsItem}>
                  <img className={s.contactsImg }src={phoneIcon} alt="phone"  />
                  <span className={s.contactsText}>+375 29 100 20 30</span>
                </li>
                <li className={s.contactsItem}>
                <img className={s.contactsImg} src={locIcon} alt="location"  />
                  <span className={s.contactsText}>Belarus, Gomel, Lange 17</span>
                </li>
                <li className={s.contactsItem}>
                <img className={s.contactsImg} src={clockIcon} alt="prime time"  />
                  <span className={s.contactsText}>All week 24/7</span>
                </li>
              </ul>
            </div>
            <div className="header__social social">
              <ul className="social__list">
                <li className="social__item">
                  <a className="social__link" href='/#'>
                    <img className="social__img" src={facebookIcon} alt="facebook"  />
                  </a>
                </li>
                <li className="social__item">
                  <a className="social__link" href='/#'>
                    <img className="social__img" src={twitterIcon} alt="twitter"  />
                  </a>
                </li>
                <li className="social__item">
                  <a className="social__link" href='/#'>
                    <img className="social__img" src={instaIcon} alt="instagram"  />
                  </a>
                </li>
                <li className="social__item">
                  <a className="social__link" href='/#'>
                    <img className="social__img" src={pintIcon} alt="pintereset"  />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={s.headerBottom}>
        <div className={s.container}>
          <div className={s.headerBottomWrap}>
            <div className={s.headerLogo} logo>
              <img className={s.logoImg} src={logoImg} alt="CleverShop"  />
            </div>
            <nav className="header__nav nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    About As
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    Women
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    Men
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    Beauty
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    Accessories
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    Blog
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/#" >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className={s.account}>
              <ul className={s.accountList}>
                <li className={s.accountItem}>
                  <img className={s.accountImg} src={searchIcon} alt="search"  />
                </li>
                <li className={s.accountItem}>
                  <img className={s.accountImg} src={planetIcon} alt="planet"  />
                </li>
                <li className={s.accountItem}>
                  <img className={s.accountImg} src={userIcon} alt="user"  />
                </li>
                <li className={s.accountItem}>
                  <img className={s.accountImg} src={cartIcon} alt="cart"  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;