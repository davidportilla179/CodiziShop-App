import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            src={item.pictureUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.price}</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/products/${item.category}/${item.id}`} >
                <button type="button" className="btn btn btn-outline-success" onClick={() => window.scroll(0,-100)}>
                  Ver producto
                </button>
              </Link>
              <small className="text-muted">Stock: {item.stock} left</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
