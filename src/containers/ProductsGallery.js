import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

function ProductsGallery() {
  let { category } = useParams();

  return (
    <div className="container text-center">
      <h2>{ category }</h2>
      <ItemList filter={category} />
    </div>
  )
}

export default ProductsGallery;
