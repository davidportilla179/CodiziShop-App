import { useContext } from "react";
import { NavLink, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import CartWidget from './CartWidget';

const NavBar = () => {
  const { userData, logOut } = useContext(UserContext);

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
          <div className="d-flex align-items-center">
            {
              userData
              ? <>
                  <Link to='/cart'><CartWidget/></Link>
                  <i className="far fa-user-circle fa-2x"></i>
                  <p className="m-3">{ userData.name }</p>
                  <button className="btn btn-success" type="button" onClick={() => logOut()}>Log Out</button>
                </>
              : <>
                  <Link to='/login'><button className="btn btn-outline-success" type="submit">Log In</button></Link>
                  <button className="btn btn-success" type="submit">Register</button>
                </>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
