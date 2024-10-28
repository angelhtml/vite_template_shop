import { FaMinus, FaPlus } from "react-icons/fa";
import counterStyle from "../styles/counter.module.css";
import { useState } from "react";

export default function Counter({Getcount}){
    const [count, setCount] = useState(1)

    const Handler = (data) => {
        if(data <= 0){
            setCount(1)
            Getcount(1)
        }
        else{
            setCount(Number(data))
            Getcount(Number(data))
        }
    }
    
    return(
        <div className={counterStyle.container}>
        <div className={counterStyle.counter}>
            <button onClick={() => Handler(count+1)} className={counterStyle.button}><FaPlus /></button>
            <input className={counterStyle.counter_input} onChange={(i) => Handler(i.target.value)} min={1} value={count} type="number" placeholder="1"/>
            <button onClick={() => Handler(count-1)} className={counterStyle.button}><FaMinus /></button>
        </div>
        </div>
    )
}