const ItemCheckout = ( { quantity, item, removeFromCart, updateQuantityItem } ) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-2">
          <img
            src={item.pictureUrl}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.price}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex mb-3">
            <button className={item.stock ? "btn btn-danger" : "btn btn-secondary"} onClick={() => updateQuantityItem(item, quantity-1)}>-</button>
            <p className="mx-5"> { quantity } </p>
            <button className={item.stock ? "btn btn-success" : "btn btn-secondary"} onClick={() => updateQuantityItem(item, quantity+1)}>+</button>
          </div>
          <small className="text-muted">Stock: {item.stock} left</small>
        </div>
        <div className="col-md-2">
        <button className="btn btn-danger" onClick={()=>removeFromCart(item)}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  )
}

export default ItemCheckout;
