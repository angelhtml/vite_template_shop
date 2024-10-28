import productStyle from "../styles/product.module.css";

export default function Product({width= "28rem", image, title, price, through}){
    return(
        <div style={{width:width}} className={productStyle.container}>
            <div className={productStyle.box1}>
                <p>{title}</p>
                <div>
                    <span><span style={{color:"red",fontSize:"1.35rem"}}>{price}</span> تومان</span>
                    <span className={productStyle.out_price}>{through}</span>
                </div>
            </div>
            <div className={productStyle.box2}>
                <img src={image} alt="product"/>
            </div>
        </div>
    )
}