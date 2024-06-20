import { useState ,useContext} from "react";
import Logo from "../assets/img/foodvilla.png"
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UseContext";
import { useSelector } from "react-redux";



const loggedInUser=()=>{
   //API call
   return true;
}

const Title=()=>{
    return <a href="/"><img data-testid="logo" className="h-23 p-2 "alt="logo" src={Logo} width="100"/></a> 
  }
  

 const Header=()=>{
   const[isLoggedIn,setisLoggedIn]=useState(false);
   const isOnline=useOnline();

   const {user}=useContext(UserContext);
   const cartItems=useSelector((store)=>store.cart.items);
   console.log(cartItems);
     return(
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-cyan-300 md:bg-green-300">
           <Title/>
           <div className="nav-items">
  
              <ul className="flex  py-10">
                 <li className="px-2"><Link to="/">Home</Link></li>
                 <li className="px-2"><Link to="/about">About</Link></li>
                 <li className="px-2"><Link to="/contact">Contact</Link></li>
                
                 <li className="px-2"><Link to="/Instamart">Instamart</Link></li>
                <Link to="/cart" ><li data-testid="cart"className="px-2">Cart-{cartItems.length} items</li></Link>
  
              </ul>
  
  
           </div>
           <h1 data-testid="online-status">{isOnline ? "✅":"🔴"}</h1>
           <span className="p-10 font-bold text-red-900">{user.name}</span>
           {
            isLoggedIn? <button onClick={()=>setisLoggedIn(false)}>Logout</button>:<button onClick={()=>setisLoggedIn(true)} >Login</button>
           }
  
  
        </div>
     )
  }

  export default Header;

