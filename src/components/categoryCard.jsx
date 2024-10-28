import categoryStyle from '../styles/category.module.css';

export default function CategoryCard({title,image,offer}){
    return(
        <div className={categoryStyle.container}>
            <img src={image} alt="product"/>
            <div className={categoryStyle.description_box}>
                <span className={categoryStyle.title}>{title}</span>
                {offer && <span className={categoryStyle.off}>{offer}</span>}
            </div>
        </div>
    )
}