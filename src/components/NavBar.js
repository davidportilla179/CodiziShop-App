import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://shop.codiziapp.com/wp-content/uploads/2021/07/codizilogolarge.png" alt="" width="150" className="img-fluid" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Playeras</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Hoddies</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Stickers
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Simples</a></li>
                <li><a className="dropdown-item" href="#">Dobles</a></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex justify-content-around align-items-center">
            <CartWidget cartItems={cartItems} />
            <button className="btn btn-outline-success" type="submit">Log In</button>
            <button className="btn btn-success" type="submit">Register</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
