import React from 'react';

const CartWidget = ({ cartItems }) => {
  return (
    <>
      <i className="fas fa-shopping-cart fa-lg"></i>
      <span className="mx-3">{cartItems} productos</span>
    </>
  )
}

export default CartWidget;
