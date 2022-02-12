import s from './Blog.module.scss';
import img1 from './assets/img/blog-img-1.jpg';
import img2 from './assets/img/blog-img-2.jpg';
import img3 from './assets/img/blog-img-3.jpg';

function Blog() {
    return (
        <div className={s.blog} >
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.top}>
                    <h2 className={s.title}>LATEST FROM BLOG</h2>
                    <span className={s.seeAll}>see all</span>
                    </div>
                    <div className={s.imgList}>
                            <div className={s.imgWrap}>
                                <img className={s.img} src={img1} alt="week to break" />
                                <div className={s.banner}>
                                    <h3 className={s.subtitle}>The Easiest Way to Break</h3>
                                    <p className={s.text}>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                                </div>
                            </div>
                            <div className={s.imgWrap}>
                                <img className={s.img} src={img2} alt="wedding season" />
                                <div className={s.banner}>
                                    <h3 className={s.subtitle}>Wedding Season</h3>
                                    <p className={s.text}>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                                </div>
                            </div>
                            <div className={s.imgWrap}>
                                <img className={s.img} src={img3} alt=" faorites on repeat" />
                                <div className={s.banner}>
                                    <h3 className={s.subtitle}>Recent Favorites On Repeat</h3>
                                    <p className={s.text}>But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor</p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;