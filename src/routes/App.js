import { useContext } from "react";
import { HashRouter, Switch, Route } from 'react-router-dom';

import { CartProvider } from '../context/CartContext';
import { UserContext } from '../context/UserContext';
import PrivateRoute from './PrivateRoute';

import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';
import ProductsGallery from '../containers/ProductsGallery';
import Product from '../containers/Product';
import Checkout from '../containers/Checkout';
import Login from '../containers/Login';

function App() {
  const { userData } = useContext(UserContext);
  return (
    <CartProvider>
      <HashRouter basename='/'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products/:category' component={ProductsGallery} />
            <Route exact path='/products/:category/:id' component={Product} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path="/cart" component={Checkout} user={userData} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
