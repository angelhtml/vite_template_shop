
import NavStyle from "../styles/Navigation.module.css";
import { BiCategory, BiQuestionMark, BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineHandshake } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navigation({navigateHandeler}){

    return(
        <div className={NavStyle.navigation}>

            <button onClick={()=> navigateHandeler("category")} className={NavStyle.nav1}>
                <BiCategory className={NavStyle.icon}/>
                <span>دسته بندی</span>
            </button>

            <button className={NavStyle.nav2}>
                <MdOutlineHandshake className={NavStyle.icon}/>
                <span>همکاری</span>
            </button>

            <div className={NavStyle.nav3}>
                <Link to="/"><img src="/logo1.png" alt="icon"/></Link>
            </div>

            <button className={NavStyle.nav4}>
                <BiQuestionMark className={NavStyle.icon}/>
                <span>سوالات</span>
            </button>

            <button className={NavStyle.nav5}>
                <IoIosSearch style={{scale:.8}} className={NavStyle.icon}/>
                <span>جست و جو</span>
            </button>

        </div>
    )
}