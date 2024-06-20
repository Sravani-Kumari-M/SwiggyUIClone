import { useContext } from "react";
import UserContext from "../utils/UseContext";
const Footer=()=>{
   const {user}=useContext(UserContext);
    return(
       <h2 className="m-4 p-4 font-bold">This site is developed by {user.name}-{user.email}</h2>
    )
 }
 export default Footer;