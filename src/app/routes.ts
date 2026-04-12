import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import New from './pages/New';
import Women from './pages/Women';
import Men from './pages/Men';
import Accessories from './pages/Accessories';
import Sale from './pages/Sale';
import Search from './pages/Search';
import Shop from './pages/Shop';
import Explore from './pages/Explore';
import Features from './pages/Features';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'new', Component: New },
      { path: 'women', Component: Women },
      { path: 'men', Component: Men },
      { path: 'accessories', Component: Accessories },
      { path: 'sale', Component: Sale },
      { path: 'search', Component: Search },
      { path: 'shop', Component: Shop },
      { path: 'explore', Component: Explore },
      { path: 'features', Component: Features },
      { path: 'product/:id', Component: ProductDetail },
      { path: 'cart', Component: Cart },
      { path: 'account', Component: Account },
    ],
  },
]);
