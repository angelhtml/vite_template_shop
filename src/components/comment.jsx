
import commentStyle from "../styles/comment.module.css";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";
import ReactStars from "react-stars";
import { useState } from "react";

export default function Comment({username,date,likes,rate,image,message,Liked}){
    const [like, setLike] = useState(false)
    return(
        <div className={commentStyle.container}>

            <div className={commentStyle.box1}>

                {/* user information */}
                <div className={commentStyle.user_info}>
                    <p>{username}</p>
                    <span>{date}</span>
                </div>

                {/* user rate */}
                <div  className={commentStyle.rates}>
                    <ReactStars edit={false} value={rate} count={5} size={25} color2={'red'} />
                </div>
                

                {/* user message */}
                <div className={commentStyle.message}>
                    
                    <p>{message}</p>

                    <div className={commentStyle.actions}>
                        <button onClick={()=> {setLike(!like); if(!like){Liked(likes+1)} else{Liked(likes)} }} className={commentStyle.replay_button}>{like ? <>{likes+1}<BsHandThumbsUpFill style={{color:"red"}}/></> : <>{likes}<BsHandThumbsUp /></>}</button>
                    </div>
                    
                </div>

            </div>

            {/* user image profile */}
            <div className={commentStyle.box2}>
                <img className={commentStyle.profile_pic} src={image} alt="profile"/>
            </div>

        </div>
    )
}