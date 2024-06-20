import { useEffect, useState } from "react";

const Profile=(props)=>{

    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);


    useEffect(()=>{
      const timer= setInterval(()=>{
         console.log("namathe react op");
      },1000);
   console.log("use effect");

     return()=>{
      clearInterval(timer);
      console.log("use effect return");
     }
    })
    console.log("render");

    return(
       <div>
         <h2>profile component</h2>
         <h2>Role:{props.role}</h2>
         <h2>Count:{count}</h2>
         <button onClick={()=>{
            setCount(1);
            setCount2(2);
         }
            
            }>COUNT</button>
       </div>
    );
};
export default Profile;