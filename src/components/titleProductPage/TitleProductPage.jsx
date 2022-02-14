import s from './TitleProductPage.module.scss';

function TitleProductPage(props) {
    return (
        <div className={s.titleProductPage}>
            <div className={s.container}>
                <h2 className={s.title}>{props.title}</h2>
            </div>
        </div>
    );
  }
  
  export default TitleProductPage;