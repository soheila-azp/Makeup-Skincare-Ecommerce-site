// import axios from "axios";
// import { useEffect, useState } from "react";
//  import Upload from "./components/Upload"
// import Landing from "./screens/Landing";


// function App() {
//   const [courses, setCourses] = useState(null); // state برای ذخیره داده

//   const getCourseList = async () => {
//     try {
//       const result = await axios.get("/api");
//       console.log(result.data);
//       setCourses(result.data); // ذخیره نتیجه در state
//     } catch (error) {
//       console.error("Error fetching courses:", error);
//     }
//   };

//   useEffect(() => {
//     getCourseList();
//   }, []);

//   return (
//     <>
//     <div>
//       <Landing/>
//       {/* <div className="text-green-700">hello world jj</div> */}
      
//       {/* <h3>{courses}</h3> */}
      
//       <Upload productId="68d7d723548f49bf1b774ea4" />
//       </div>
//     </>
//   );
// }

// export default App;
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


