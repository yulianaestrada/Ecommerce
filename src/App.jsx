import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemListWithSearch } from './components/ItemList/ItemList';
import ItemDetailContainer from './components/Itemdetailcontainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  const saludo = "Hola mundo";

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/products" element={<ItemListContainer saludo={<span style={{ opacity: 0 }}>.</span>} />} />
            <Route path="/category/:category" element={<ItemListContainer saludo={<span style={{ opacity: 0 }}>.</span>} />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer saludo={<span style={{ opacity: 0 }}>.</span>} />} />
            <Route path="/cart" element={<Cart saludo={<span style={{ opacity: 0 }}>.</span>} />} />
            <Route path="/checkout" element={<Checkout saludo={<span style={{ opacity: 0 }}>.</span>} />} />
          </Routes>
        </div >
      </CartProvider>
    </BrowserRouter>
  )
}
export default App
