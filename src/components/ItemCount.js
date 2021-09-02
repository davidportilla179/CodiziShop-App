import { useState } from 'react';

const ItemCount = ({ stock, setCartItems }) => {
  const [initial, setInitial] = useState(0);
  const reduceInitial = () => {
    if (initial === 0) return;
    setInitial(initial - 1);
  }

  const addInitial = () => {
    if (initial === stock) return;
    setInitial(initial + 1);
  }
  return (
    <div className="card border border-dark">
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          <img src="https://shop.codiziapp.com/wp-content/uploads/2021/07/its_python_tshirt_1.jpg" className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Hoddie Python</h5>
            <h6 className="card-subtitle">Stock: {stock}</h6>
            <div className="d-flex mt-3">
              <button className={stock ? "btn btn-danger" : "btn btn-secondary"} onClick={reduceInitial}>-</button>
              <p className="mx-5"> {initial} </p>
              <button className={stock ? "btn btn-success" : "btn btn-secondary"} onClick={addInitial}>+</button>
            </div>
            <button className="btn btn-outline-primary mt-3" onClick={() => setCartItems(initial)}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCount
