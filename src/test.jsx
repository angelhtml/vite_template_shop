import { Routes, Route, useParams } from 'react-router-dom';

export default function Test(){
    let { userId } = useParams();
    console.log(useParams())
    return(
        <div style={{backgroundColor:"orange"}}>test {userId}</div>
    )
}