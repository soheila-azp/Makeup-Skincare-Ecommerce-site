import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from '../components/landing/Header/Header';
import Landing from "../screens/Landing";
import AllProducts from '../components/Product/allProducts/AllProducts';
import AboutUs from "../components/landing/info/AboutUs";
import ContactUs from "../components/landing/info/ContactUs";
import Menu from "../components/landing/topMenu/Menu";
import Layout from './Layout';
import SignIn from '../components/userEntry/SignIn'
import SignUp from '../components/userEntry/SignUp';
import SearchResults from "../components/pages/SearchResults"
import Panel from '../components/panel/Panel';
import ProductDetail from '../components/Product/ProductDetail'

const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { path: "/", element: <Landing /> },
      { path: "/AllProducts", element: <AllProducts /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/ContactUs", element: <ContactUs /> },
      {path:"/SignIn",element:<SignIn/>},
      {path:"/SignUp",element:<SignUp/>},
      {path:"/search",element:<SearchResults/>},
      {path:"/panel",element:<Panel/>},
      {path: "/ProductDetail/:id", element: <ProductDetail /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}