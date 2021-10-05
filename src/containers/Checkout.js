import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import ItemCheckout from '../components/ItemCheckout';
import ItemList from '../components/ItemList';

const Checkout = () => {
  const { cart, removeFromCart, clearCart, updateQuantityItem, getTotal } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="container">
      <h1>Carrito</h1>
      <div className="shadow-sm my-4">
        {
          cart.length === 0
            ? <h3 className="my-5 py-5 center">No hay productos en el carrito</h3>
            : cart.map((product) => <ItemCheckout key={product.item.id} item={product.item} removeFromCart={removeFromCart} updateQuantityItem={updateQuantityItem} quantity={product.quantity}/>)
        }
      </div>
      <div className="my-4 d-flex justify-content-between">
        <button className="btn btn-info" type="button" onClick={() => clearCart()} >Limpiar carrito</button>
        <h4>Total = $ { getTotal() } MXN</h4>
      </div>
      <div className="d-flex justify-content-end ">
        <Link to='/payment'><button className="btn btn-success" type="button" >Completar la orden </button></Link>
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
