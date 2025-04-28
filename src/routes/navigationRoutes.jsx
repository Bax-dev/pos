
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import ProductPage from '../pages/Products';

const navigationRoutes = [
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },

  
  {
    path: '/products',
    element: <ProductPage />,
  },
];

export default navigationRoutes;
