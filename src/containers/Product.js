import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail'
import ItemList from '../components/ItemList';

const Product = () => {
  const { id, category } = useParams();
  
  return (
    <div className="container">
      <h1>{id}</h1>
      <ItemDetail id={id} />
      <h2 className="text-center mt-5">Ver más {category}</h2>
      <ItemList filter={category} />
    </div>
  )
}

export default Product
