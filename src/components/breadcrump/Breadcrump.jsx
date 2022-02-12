import  s from './Breadcrump.module.scss';

function Breadcrump() {
    return (
        <div className={s.breadcrump}>
          <ul className={s.breadcrumpList}>
            <li className={`${s.breadcrumpItem} ${s.breadcrumpItemActive}`}>
              <span className={s.breadcrumpText}>NEW ARRIVALS</span>
            </li>
            <li className={s.breadcrumpItem}>
              <span className={s.breadcrumpText}>SPECIALS</span>
            </li>
            <li className={s.breadcrumpItem}>
              <span className={s.breadcrumpText}>BESTSELLERS</span>
            </li>
            <li className={s.breadcrumpItem}>
              <span className={s.breadcrumpText}>MOST VIEWED</span>
            </li>
            <li className={s.breadcrumpItem}>
              <span className={s.breadcrumpText}>MOST VIEWED</span>
            </li>
          </ul>
        </div>
    );
  }
  
  export default Breadcrump;
