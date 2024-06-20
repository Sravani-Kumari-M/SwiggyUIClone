import { useEffect, useState ,useContext} from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper";
import useGetRestaurants from "../utils/useGetRestaurants";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UseContext";


const Body=()=>{
   
   const allRestaurants=useGetRestaurants([]);
   
   const [filteredRestaurants,setFilteredRestaurants]=useState(allRestaurants);

   //console.log("filtered Res", filteredRestaurants);
   const [searchText,setsearchText]=useState();
   const {user,setUser}=useContext(UserContext)

   useEffect(function() {
      setFilteredRestaurants(allRestaurants);
   }, [allRestaurants])

    const isOnline=useOnline();
    if(!isOnline){
      return <h1> you are Offline!!,please check your internet connection</h1>
   }

  
   
   if(!allRestaurants) return <Shimmer/>;

   /*if(filteredRestaurants?.length===0)
   return <h1>NO Restaurants matched your filter!!</h1>;*/
   
   
    return (allRestaurants?.length===0)?<Shimmer/>:(
     <>
       <div className="m-5 p-5 bg-pink-50">
         <input data-testid="search-input"type="text" className="focus:bg-green-200 p-2 m-2" placeholder="search" value={searchText}
         onChange={(e)=>
            setsearchText(e.target.value)}/>
           
         <button  data-testid="search-btn" className="p-2 m-1
      bg-purple-800 hover:bg-green-700 text-white rounded-md " onClick={()=>{
            const data= filterData(searchText,allRestaurants);
            setFilteredRestaurants(data);
         }
         
      }>Search</button>
      <input value={user.name} onChange={
         e=>setUser({
            ...user,
            name:e.target.value,
            
         })
      }></input>

     <input value={user.email} onChange={
         e=>setUser({
            ...user,
            email:e.target.value,
            
         })
      }></input>
         

       </div>
       <div className="flex flex-wrap" data-testid="res-list">
          
        { 
        
        filteredRestaurants?
        (
         filteredRestaurants.map((restaurant)=> {
          return <Link to={"/restaurant/"+restaurant.info.id}key={restaurant.info.id}><RestaurantCard {...restaurant.info } /> </Link> 
         })
         ):<Shimmer/>


        }
         
       </div>
       </>
    )

   
 }
 export default Body;