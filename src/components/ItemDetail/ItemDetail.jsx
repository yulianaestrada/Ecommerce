import React, { useContext } from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ product = {} }) => {
  const { addProductCart } = useContext(CartContext);

  const addProduct = (quantity) => {
    const productCart = { ...product, quantity }
    //añadir al carrito
    addProductCart(productCart);
  }

  return (

    <div className="item-card2">
      <div className="img-item-container2">
        <img src={product.image} alt="" width={380} />
      </div>
      <div className="item-content2">
        <p className="item-name2">{product.name}</p>
        <p className="item-description2">{product.description2}</p>
        <p className="item-price2"><b>${product.price}</b></p>

        {(product.category === "ropa" || product.category === "zapatos") && (
          <img src={product.imagen2} alt="" width={350} height={150} className='imagenTalla' />
        )}

        <ItemCount stock={product.stock} addProduct={addProduct} />
      </div>
    </div>
  )
}

export default ItemDetail
