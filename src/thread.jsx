import threadStyle from "./styles/thread.module.css";
import { useEffect, useRef, useState } from 'react';
import ReactStars from 'react-stars'


import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ColorPicker from "./components/colorPicker";
import { FaStar } from "react-icons/fa6";
import Counter from "./components/counter";
import { useParams } from "react-router-dom";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import Comment from "./components/comment";



export default function Thread(){

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // get the params from router
  let { threadId } = useParams();

    const images = [
        {
          original: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
          thumbnail: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
        },
        {
          original: "/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp",
          thumbnail: "/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp",
        },
        {
          original: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
          thumbnail: "/images/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
        },
    ];

    // rating stars
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    // comments
    const commnets = [
      {
        id: 0,
        username: "کاربر ناشناس",
        date: "1 ساعت پیش",
        likes: 999,
        rate: 2,
        image: "/public/images/testimonials-4.jpg",
        message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      },
      {
        id: 1,
        username: "کاربر ناشناس",
        date: "4 ساعت پیش",
        likes: 89,
        rate: 5,
        image: "/public/images/testimonials-4.jpg",
        message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      },
      {
        id: 2,
        username: "کاربر ناشناس",
        date: "2 ماه پیش",
        likes: 9,
        rate: 3.5,
        image: "/public/images/testimonials-4.jpg",
        message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
      }
    ]


    
    

    return(
        <div>
            <div className={threadStyle.spacer}></div>
            <div id="app" className={threadStyle.container}>

                <div className={threadStyle.box1}>
                  <div className={threadStyle.box1_content}>
                    <h1 className={threadStyle.title}>هدفون</h1>
                    <div className={threadStyle.pricebox}>
                      <span className={threadStyle.offprice}>1,000,000 تومان</span>
                      <span className={threadStyle.price}>10,000,000 تومان</span>
                    </div>
                    <div className={threadStyle.stars}><span>(24)</span><ReactStars edit={false} value={4.5} count={5} size={30} color2={'red'} /></div>
                    <ColorPicker Select={(i) => console.log(i)} colors={["purple", "blue", "gold","pink"]}/>
                    <Counter Getcount={(i) => console.log(i)}/>
                    <p className={threadStyle.description}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                  </div>
                </div>

                <div className={threadStyle.box2}>
                  <div className={threadStyle.gallery}><ImageGallery width="200px" height="400px" items={images} /></div>
                </div>

            </div>

            <div style={{width:"100%",height:"2rem"}}></div>

            <div className={threadStyle.comment_container}>

            <div className={threadStyle.line}></div>

              <h3>نظرات خریداران</h3>
              <textarea className={threadStyle.textarea} placeholder="دیدگاه شما راجع به این محصول چیست؟"/>

              <div className={threadStyle.sendbox}>
                <ReactStars onChange={ratingChanged} value={.5} count={5} size={35} color2={'red'} />
                <button className={threadStyle.send_button}><FaTelegramPlane />ارسال</button>
              </div>

              <div className={threadStyle.line}></div>

              {/* comments */}
              {commnets.map(i => 
                  <Comment 
                  /* props */
                  username= {i.username}
                  date= {i.date}
                  likes= {i.likes}
                  rate= {i.rate}
                  image= {i.image}
                  message= {i.message}
                  /* callbacks */
                  Liked={(i) => console.log(i)}
                />
              )}
              
            </div>
            
        </div>
    )
}