import "@testing-library/jest-dom"
import Body from "../Body";
import { fireEvent, render,waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RESTAURANT_DATA } from "../../mocks/data";
import Shimmer from "../ShimmerUI";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(RESTAURANT_DATA)
        },
    })
})
test("search results on homepage",()=>{

    const body= render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)
    //console.log("body", body);
    const shimmer=body.getByTestId("shimmer");
    expect(shimmer.children.length).toBe(10);
    //console.log(shimmer);
 })

test("Restaurants should load on homepage",async()=>{

   const body= render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)

   await waitFor(()=>expect(body.getByTestId("search-btn")))
   
   const resList=body.getByTestId("res-list");
   expect(resList.children.length).toBe(20);
   //console.log(resList);
})

test("Search for String(food) on homepage",async()=>{

    const body= render(<StaticRouter><Provider store={store}><Body/></Provider></StaticRouter>)
 
    await waitFor(()=>expect(body.getByTestId("search-btn")))

    const input=body.getByTestId("search-input");
    fireEvent.change(input,{
        target:{
            value:"eat",
        }
    })

    const searchBtn=body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    
    const resList=body.getByTestId("res-list");
    //console.log("reslist", resList.children.length);
    
    expect(resList.children.length).toBe(1);
    
    
 })