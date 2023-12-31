import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './routes/Root/Root';
import ErrorElement from './pages/ErrorElement/ErrorElement';
import MyCart from './pages/MyCart/MyCart'
import AddProduct from './pages/AddProduct/AddProduct'
import AuthProvider from './Provider/AuthProvider';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import PrivateRoutes from './routes/PrivateRoutes/PrivateRoutes';
import BrandItems from './pages/BrandItems/BrandItems';
import ProductsDetails from './pages/ProductDetails/ProductsDetails';
import Update from './pages/Update/Update';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@material-tailwind/react';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
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
      },
      {
        path:'/products/:brand',
        loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}`),
        element:<BrandItems></BrandItems>
      },
      {
        path:'/product/:id',
        element:<PrivateRoutes><ProductsDetails></ProductsDetails></PrivateRoutes>
      },
      {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:5000/products/update/${params.id}`),
        element:<PrivateRoutes><Update></Update></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
          <HelmetProvider>
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);