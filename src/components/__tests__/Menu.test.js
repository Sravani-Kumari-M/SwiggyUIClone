import "@testing-library/jest-dom"
import Header from "../Header";
import { fireEvent, render,waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { MENU_DATA } from "../../mocks/data";
import RestaurantMenu from "../RestaurantMenu";


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MENU_DATA)
        },
    })
})

test("Add items to cart",async()=>{

    const body= render(<StaticRouter><Provider store={store}><Header/><RestaurantMenu/></Provider></StaticRouter>)
 
    await waitFor(()=>expect(body.getByTestId("menu")))
    const menu=body.getByTestId("menu");
    const addBtn=body.getAllByTestId("add-btn");
    fireEvent.click(addBtn[0]);
    //fireEvent.click(addBtn[2]);
    
    const cart=body.getByTestId("cart");
    //console.log("reslist", resList.children.length);
    
    expect(cart.innerHTML).toBe("Cart-1 items");
    
    
 })