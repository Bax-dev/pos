
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

const navigationRoutes = [
  {
    path: '/',
    element: <Register />,
  },

  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default navigationRoutes;
