import topArtStyle from "../styles/toparticle.module.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/slider.css';
import 'swiper/css/pagination';

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { useRef, useState } from 'react';
import { CgChevronRight, CgChevronLeft } from "react-icons/cg";
import ArticleCard from "./articleCard";

export default function TopArticle({props}){

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    const [swiperRef, setSwiperRef] = useState(null);

    const pagination = {
        clickable: true,
        //type: 'fraction',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return(
        <div>
            <div className={topArtStyle.top_title}>
                <h2>محصولات پر فروش</h2>
                <span>با بهترین قیمت</span>
            </div>

            <div className={topArtStyle.container}>
            <div className={topArtStyle.prev}  ref={navigationPrevRef}><CgChevronLeft /></div>
            <div className={topArtStyle.next} ref={navigationNextRef}><CgChevronRight /></div>
            <Swiper style={{height: "25rem"}}
            slidesPerView={1}
            spaceBetween={1}
            centeredSlides={false}
            breakpoints={{
                700: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                870: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                1060: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },
                1500: {
                  slidesPerView: 4,
                  spaceBetween: 12,
                },
                1600: {
                  slidesPerView: 5,
                  spaceBetween: 12,
                }
              }}
                onSwiper={setSwiperRef}
                autoplay={{delay: 3500, disableOnInteraction: false,}}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                    }} 
                modules={[ Navigation, Autoplay]} loop={true} pagination={pagination} className="mySwiper">

                  {props && props.map(i => 
                       <SwiperSlide key={i.id}>
                      <ArticleCard id={i.id} title={i.title} price={i.price} colors={i.colors} image={i.image} link={i.link}/>
                    </SwiperSlide>
                   )
                  }
                  
            </Swiper>
        </div>

        </div>
    )
}