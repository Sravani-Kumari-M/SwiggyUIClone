import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {IMG_CDN_URL} from "../config";
import Shimmer from "./ShimmerUI";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";



const RestaurantMenu=()=>{
    const {id}=useParams();
    const [restaurants,setRestaurants]=useState(null);
    const[restDishesMenu,setRestDishesMenu]=useState(null);


   const dispatch=useDispatch(); 
const addFoodItem=(item)=>{
    dispatch(addItem(item))
}  

    useEffect(()=>{
        console.log("executing useEffect");
        RestaurantsInfo();
    },[])

    async function RestaurantsInfo() {
         const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${id}`);
         const json=await data.json();
         console.log("json inside useRestaurent", json);
         const restData = json.data?.cards[2]?.card?.card?.info;
         setRestaurants(restData);
         const menuData=json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
         console.log("menudata",menuData);
         setRestDishesMenu(menuData);
         
    }
    

  

    
    return (!restaurants)?<Shimmer/>:(
       
   
        <div className="flex">
            <div >
           
            <h2>Restaurant id:{id}</h2>
            <h2>{restaurants?.name}</h2>
            <img style={{ width: 300, height: 200 }}src={IMG_CDN_URL+restaurants?.cloudinaryImageId}/>
            <h3>{restaurants?.areaName}</h3>
            <h3>{restaurants?.city}</h3>
            <h3>{restaurants?.avgRating}stars</h3>
            <h3>{restaurants?.costForTwoMessage}</h3>
           
           </div>
          
           <div className="p-5">
           
                <h2 className="font-bold text-black">Menu</h2>
                
                <ul data-testid="menu">

                    {
                    
                    restDishesMenu? restDishesMenu.map((item)=>(
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name}-
                        <button data-testid="add-btn"className=" p-1 bg-green-50" onClick={()=>addFoodItem(item)}>Add</button>
                        </li>

                    )) : <></>
                    
                    }
             
               </ul>
    </div>
          
           
        </div> 
        
    )
    
}




export default RestaurantMenu;