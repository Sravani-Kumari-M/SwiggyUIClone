import {IMG_CDN_URL} from "../config";
import { useContext } from "react";
import UserContext from "../utils/UseContext";

const RestaurantCard=({cloudinaryImageId,name,cuisines,avgRating}) => {
  const {user}=useContext(UserContext);

    return(
      
      <div className="w-56 p-2 m-2 shadow-xl bg-pink-50">
       <img src={IMG_CDN_URL
       +cloudinaryImageId}/>
 
          
       <h2 className="font-bold text-xl"> {name}</h2>
       <h5 className="break-words"> {cuisines}</h5>
       <h4> {avgRating}</h4>
       <h4 className="font-bold">{user.name}-{user.email}</h4>
       
       
     
 
       
      </div>
 
    )
 }
 export default RestaurantCard;