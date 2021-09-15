import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';
import ProductsGallery from '../containers/ProductsGallery';
import Product from '../containers/Product';

function App() {
  const [cartItems, setCartItems] = useState(0);
  return (
    <BrowserRouter>
    <Layout cartItems={cartItems}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:category' component={ProductsGallery} />
        <Route exact path='/products/:category/:id' render ={() => <Product setCartItems={setCartItems}/>} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
