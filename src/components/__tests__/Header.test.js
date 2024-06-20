///<reference types="jest"/>

import { Provider } from "react-redux";
import Header from "../Header"
import { render } from "@testing-library/react";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server";

test("Logo should load on rendering on rendering header",()=>{
   const header= render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)
    //console.log(header);
    const logo=header.getAllByTestId("logo");
    //console.log(logo[0]);
    expect(logo[0].src).toBe("http://localhost/dummy.png")
});

test("online status should be green on rendering header",()=>{
    const header=render(<StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>)
    const onlineStatus=header.getByTestId("online-status");
    expect (onlineStatus.innerHTML).toBe("✅");
});

test("cart items should be zero on rendering header",()=>{
    const header=render(<StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
        </StaticRouter>)
    const cart=header.getByTestId("cart");
    expect (cart.innerHTML).toBe("Cart-0 items");
});