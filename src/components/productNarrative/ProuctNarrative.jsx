import s from './ProductNarrative.module.scss';
import Rating from '../rating/Rating';

function ProductNarrative() {
    return (
        <div className={s.narrative} >
            <div className={s.narrativeContainer}>
                <div className={s.narrativeWrapper}>
                    <div className={s.narrativeLeft}>
                        <Rating size="10px" />
                        <span className={s.reviews}> 2 Reviews</span>
                    </div>
                    <h2 className={s.title}>Women's tracksuit Q109</h2>
                    <div className={s.narrativeRight}>
                        <p className={s.sku}>SKU: <span className={s.skuSpan}>777</span></p>
                        <p className={s.avail}>Availability:<span className={s.availSpan}>In Stock</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductNarrative;