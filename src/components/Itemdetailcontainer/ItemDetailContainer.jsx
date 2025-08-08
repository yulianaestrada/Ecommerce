import React from 'react'
import useProduct from '../../hooks/useProduct.js'
import Loading from '../Loading/Loading';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ saludo }) => {
  const { productId } = useParams();
  const { product, loading } = useProduct(productId);

  console.log
  return (
    <div>
      <div className="item-container">
        {saludo}
      </div>
      <div>
        {
          loading ? <Loading /> : <ItemDetail product={product} />
        }
      </div>
    </div>
  )
}

export default ItemDetailContainer
