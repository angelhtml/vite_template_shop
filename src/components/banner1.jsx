
export default function Banner1({image,width= "85%",title,description}){

    return(
        <>
            <div className="banner1">
                <img width={width} src={image} alt="banner-1"/>
            </div>
            <div style={{marginLeft:`calc(((100% - ${width}) / 2) + 1rem)`}} className="banner1_content">
                    <h3>{title}</h3>
                    <span>{description}</span>
                    <a href="#">خرید</a>
            </div>
        </>
    )
}