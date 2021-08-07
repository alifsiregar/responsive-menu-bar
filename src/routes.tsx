import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    exact: false,
    component: About,
  },
  {
    name: 'Products',
    path: '/products',
    exact: false,
    component: Products,
  },
];
