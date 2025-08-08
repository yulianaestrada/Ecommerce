import carrito from "../../assets/carrito.png";
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react'
import "./CartWidge.css";
import { Link } from "react-router-dom";

const CartWidge = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cartwidge">
      <img src={carrito} width={70} height={70} />
      <p className="total">{totalQuantity()}</p>
    </Link>
  )
}

export default CartWidge
