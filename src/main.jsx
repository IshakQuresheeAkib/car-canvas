import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './routes/Root/Root';
import ErrorElement from './pages/ErrorElement/ErrorElement';
import Contact from './pages/Contact/Contact';
import MyCart from './pages/MyCart/MyCart'
import AddProduct from './pages/AddProduct/AddProduct'
import AuthProvider from './Provider/AuthProvider';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {        
        path:'/mycart',
        element:<PrivateRoutes><MyCart></MyCart></PrivateRoutes>       
      },
      {
        path:'/addproduct',
        element:<PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);