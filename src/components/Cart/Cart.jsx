import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ saludo }) => {
  const { cart, totalPrice, deleteProductById, deleteProducts } = useContext(CartContext);

  return (
    <div>
      <div className="item-container">
        {saludo}
      </div>
      <div>
        <h2 style={{ textAlign: "center", fontFamily: " Verdana, Geneva, Tahoma, sans-serif", color: "gray" }}>Carrito de compras</h2>
        {
          cart.map((productCart) => (
            <div style={{
              display: "flex", justifyContent: "space-around", alignItems: "center",
              fontFamily: " Verdana, Geneva, Tahoma, sans-serif", fontSize: 14, border: "2px dashed gray", marginBottom: "6px"
            }}>
              <img src={productCart.image} alt="" width={100} />
              <p>{productCart.name}</p>
              <p>c/u ${productCart.price}</p>
              <p>Cantidad: {productCart.quantity}</p>
              <p>Precio parcial: ${productCart.quantity * productCart.price} </p>
              <button className="eliminar" onClick={() => deleteProductById(productCart.id)}><img src="/img/eliminar.png" width={20} /> Eliminar</button>
            </div>
          ))
        }
      </div>
      {(cart.length > 0) && (
        <div className="detalle">
          <p className="price" style={{ color: "gray", fontFamily: " Verdana, Geneva, Tahoma, sans-serif", fontSize: 14 }}>Precio total: ${totalPrice()}</p>
          <button className="comprar"><Link to="/checkout" className="comprar2">Continuar compra</Link></button>
          <button className="eliminar2" onClick={() => deleteProducts()}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  )
}

export default Cart
