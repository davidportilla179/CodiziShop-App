import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import ItemCheckout from '../components/ItemCheckout';
import ItemList from '../components/ItemList';

const Checkout = () => {
  const { cart, removeFromCart, updateQuantityItem } = useContext(CartContext);
  return (
    <div className="container ">
      <h1>Carrito</h1>
      <div className="shadow-sm mt-4">
        {
          cart.length === 0
            ? <h3 className="my-5 py-5 center">No hay productos en el carrito</h3>
            : cart.map((product) => <ItemCheckout key={product.item.id} item={product.item} removeFromCart={removeFromCart} updateQuantityItem={updateQuantityItem} quantity={product.quantity}/>)
        }
      </div>

      <h2>Productos que te pueden interesar</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ItemList />
        </div>
      </div>
    </div>
  )
}

export default Checkout
