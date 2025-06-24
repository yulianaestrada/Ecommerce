import "./Navbar.css";
import ecommerceLogo from "../assets/logo.png";
import CartWidge from "./CartWidge";

const Navbar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={ecommerceLogo} alt="" />
        
        <ul className="categories">
            <li>Ropa</li>
            <li>Zapatos</li>
            <li>Juguetes</li>
            <li>Cuidado Corporal</li>
        </ul>
        <CartWidge/>
    </div>
  )
}

export default Navbar
