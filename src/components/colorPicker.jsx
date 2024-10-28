import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import colorStyle from "../styles/colorpicker.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function ColorPicker({colors,Select}){
    const [selected, setSelected] = useState()
    const [isset, setIsset] = useState(false)

    return(
        <div className={colorStyle.color_container}>
            <AnimatePresence>
            {colors && colors.map(i => 
                <button 
                value={i} onClick={(i) => {Select(i.target.value); setSelected(i.target.value); setIsset(!isset)}} 
                style={{backgroundColor: i,border: selected == i ? "1px solid silver": "1px solid white",transform: selected == i ? "translateY(-5px)" : "translateY(0px)"}} 
                key={i} 
                className={colorStyle.color_button}>
                    {selected == i ? <motion.div exit={{opacity:0, scale:.1}} initial={{opacity:0,scale:.1}} animate={{opacity:1,scale:1}} transition={{duration:1}}><FaRegCircleCheck className={colorStyle.check}/></motion.div> : <></>}
                </button>
            )}
            </AnimatePresence>
        </div>
    )
}