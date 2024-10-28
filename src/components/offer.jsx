import offerStyle from "../styles/offer.module.css";

export default function Offer({off,title1,date,image,title2,description}){
    return(
        <div className={offerStyle.offer_container}>

            <div className={offerStyle.offer_box1}>
                <div className={offerStyle.box1_des}>
                    <span>{off}</span>
                    <h1>{title1}</h1>
                    <span>{date}</span>
                </div>
            </div>

            <div className={offerStyle.offer_box2}>
                <img src={image} alt="photo"/>
            </div>

            <div className={offerStyle.offer_box3}>
                <div className={offerStyle.box2_des}>
                    <h1>{title2}</h1>
                    <span>{description}</span>
                    <button style={{backgroundColor:"white",color:"black"}} class="main_button">خرید</button>
                </div>
            </div>

        </div>
    )
}