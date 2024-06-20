import { IMG_CDN_URL } from "../config"


const FoodItemMenu=(item)=>{




    let {imageId,description,category, price} = item
   
    return(
        <div className="w-56 p-2 m-2 shadow-xl bg-pink-50">
            <img src={IMG_CDN_URL+imageId}/>
            <h3>{description}</h3>
            <h3>{category}</h3>
            <h3>Rupees:{price?price/100:0}</h3>

            
        </div>
    )
}
export default FoodItemMenu;