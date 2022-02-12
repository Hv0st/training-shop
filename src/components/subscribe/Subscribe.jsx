import s from './Subscribe.module.scss';

function Subscribe() {
    return (
      <div className={s.subscribe}>
            <div className={s.wrapper}>
                <span className={s.text}>Special Offer</span>
                <h3 className={s.title}>Subscribe And <span className={s.titleSpan}>Get 10% Off</span></h3>
                <form  className={s.form} action="" method='post'></form>
                <input className={s.email} type='email' placeholder='Enter your email'/>
                <button className={s.btn}>subscribe</button>
          </div>
      </div>
    );
  }
  
  export default Subscribe;