import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children, cartItems }) => {
  return (
    <>
      <NavBar cartItems={cartItems} />
      { children }
      <Footer />
    </>
  )
}

export default Layout
