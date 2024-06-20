const Shimmer=()=>{

  console.log("rendering shimmer");

    return(
        <div data-testid="shimmer" className="reslist flex flex-wrap" >
          {Array(10).fill("").map((e,index)=><div key={index} className="shimmercard  bg-gray-200 w-[200px] h-[200px] m-[20px]" > </div>)}  
        </div>
        
    );
}

export default Shimmer;