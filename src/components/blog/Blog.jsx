import s from './Blog.module.scss';
import BlogItem from '../blogItem/BlogItem';
import img1 from './assets/img/blog-img-1.jpg';
import img2 from './assets/img/blog-img-2.jpg';
import img3 from './assets/img/blog-img-3.jpg';

function Blog() {
    return (
        <section className={s.blog}>
            <div className={s.blogContainer}>
                <div className={s.blogWrapper}>
                    <div className={s.blogHeader}>
                        <h2 className={s.blogHeaderTitle}>LATEST FROM BLOG</h2>
                        <span className={s.blogHeaderSeeAll}>see all</span>
                    </div>
                    <div className={s.blogItems}>
                        <BlogItem img={img1} title="The Easiest Way to Break" text="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor" />
                        <BlogItem img={img2} title="The Easiest Way to Break" text="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor" />
                        <BlogItem img={img3} title="Recent Favorites On Repeat" text="But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;