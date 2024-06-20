import { createContext, useContext } from "react";

const UserContext=createContext({
    user:{
        name:"sravani",
        email:"sravani12@gmail.com"
    }
})

export default UserContext;