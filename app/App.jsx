import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from '../components/landing/Header/Header';
import Landing from "../screens/Landing"
import AllProducts from '../components/Product/allProducts/AllProducts';
import AboutUs from "../components/landing/info/AboutUs"
import ContactUs from '../components/landing/info/ContactUs'

const Router = () => {
    const router = createBrowserRouter([
        {path:"/",element:<Landing/>},
        {path:"/AllProducts",element:<AllProducts/>},
        {path:"/AboutUs",element:<AboutUs/>},
        {path:"/ContactUs",element:<ContactUs/>}
    ])
  return (
    <div>
      <Header/>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router


