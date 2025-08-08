import "./Navbar.css";
import ecommerceLogo from "../../assets/logo.png";
import CartWidge from "../CartWidge/CartWidge";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/products">
        <img className="logo" src={ecommerceLogo} alt="" />
      </Link>

      <ul className="categories">
        <li>
          <Link to="/category/ropa" className="link">Ropa</Link>
        </li>
        <li>
          <Link to="/category/zapatos" className="link">Zapatos</Link>
        </li>
        <li>
          <Link to="/category/juguetes" className="link">Juguetes</Link>
        </li>
        <li>
          <Link to="/category/cuidado" className="link">Cuidado personal y corporal</Link>
        </li>
      </ul>
      <CartWidge />
    </div>
  )
}

export default Navbar
