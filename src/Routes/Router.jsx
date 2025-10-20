import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Page/Loading";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/category/:id',
        element: <CategoryNews />,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading />
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
    path: '/news-details/:id',
    element: <PrivateRoute>
      <NewsDetails />
    </PrivateRoute>,
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading />
  },
  {
    path: '/*',
    element: <h2 className="text-red-600">Error-404</h2>
  },
]);

export default router;