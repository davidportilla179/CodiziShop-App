import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail'
import ItemList from '../components/ItemList';

const Product = ({ setCartItems }) => {
  const { id, category } = useParams();

  return (
    <div className="container mt-5">
      <ItemDetail id={id} setCartItems={setCartItems} />
      <h2 className="text-center mt-5">Ver más {category}</h2>
      <ItemList filter={category} />
    </div>
  )
}

export default Product
