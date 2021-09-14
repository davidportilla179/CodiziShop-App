import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import Home from '../containers/Home';
import ProductsGallery from '../containers/ProductsGallery';
import Product from '../containers/Product';

function App() {
  
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products/:category' component={ProductsGallery} />
        <Route exact path='/products/:category/:id' component={Product} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
