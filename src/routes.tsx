import {
  Home,
  About,
  Products,
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
];
