import articleCaseStyle from "../styles/articlecase.module.css";
import { FaTrash, FaEye } from "react-icons/fa";

export default function ArticleCase({id,name,count,image}){
    return(
        <div className={articleCaseStyle.container}>
            <div className={articleCaseStyle.iconbox}>
                <button><FaTrash style={{color:"red",fontSize:"1.35rem"}}/></button>
                <button><FaEye style={{color:"grey",fontSize:"1.35rem"}}/></button>
            </div>
            <div className={articleCaseStyle.box}>
                <span style={{fontSize:"1.3rem"}}>{name}</span>
                <span><span style={{color:"red",fontSize:"2rem"}}>{count}</span> عدد</span>
            </div>
            <img className={articleCaseStyle.image} src={image} alt="article"/>
        </div>
    )
}