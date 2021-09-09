import ItemList from './ItemList';

const ItemListContainer = ({ greeting, setCartItems }) => {

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList setCartItems={setCartItems} />
    </div>
  );
};

export default ItemListContainer;
