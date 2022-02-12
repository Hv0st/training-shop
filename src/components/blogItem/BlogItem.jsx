import s from './BlogItem.module.scss';

function BlogItem(props) {
    return (
        <div className={s.blogItem} >
            <div className={s.blogItemImgWrapper}>
                <img className={s.blogItemImg} src={props.img} alt="" />
                <div className={s.blogItemBanner}>
                    <h3 className={s.blogItemTitle}>{props.title}</h3>
                    <p className={s.blogItemText}>{props.text}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default BlogItem;