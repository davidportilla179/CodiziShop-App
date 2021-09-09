import { useEffect, useState } from "react";
import Item from './Item';

const itemsArray = [
  { id: 1, title: "T-shirt", description: "Its a tshirt", stock: 10, price: "$299.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/machine_learning_tshirt_2.jpg" },
  { id: 2, title: "Hoddie", description: "Its a hoddie", stock: 0, price: "$599.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/its_python_tshirt_1.jpg" },
  { id: 3, title: "Shirt", description: "Its a shirt", stock: 2 , price: "$199.00 MXN", pictureUrl: "https://shop.codiziapp.com/wp-content/uploads/2021/07/microcontroller_electronic_tshirt_2.jpg"},
];

function getListItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(itemsArray), 2000);
  });
}

const ItemList = ({ setCartItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const list = getListItems();
    list
      .then((data) => setItems(data))
      .catch(err=>console.log(err));
  }, []);
  
  return (
    <>
      <div className="row mt-4">
        {items.map((item) => <Item id={item.id} item={item} />)}
      </div>
    </>
  )
}

export default ItemList;