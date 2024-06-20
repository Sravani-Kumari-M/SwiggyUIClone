import { useDispatch, useSelector } from "react-redux";
import FoodItemMenu from "./FoodItemMenu";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    console.log("cart items 0", cartItems[0]);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        
        dispatch(clearCart());
    };
    
    return(
        <div>
            <h1 className="font-bold text-3xl">Cart Items-{cartItems.length}</h1>
           <button className="m-2 p-2 bg-green-100" onClick={()=>handleClearCart()}>Clear cart</button> 
            <div className="flex">

            {
                cartItems.map((item)=>(
                    <FoodItemMenu   key={item.id}{...item?.card?.info}/>

                ))
            }
            </div>
            
        </div>
    )
    
}

export default Cart;