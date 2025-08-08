import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import useProducts from "../../hooks/useProducts.js";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
  const { category } = useParams();
  const { products, loading } = useProducts(category);

  return (
    <div>
      <div className="item-container">
        {saludo}
      </div>
      <div>
        {
          loading ? <Loading /> :
            <ItemList products={products} />
        }
      </div>
    </div>
  );

};

export default ItemListContainer;
