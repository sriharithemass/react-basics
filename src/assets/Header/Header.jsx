import reactIMG from "../Images/react.svg"
import "./Header.css"

export default function Header(){
    return(
    <header>
        <img className="logo" src={reactIMG} alt="" />
        <h1>I AM ATOMIC</h1>
    </header>
    )
}