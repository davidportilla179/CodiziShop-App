import { useEffect, useState, memo } from "react";
import Item from './Item';
import Spinner from "./Spinner";

import { getProducts, getProductsbyCategory } from '../services/firebase/firebase';

const ItemList = ({ filter }) => {
  const [items, setItems] = useState(undefined);

  useEffect(() => {
    if(!filter) {
      getProducts()
        .then(items => {
          setItems(items);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      getProductsbyCategory(filter)
        .then(items => {
          setItems(items);
        })
        .catch(err => {
          console.log(err);
        });
    }
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

export default memo(ItemList);
