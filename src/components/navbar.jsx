import NavbarStyle from "../styles/navbar.module.css";
import { AiOutlineShopping } from "react-icons/ai";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Select,
  } from '@chakra-ui/react'
import { useRef, useState } from "react";
import ArticleCase from "./articleCase";
import {Link} from 'react-router-dom';
import Navigation from "./Navigation";
import { motion } from "framer-motion"

export default function Navbar({logo,name,cart}){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    const [category, setCategory] = useState(false)

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    }

    // navigation callback for mobile screen
    const NavigationHandler = (navigate) =>{
        if(navigate == "category"){
            setCategory(!category)
        }
        console.log(navigate)
    }

    return(
        <>
        <div className={NavbarStyle.navbar}>

            <div className={NavbarStyle.box1}>
                <img className={NavbarStyle.logo} src={logo} alt="logo"/>
                <span>{name}</span>
            </div>

            <div className={NavbarStyle.box2}>

                <button ref={btnRef} onClick={onOpen} className={NavbarStyle.cart_button}>
                <span className={NavbarStyle.count}>{cart}</span>
                    <AiOutlineShopping className={NavbarStyle.cart_icon}/>
                </button>

                <button className={NavbarStyle.cart_button}>
                    <FaSearch style={{fontSize:"1.25rem"}} className={NavbarStyle.user_icon}/>
                </button>

                <button className={NavbarStyle.cart_button}>
                    <FaRegUser className={NavbarStyle.user_icon}/>
                </button>

                <div style={{display:"flex",justifyContent:"center"}}>
                    <button className={NavbarStyle.mega_case}>
                        صفحه ها
                    </button>
                    <div className={NavbarStyle.pages}>
                        <Link className={NavbarStyle.Link} to='/something'>404</Link>
                        <Link className={NavbarStyle.Link} to='/something'>محصولات</Link>
                        <Link className={NavbarStyle.Link} to='/something'>خدملت</Link>
                        <Link className={NavbarStyle.Link} to='/something'>داشبورد</Link>
                    </div>
                </div>
                

                <button onClick={()=> setCategory(!category)} >
                    <span>محصولات</span>
                </button>

                <button>
                    <span>ارتباط با ما</span>
                </button>

                <button>
                    <Link to={"/"}>خانه</Link>
                </button>

            </div>
        </div>

        <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent colorScheme="whiteAlpha">
          <DrawerHeader style={{textAlign:"center",marginTop:"2rem"}}>موجودی سبد خرید شما <span style={{color:"red",fontSize:"1.8rem"}}>{cart} محصول</span></DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            {cart == 0 ? 
            <div className={NavbarStyle.emptybox}>
                <AiOutlineShopping style={{fontSize:"20rem",color:"grey"}}/>
                <p style={{fontSize:"1.4rem"}}>هنوز خریدی انجام نداده اید</p>
                <button  className={NavbarStyle.buy_button}>خرید</button>
            </div> 
            : 
            <div>
                <ArticleCase id={0} name={"اسپیکر"} count={1} image={"/images/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp"}/>
            </div>
            }
          </DrawerBody>

          <DrawerFooter>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

            
        {/* category menu drop down */}    
        <motion.div 
        animate={category ? "open" : "closed"} 
        variants={variants}
        onClick={()=> setCategory(!category)} 
        className={NavbarStyle.category_container}>
            <div onClick={(e) => e.stopPropagation()} className={NavbarStyle.category_box}>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/thread/article'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>قطعات کامپیوتر</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>هندزفری</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>شارژر</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>کابل شارژ</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>باتری موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>لپ تاپ</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>هدفون</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>پاوربانک</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موس</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>کیبورد</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>پاور</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>قاب گوشی</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>انواع گلس</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>کابل تبدیل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                <div className={NavbarStyle.category_linkbox}>
                    <Link onClick={()=> setCategory(!category)} className={NavbarStyle.category_link} to='/something'>موبایل</Link>
                </div>
                
            </div>
        </motion.div>

      <Navigation navigateHandeler={(i)=> NavigationHandler(i)}/>
        </>
    )
}