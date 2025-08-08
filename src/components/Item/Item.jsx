import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <div className="img-item-container">
        <Link to={"/detail/" + product.id}>
          <img className="img-item" src={product.image} width={200} />
        </Link>
      </div>
      <div className="item-content">
        <p className="item-name">{product.name}</p>
        <p className="item-description">{product.description}</p>
        <p className="item-price"><b>${product.price}</b></p>
        <p className="item-stock">Unidades disponibles: {product.stock}</p>
      </div>
    </div>
  );
};

export default Item;
