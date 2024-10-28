import ArticleStyle from "../styles/article.module.css";

export default function Article(){
    return(
        <div className={ArticleStyle.container}>
            <div className={ArticleStyle.box1}>1</div>
            <div className={ArticleStyle.box2}>2</div>
        </div>
    )
}