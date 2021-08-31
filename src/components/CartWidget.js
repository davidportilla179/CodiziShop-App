import React from 'react';

const CartWidget = ({ items }) => {
  return (
    <>
      <i className="fas fa-shopping-cart fa-lg"></i>
      <span className="mx-3">{items} productos</span>
    </>
  )
}

export default CartWidget;
