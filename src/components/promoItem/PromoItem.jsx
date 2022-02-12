import s from './PromoItem.module.scss';

function PromoItem(props) {
    return (
        <div className={s.promoItem}>
            <div className={s.promoItemContainer}>
                <div className={s.promoItemImgWrap}>
                    <img className={s.promoItem} src={props.img} alt="" />
                    <div className={s.promoItemBanner}>
                        <span className={s.prodoItemBannerSubtitle}>{props.subtitle}</span>
                        <h2 className={s.promoItemTitle}>{props.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromoItem;