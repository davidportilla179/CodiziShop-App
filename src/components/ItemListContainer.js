import React from 'react';

const ItemListContainer = ({ greeting, children }) => {
  return (
    <div>
      <h1>{ greeting }</h1>
      { children }
    </div>
  )
}

export default ItemListContainer;
