import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  collection, addDoc, getDoc, doc ,
  Timestamp, writeBatch
} from 'firebase/firestore'
import { db } from '../services/firebase/firebase';

import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

import ItemCheckout from '../components/ItemCheckout';
import ItemList from '../components/ItemList';

const Checkout = () => {
  const { cart, removeFromCart, clearCart, updateQuantityItem, getTotal } = useContext(CartContext);
  const { userData } = useContext(UserContext);

  let history = useHistory();

  console.log(cart);
  const completeOrder = () => {
    const objOrder = {
      buyer: { email: userData.email, name: userData.name },
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: getTotal(),
    };

    const batch = writeBatch(db)
    const outOfStock = []

    objOrder.items.forEach((prod, i) => {
      getDoc(doc(db, 'items', prod.item.id)).then(DocumentSnapshot => {
          if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
              batch.update(doc(db, 'items', DocumentSnapshot.id), {
                  stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
              })
          } else {
              outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
          }
      })
    })

    if(outOfStock.length === 0) {
      addDoc(collection(db, 'orders'), objOrder).then(() => {
        batch.commit().then(() => {
          console.log('success', 'La orden se ejecuto con exito');
          history.push("/success");
        })
      }).catch((error) => {
        console.log(error,'Error al ejecutar la orden')
      }).finally(() => {
          clearCart()
      })
    }
  };

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
      <div className="shadow-sm my-4 d-flex justify-content-between">
        <button className="btn btn-info" type="button" onClick={() => clearCart()} >Limpiar carrito</button>
        <h4>Total = $ { getTotal() } MXN</h4>
      </div>
      <div className="d-flex justify-content-end ">
        <button className="btn btn-success" type="button" onClick={() => completeOrder()} >Completar la orden </button>
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
