import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
