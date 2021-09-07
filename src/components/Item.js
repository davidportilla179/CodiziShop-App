import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <div className="col-md-4" key={item.id}>
        <div className="card mb-4 shadow-sm">
          <img
            src={item.pictureUrl}
            class="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.price}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn btn-outline-success">
                Ver producto
              </button>
              <small className="text-muted">Stock: {item.stock} left</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
