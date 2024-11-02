import { useState } from "react";
import switchStyle from "../styles/switch.module.css";
import {Switch} from "@chakra-ui/react";

export default function ToggelSwitch({title,Callback}){
    const [on, setOn] = useState(false)

    const Handler = (i) => {
        Callback(i)
        setOn(!on)
    }
    return(
        <div className={switchStyle.container}>
            <Switch onChange={() => Handler(!on)}/>
            <span>{title}</span>
        </div>
    )
}