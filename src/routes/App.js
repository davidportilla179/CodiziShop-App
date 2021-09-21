import { useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';
import ProductsGallery from '../containers/ProductsGallery';
import Product from '../containers/Product';
import Checkout from '../containers/Checkout';

import { CartContext, CartProvider } from '../context/CartContext';

function App() {
  return (
    <CartProvider>
      <HashRouter basename='/'>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products/:category' component={ProductsGallery} />
            <Route exact path='/products/:category/:id' component={Product} />
            <Route exact path='/cart' component={Checkout} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
