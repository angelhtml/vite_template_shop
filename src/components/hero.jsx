import heroStyle from "../styles/hero.module.css";

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/slider.css';

// import required modules
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';

import { FaRegCircle, FaTimes } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";

import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export default function Hero({bg}){
    return(
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div style={{backgroundImage: bg}} className={heroStyle.hero_container}>
            

            <div className={heroStyle.part1}>
                <MouseParallaxChild factorX={0.3} factorY={0.5} style={{zIndex:"0"}}>
                    <FaRegCircle style={{color:"white",fontSize:"2rem",position:"absolute",top:"10rem",left:"10vw"}} />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={-0.5} factorY={-0.3} style={{zIndex:"0"}}>
                    <FaTimes style={{color:"whitesmoke",fontSize:"2rem",position:"absolute",top:"10rem",left:"10vw"}} />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={-0.9} factorY={0.9} style={{zIndex:"0"}}>
                    <AiOutlineShopping style={{color:"whitesmoke",fontSize:"2rem",position:"absolute",top:"30rem",left:"10vw"}} />
                </MouseParallaxChild>

                <div className={heroStyle.hero_title}>
                    <MouseParallaxChild factorX={0} factorY={0.45} style={{zIndex:"0"}}>
                    <p>بهترین محصولات</p>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0} factorY={0.7} style={{zIndex:"0"}}>
                    <h3>فروش تابستانه</h3>
                    </MouseParallaxChild>
                    <MouseParallaxChild factorX={0.1} factorY={-0.9} style={{zIndex:"0"}}>
                    <h1>پر تخفیف</h1>
                    </MouseParallaxChild>
                    <center>
                        <button style={{width:"8rem",marginTop:"8rem"}} className="main_button">خرید</button>
                    </center> 
                </div>

                <MouseParallaxChild factorX={-0.3} factorY={-0.5} style={{zIndex:"0"}}>
                    <FaRegCircle style={{color:"whitesmoke",fontSize:"2rem",position:"absolute",top:"30rem",left:"100%"}} />
                </MouseParallaxChild>

                <MouseParallaxChild factorX={0.5} factorY={0.3} style={{zIndex:"0"}}>
                    <FaTimes style={{color:"whitesmoke",fontSize:"2rem",position:"absolute",top:"30rem",left:"100%"}} />
                </MouseParallaxChild>

                <MouseParallaxChild factorX={0.9} factorY={0.9} style={{zIndex:"0"}}>
                    <AiOutlineShopping style={{color:"whitesmoke",fontSize:"2rem",position:"absolute",top:"10rem",left:"100%"}} />
                </MouseParallaxChild>

            </div>

            <div className={heroStyle.part2}>
                <div style={{width:"100%"}}>
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination, Autoplay, Mousewheel]}
                        className="mySwiper"
                        autoplay={{delay: 2500, disableOnInteraction: false,}}
                        loop={true}
                        mousewheel={true}
                    >
                        <SwiperSlide>
                            <img className={heroStyle.article_img} src="/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp" alt="article"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className={heroStyle.article_img} src="/images/58a1ed6ec8dd3432c6fa81d7.png" alt="article"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className={heroStyle.article_img} src="/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp" alt="article"/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img className={heroStyle.article_img} src="/images/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp" alt="article"/>
                        </SwiperSlide>
    
                    </Swiper>
                </div>
            </div>
            
        </div>
        </MouseParallaxContainer>
    )
}