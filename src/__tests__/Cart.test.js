import { act, fireEvent, render, screen } from "@testing-library/react"
import { RestaurantMenu } from "../Components/RestaurantMenu";
import {Header} from "../Components/Header";
import MOCK_DATA_RES_MENU from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { appStore } from "../store/appStore";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "../Pages/Cart"

import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA_RES_MENU)
    })
})

describe("testing cart functionality",() =>{
    it("should load restaurant menu component", async() => {
        await act(async () => render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </Provider>
            </BrowserRouter>
    ));
    const accordionHeader = screen.getByText("Extra Dip & Crispy Noodles (5)");
    fireEvent.click(accordionHeader);
    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    const addBtn = screen.getAllByRole("button", {name: "ADD"});

    fireEvent.click(addBtn[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[1])

    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

     fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

    expect(screen.getAllByTestId("foodItems").length).toBe(5);
    expect(screen.getByText("Cart empty. Add items to your cart.")).toBeInTheDocument();
    })

    


})