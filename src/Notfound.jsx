import notfoundStyle from "./styles/notfound.module.css";

export default function Notfound(){
    return(
        <div className={notfoundStyle.container}>
            <h1>404</h1>
            <p>:( موردی یافت نشد </p>
        </div>
    )
}