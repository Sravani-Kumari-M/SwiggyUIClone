import {useState,useEffect} from "react";

const useGetRestaurants=()=>{
    const [allRestaurants,setAllRestaurants]=useState();
   

    useEffect(()=>{
        getRestaurants();
     },[]);
    
     async function getRestaurants(){
        
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsondata=await data.json();
        
        //console.log(jsondata);
  
        const actdata=jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setAllRestaurants(actdata);
     
        
  
  
    }

return allRestaurants;

}

export default useGetRestaurants;