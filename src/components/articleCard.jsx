import { useState } from "react";
import artCartStyle from "../styles/articlecard.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function ArticleCard({id,title,price,colors,image,link}){

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
      }

    const [isOpen, setIsOpen] = useState(false)

    return(
        <Link id={id} to={link}>
        <div  onMouseLeave={()=> setIsOpen(false)} onMouseEnter={()=> setIsOpen(true)} className={artCartStyle.container}>

            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className={artCartStyle.color_container}>
                {colors && colors.slice(0, 9).map(i=> <div  key={i} style={{backgroundColor: i}} className={artCartStyle.colors}></div>)}
            </motion.div>

            <img className={artCartStyle.image} src={image} alt="product"/>
            <div className={artCartStyle.description}>
                <p className={artCartStyle.title}>{title}</p>
                <span className={artCartStyle.price}>{price} تومان</span>
            </div>
            
        </div>
        </Link>
    )
}