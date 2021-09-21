import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const { quantityItems } = useContext(CartContext);
  return (
    <>
      <i className="fas fa-shopping-cart fa-lg"></i>
      <span className="mx-3">{quantityItems} productos</span>
    </>
  )
}

export default CartWidget;
