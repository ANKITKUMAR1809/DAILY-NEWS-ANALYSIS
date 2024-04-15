import css from './Card.module.css';
const Card=({imgsrc,newsTitle,newsSource,newsDesc,newsUrl})=>{
    return(
        <a href={newsUrl} className={css.link}>
        <div className={css.card}>
            <div className={css.cardHeader}>
                <img src={imgsrc} alt="" id="news-img"/>
            </div>
            <div className={css.cardContent}>
                <h3 id="news-title" className={css.h3}>{newsTitle}</h3>
                <h6 className={css.newsSource} id="news-source">{newsSource}</h6>
                <p className="news-desc" id="news-desc">{newsDesc}</p>
            </div>
        </div>
        </a>
    )
}
export default Card;