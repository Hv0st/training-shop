import s from './ProductItem.module.scss';
import { Link } from 'react-router-dom';
import Rating from '../rating/Rating';


function ProductItem(props) {
    return (
        <>
            <div className={s.product}>
                <div className={s.productImgWrap}>
                    <img className={s.productImg} src={props.img} alt="" />
                    <h3 className={s.productTitle}>{props.title}</h3>
                    {props.isSale
                        ? <div className={s.productSales}>
                            <span className={s.productSalesPercent}>-50%</span>
                        </div>
                        : <div className={s.productNoSales}>
                            <span className={s.productSalesPercent}></span>
                        </div>
                    }
                    <Link to={`/product`} className={s.productLink}></Link>
                </div>
                <div className={s.productPriceWrap}>
                    <div className={s.productPriceInner}>
                        <div className={s.productPrice}>{props.newPrice}</div>
                        {props.oldPrice
                            ? <div className={s.productPriceSales}>{props.oldPrice}</div>
                            : <div className={s.productPriceSales}></div>
                        }

                    </div>

                    <Rating size="10px"/>

                </div>
            </div>
        </>
    );
}

export default ProductItem;