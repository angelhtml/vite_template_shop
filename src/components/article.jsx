import ArticleStyle from "../styles/article.module.css";
import ArticleCard from "./articleCard";
import { FaBars } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Filters from "./filters";
import { motion } from "framer-motion"

export default function Article(){

    const [menu, setMenu] = useState(false)

    let {articleId} = useParams()

    const variants = {
        open: { opacity: 1, y: 0, x: 0, scale: 1 },
        closed: { opacity: 0, y: "35vh", x: "95%", scale: 0 },
    }

    const data = [
        {
            id: 0,
            title: "ساعت هوشمند",
            price: "10,000,000",
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/58a1ed6ec8dd3432c6fa81d7.png",
            link: "/thread/ساعت_هوشمند"
        },
        {
            id: 1,
            title:"هدفون",
            price: "1,000,000",
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
            link: "/thread/هدفون_مدل5453"
        },
        {
            id: 2,
            title: "اسپیکر",
            price: "10,000,000",
            colors: ["green","pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp",
            link: "/thread/اسپیکر_مدل0076"
        },
        {
            id: 3,
            title: "هندزفری",
            price: "999,000,000", 
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
            link: "/thread/هندزفری_مدل67"
        },
        {
            id: 4,
            title: "ساعت هوشمند",
            price: "10,000,000",
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/58a1ed6ec8dd3432c6fa81d7.png",
            link: "/thread/ساعت_هوشمند_مدل776"
        },
        {
            id: 5,
            title:"هدفون",
            price: "1,000,000",
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
            link: "/thread/هدفون_مدل_544"
        },
        {
            id: 6,
            title: "ساعت هوشمند",
            price: "10,000,000",
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/58a1ed6ec8dd3432c6fa81d7.png",
            link: "/thread/ساعت_هوشمند_مدل776"
        },
        {
            id: 7,
            title:"هدفون",
            price: "1,000,000",
            colors: ["pink","red","blue","gold","purple","yellow","lime"],
            image: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
            link: "/thread/هدفون_مدل_544"
        }
    ]
    return(
        <div className={ArticleStyle.container}>

            <div className={ArticleStyle.box1}>
                <div className={ArticleStyle.card_conatiner}>
                    {data && data.map(i => <div key={i.id}><ArticleCard id={i.id} title={i.title} price={i.price} colors={i.colors} image={i.image} link={i.link}/></div>)}
                </div>
            </div>

            <div className={ArticleStyle.box2}>
                <Filters />
            </div>

            <button onClick={()=> setMenu(!menu)} className={ArticleStyle.filter_button}>
                <FaBars />
            </button>

            <motion.div 
                onClick={() => setMenu(!menu)} 
                animate={menu ? "open" : "closed"} 
                variants={variants} 
                transition={{ duration: .5 }}
                className={ArticleStyle.category_container}>
                <div onClick={(e) => e.stopPropagation()} className={ArticleStyle.category_box}>
                    <Filters />
                </div>
            </motion.div>

        </div>
    )
}