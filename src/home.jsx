import { useEffect } from "react";
import Banner1 from "./components/banner1";
import CategoryCard from "./components/categoryCard";
import Hero from "./components/hero";
import Offer from "./components/offer";
import Tab from "./components/tab";
import TopArticle from "./components/topArticle";

export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div>
            <div style={{height:"5rem",width:"100%"}}></div>
            <Hero 
                bg={`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFBB33'/%3E%3Cstop offset='1' stop-color='%23FF00FB'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`}
            />
            <TopArticle props={[
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
            ]}/>
            <Offer 
                off="20% تخفیف" 
                title1="بهترین قیمت" 
                date="24 مرداد 1403" 
                image="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp"
                title2="حراج تابستانه" 
                description="بهترین هدفون های بازار" 
            />

            <div className="wrap_container">
                <CategoryCard title="بهترین محصولات دیجیتال" image="/images/banner2-1.avif" offer="20 درصد تخفیف"/>
                <CategoryCard title="بهترین کنسول ها" image="/images/banner2-2.avif" offer="2 درصد تخفیف"/>
                <CategoryCard title="بهترین موبایل ها" image="/images/banner2-3.avif" />
            </div>

            <Banner1 
                image="/images/banner3.webp" 
                width="83%"
                title="فروش لوازم جانبی اپل"
                description="شروع از 100,000 تومان"
            />

            <Tab 
                width="83%"
                tabs= {["پر فروش ترین ها", "ارزان ترین ها", "جدید ترین ها"]}
            />
            
        </div>
    )
}