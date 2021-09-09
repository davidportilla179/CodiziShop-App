import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [stock, setStock] = useState(5);
  const [cartItems, setCartItems] = useState(0);
  return (
    <div>
      <NavBar cartItems={cartItems} />
      <ItemListContainer greeting="Bienvenidos a CODIZI Shop!!!" setCartItems={setCartItems}/>
      <ItemDetailContainer setCartItems={setCartItems}/>
      <ItemCount stock={stock} setCartItems={setCartItems} />
      <ItemCount stock={0} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
