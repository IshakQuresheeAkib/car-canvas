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
import BrandItems from './pages/BrandItems/BrandItems';
import ProductsDetails from './pages/ProductDetails/ProductsDetails';
import Update from './pages/Update/Update';

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
        loader:()=>fetch('https://car-canvas-server-9873fualf-ishak-qureshee-akibs-projects.vercel.app/carts'),
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
      },
      {
        path:'/products/:brand',
        loader:({params})=>fetch(`https://car-canvas-server-9873fualf-ishak-qureshee-akibs-projects.vercel.app/products/${params.brand}`),
        element:<BrandItems></BrandItems>
      },
      {
        path:'/product/:id',
        loader:({params})=>fetch(`https://car-canvas-server-9873fualf-ishak-qureshee-akibs-projects.vercel.app/product/${params.id}`),
        element:<PrivateRoutes><ProductsDetails></ProductsDetails></PrivateRoutes>
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`https://car-canvas-server-9873fualf-ishak-qureshee-akibs-projects.vercel.app/products/update/${params.id}`),
        element:<PrivateRoutes><Update></Update></PrivateRoutes>
      },
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