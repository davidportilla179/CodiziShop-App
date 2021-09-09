import { useState } from "react";

const ItemDetail = ({ item, setCartItems }) => {
  const [initial, setInitial] = useState(0);
  const reduceInitial = () => {
    if (initial === 0) return;
    setInitial(initial - 1);
  };

  const addInitial = (stock) => {
    if (initial === stock) return;
    setInitial(initial + 1);
  };
  return (
    <>
      <div className="col-md-4" key={item.id}>
        <div className="card mb-4 shadow-sm">
          <img
            src={item.pictureUrl}
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <div className="col-md-6">
                <p className="card-text">{item.price}</p>
              </div>
            </div>
            <p className="card-text">{item.description}</p>
            <div className="d-flex mt-3">
              <button className={item.stock ? "btn btn-danger" : "btn btn-secondary"} onClick={reduceInitial}>-</button>
              <p className="mx-5"> {initial} </p>
              <button className={item.stock ? "btn btn-success" : "btn btn-secondary"} onClick={() => addInitial(item.stock)}>+</button>
            </div>
            <button className="btn btn-outline-primary mt-3" onClick={() => setCartItems(initial)}>Añadir al carrito</button>
            <p className="text-muted text-center border border-secondary mt-4">Stock: {item.stock} left</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
