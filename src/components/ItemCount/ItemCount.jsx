import { useState } from 'react'
import './ItemCount.css';

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(0);

    const handleClickRest = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(count)
        }
    }

    const handleClickSum = () => {
        if (count < stock)
            setCount(count + 1);
    }

    return (
        <div className='carrito'>
            <button onClick={handleClickRest} className='boton1'>-</button>
            <p className='count'>{count}</p>
            <button onClick={handleClickSum} className='boton1'>+</button>
            <button onClick={() => addProduct(count)} className='boton2'>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount
