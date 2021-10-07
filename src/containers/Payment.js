import { useState, useRef, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { CartContext } from '../context/CartContext';

import { PayPalButton } from 'react-paypal-button-v2';
import {
  collection, addDoc, getDoc, doc ,
  Timestamp, writeBatch
} from 'firebase/firestore'
import { db } from '../services/firebase/firebase';

const ItemPayment = ({ item, quantity }) => {
  return (
    <div className="card shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-3">
          <img
            src={item.pictureUrl}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">$ {item.price}.00 MXN</p>
          </div>
        </div>
        <div className="col-md-3">
          <p>Cantidad: {quantity} </p>
          <p>$ {quantity * item.price}.00 MXN </p>
        </div>
      </div>
    </div>
  )
};

const Payment = () => {
  const [buyerInfo, setBuyerInfo] = useState(undefined);
  const form = useRef(null);
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const history = useHistory();

  const paypalOptions = {
    cliendId: process.env.REACT_APP_cliendIdPaypal,
    intent: 'capture',
    currency: 'MXN',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buyerInfo) {
      setBuyerInfo(undefined);
    }else{
      const formData = new FormData(form.current);
      const buyer = {
        'name': formData.get('name'),
        'email': formData.get('email'),
        'address': formData.get('address'),
        'city': formData.get('city'),
        'country': formData.get('country'),
        'state': formData.get('state'),
        'cp': formData.get('cp'),
        'phone': formData.get('phone'),
      }
      setBuyerInfo(buyer);
    }
  }

  const completeOrder = (data) => {
    if(data.status === 'COMPLETED'){
      const objOrder = {
        buyer: buyerInfo,
        items: cart,
        date: Timestamp.fromDate(new Date()),
        total: getTotal(),
        payment: data
      }

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
    }
  };

  return (
    <div className="container my-4">
      <div className="row mt-4">
        <div className="col-md-7">
          <h3 className="mb-4">Llena tu información:</h3>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre Completo</label>
              <input type="text" className="form-control" placeholder="Nombre Completo" name="name" id="name" defaultValue={buyerInfo?.name} required disabled={buyerInfo?.name ? true : false} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electronico</label>
              <input type="text" className="form-control" placeholder="Correo Electronico" name="email" id="email" defaultValue={buyerInfo?.email} required disabled={buyerInfo?.email ? true : false}/>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Dirección</label>
              <input type="text" className="form-control" placeholder="Dirección" name="address" id="address" defaultValue={buyerInfo?.address} required disabled={buyerInfo?.address ? true : false}  />
            </div>
            <div className="mb-3">
              <label htmlFor="country" className="form-label">Pais</label>
              <input type="text" className="form-control" placeholder="Pais" name="country" id="country" defaultValue={buyerInfo?.country} required disabled={buyerInfo?.country ? true : false} />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">Estado</label>
              <input type="text" className="form-control" placeholder="Estado" name="state" id="state" defaultValue={buyerInfo?.state} required disabled={buyerInfo?.state ? true : false} />
            </div>
            <div className="mb-3">
              <label htmlFor="cp" className="form-label">Codigo Postal</label>
              <input type="number" className="form-control" placeholder="Codigo Postal" name="cp" id="cp" defaultValue={buyerInfo?.cp} required disabled={buyerInfo?.cp ? true : false} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Telefono</label>
              <input type="number" className="form-control" placeholder="Telefono" name="phone" id="phone" defaultValue={buyerInfo?.phone} required disabled={buyerInfo?.phone ? true : false} />
            </div>
            <button className="btn btn-dark" type="submit" >{buyerInfo ? "Actualizar información": "Confirmar información"} </button>
          </form>
        </div>
        <div className="col-md-5">
          <h3 className="mb-4">Pedido:</h3>
          <div className="shadow-sm my-4">
            {
              cart.map((product) => <ItemPayment key={product.item.id} item={product.item} quantity={product.quantity}/>)
            }
          </div>
          <div className="my-4 d-flex justify-content-between">
            <Link to="/cart">
              <button className="btn btn-dark" type="button" > Regresar al checkout </button>
            </Link>
            <h4>Total = $ { getTotal() } MXN</h4>
          </div>

          {
            buyerInfo &&
              (
                <>
                  <h3 className="mb-4">Método de pago:</h3>
                  <div className="d-grid mb-4">
                    <button className="btn btn-success pt-2" type="submit" onClick={()=>completeOrder({details:"Pagar al Recibir", status: "COMPLETED"})} > <p className="h5">Pagar al recibir</p> </button>
                  </div>
                  <PayPalButton
                    paypalOptions={paypalOptions}
                    buttonStyles={buttonStyles}
                    amount={getTotal()}
                    onSuccess={data => completeOrder(data)}
                    onError={error => console.log(error)}
                    onCancel={data => console.log(data)}
                  />
                </>
              )
          }

        </div>
      </div>
    </div>
  )
}

export default Payment;
