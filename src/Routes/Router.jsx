import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/category/:id',
        element: <CategoryNews />,
        loader: () => fetch('/news.json')
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  },
  {
    path: '/news',
    element: <h2>NEWS Layout</h2>
  },
  {
    path: '/*',
    element: <h2 className="text-red-600">Error-404</h2>
  },
]);

export default router;