import {
  Home,
  About,
  Products,
  Error,
} from './pages';

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
  {
    // route for 404 error page
    name: 'Error',
    exact: false,
    component: Error,
  },
];
