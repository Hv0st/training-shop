import s from './Share.module.css';
import shareImg from './assets/img/share-icon.svg';

function Share() {
    return (
        <div className={s.share}>
            <div className={s.shareWrapper}>
                <div className={s.container}>
                    <div className={s.top}>
                        <ul className={s.breadcrump}>
                            <li className={s.breadcrumpItem}>
                                <a className={s.breadcrumpLink} href="/#">Home</a>
                            </li>
                            <li className={s.breadcrumpItem}>
                                <a className={s.breadcrumpLink} href="/#">Women</a>
                            </li>
                        </ul>
                        <div className={s.shar}>
                            <img className={s.sharImg} src={shareImg} alt="" />
                            <span className={s.sharText}>Share</span>
                        </div>
                    </div>
                    <div className={s.bottom}>
                        <h2 className={s.shareTitle}>Women</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Share;