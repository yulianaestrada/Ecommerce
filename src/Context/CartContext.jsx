import { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

const addProductCart = (newProduct) => {
  const existingProduct = cart.find(p => p.id === newProduct.id);

  if (existingProduct) {
    const updatedCart = cart.map(p => 
      p.id === newProduct.id
        ? { ...p, quantity: p.quantity + newProduct.quantity }
        : p
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, newProduct]);
  }
};

  const totalQuantity = () => {
    const totalCarrito = cart.reduce((total, product) => total + product.quantity, 0);
    return totalCarrito;
  }

  const totalPrice = () => {
    const total = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    return total
  }

  const deleteProductById = (productId) => {
    const productsFilter = cart.filter((product) => product.id !== productId);
    setCart(productsFilter);
  }

  const deleteProducts = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ addProductCart, totalQuantity, totalPrice, deleteProductById, deleteProducts, cart }}>
      {children}
    </CartContext.Provider>
  )
};

export { CartContext, CartProvider };

