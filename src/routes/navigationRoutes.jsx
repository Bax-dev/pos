
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

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
];

export default navigationRoutes;
