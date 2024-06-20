import React ,{lazy,Suspense,useState}from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/profile";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Shimmer from "./components/ShimmerUI";
import UserContext from "./utils/UseContext";
import {Provider} from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

/**
 Header
   -logo
   -nav items
      -Home
      -Aboutus
      -ContactUs
      -cart
 Body
   -searchbar
   -restaurant list
      -restaurantcard
         -image
         -name
         -cuisine
         -rating
 */

const Instamart=lazy(()=>import("./components/Instamart"));

const About=lazy(()=>import("./components/About"));



const AppLayout=()=>{
   const [user,setUser]=useState({
      name:"sravs",
      email:"sravs12@gmail.com",
   })
   return(
      <Provider store={store}>
         <UserContext.Provider value={{

            user:user,
            setUser:setUser,
      }}>
          <Header/>
          <Outlet/>
          <Footer/>
      
     
         </UserContext.Provider>

      </Provider>


   )
}

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
         {
            path:"/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
            children:[
               {
                  path:"profile",
                  element:<Profile/>
               }
            ]
         },
         {
            path:"/contact",
            element:<Contact/>
         },
         {
            path:"/restaurant/:id",
            element:<RestaurantMenu/>
         },
         {
            path:"/Instamart",
            element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
         },
         {
            path:"/cart",
            element:<Suspense fallback={<Shimmer/>}><Cart/></Suspense>
         },
      ],

   },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);



