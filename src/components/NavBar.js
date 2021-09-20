import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src="https://shop.codiziapp.com/wp-content/uploads/2021/07/codizilogolarge.png" alt="" width="150" className="img-fluid" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/products/tshirts" className="nav-link" aria-current="page">Playeras</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/hoddies" className="nav-link">Hoddies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products/stickers" className="nav-link">Stickers</NavLink>
            </li>
          </ul>
          <div className="d-flex justify-content-around align-items-center">
            <Link to='/cart'>
              <CartWidget cartItems={cartItems} />
            </Link>
            <button className="btn btn-outline-success" type="submit">Log In</button>
            <button className="btn btn-success" type="submit">Register</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
