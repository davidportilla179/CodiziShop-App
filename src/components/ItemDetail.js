import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const itemsArray = [
  { id: 1, title: "T-shirt", category: "tshirts", description: "Its a tshirt", stock: 10, price: "$299.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/machine_learning_tshirt_2.jpg" },
  { id: 2, title: "Hoddie", category: "hoddies", description: "Its a hoddie", stock: 0, price: "$599.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/its_python_tshirt_1.jpg" },
  { id: 3, title: "Shirt", category: "tshirts", description: "Its a shirt", stock: 2 , price: "$199.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/microcontroller_electronic_tshirt_2.jpg"},
];

function getListItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsArray), 2000);
  });
}

const ItemDetail = ({ id, setCartItems }) => {
  const [item, setItem] = useState();
  const [initial, setInitial] = useState(0);

  useEffect(() => {
    const list = getListItems();
    list
      .then((data) => setItem(data.find((item) => item.id === parseInt(id))))
      .catch(err=> console.log(err));

      return () => {
        setItem(undefined);
      }
  }, [id]);

  if(item === undefined) {
    return <Spinner />
  }

  const reduceInitial = () => {
    if (initial === 0) return;
    setInitial(initial - 1);
  };

  const addInitial = (stock) => {
    if (initial === stock) return;
    setInitial(initial + 1);
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={item.pictureUrl}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8 px-4">
          <div className="card-body">
            <div className="row my-3">
              <div className="col-md-6">
                <h2 className="card-title">{item.title}</h2>
              </div>
              <div className="col-md-6">
                <p className="card-text">{item.price}</p>
              </div>
            </div>
            <p className="card-text mb-3">{item.description}</p>
            <div className="d-flex my-5">
              <button className={item.stock ? "btn btn-danger" : "btn btn-secondary"} onClick={reduceInitial}>-</button>
              <p className="mx-5"> {initial} </p>
              <button className={item.stock ? "btn btn-success" : "btn btn-secondary"} onClick={() => addInitial(item.stock)}>+</button>
            </div>
            <button className="btn btn-outline-primary mt-3" onClick={() => setCartItems(initial)}>Añadir al carrito</button>
            <p className="text-muted text-center border border-secondary mt-5">Stock: {item.stock} left</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
