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
        element:<MyCart></MyCart>        
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);