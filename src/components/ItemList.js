import { useEffect, useState } from "react";
import Item from './Item';
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

const ItemList = ({ filter }) => {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    const list = getListItems();
    list
      .then((data) => {
        filter ? setItems(data.filter(item => item.category === filter)) : setItems(data);
      })
      .catch(err=> console.log(err));

      return () => {
        setItems(undefined);
      }
  }, [filter]);

  if(items === undefined) {
    return <Spinner />
  }

  return (
    <>
      <div className="row mt-4">
        {items.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  )
}

export default ItemList;
