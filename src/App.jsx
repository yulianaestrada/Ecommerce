import './App.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const saludo = "Hola mundo";

  return (
    <div className="app-container">
      <Navbar />
      <ItemListContainer saludo={<span style={{ opacity: 0 }}>.</span>} />
    </div >
  )
}

export default App
