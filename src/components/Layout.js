import { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [stock, setStock] = useState(5);
  const [cartItems, setCartItems] = useState(0);
  return (
    <>
      <NavBar cartItems={cartItems} />
      { children }
      <Footer />
    </>
  )
}

export default Layout
