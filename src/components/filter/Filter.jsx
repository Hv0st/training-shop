import s from './Filter.module.css';
import filterIcon from './assets/img/filter.svg';
import viewListImg from './assets/img/view-list.svg';
import viewGridImg from './assets/img/view-grid.svg';

function Filter() {
    return (
        <div className={s.filter}>
            <div className={s.wrapper}>
                <div className={s.filterSet}>
                    <img className={s.img} src={filterIcon} alt="Filter" />
                    <span className={s.filterText}>filter</span>
                </div>
                <div className={s.view}>
                    <img className={s.viewImg} src={viewListImg} alt="view list" />
                    <img className={s.viewImg} src={viewGridImg} alt="view grid" />
                </div>
            </div>
        </div>
    );
}

export default Filter;