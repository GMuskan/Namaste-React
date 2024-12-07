import { fireEvent, render, screen } from "@testing-library/react"
import { Header } from "../Components/Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { appStore } from "../store/appStore"
import "@testing-library/jest-dom";

describe("Test Cases for Header Component", () => {
    test("Should load header component with login button", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
    
        const loginButton = screen.getByRole("button", {name: "Login"});
        expect(loginButton).toBeInTheDocument();
    });
    
    test("Should load header component with cart item(0) ", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
    
        const cartItems = screen.getByText("Cart - (0 items)"); //const cartItems = screen.getByText("/Cart/"); regex will also work
        expect(cartItems).toBeInTheDocument();
    });
    
    test("Should change login button to logout on click", () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
    
        const loginButton = screen.getByRole("button", {name: "Login"});
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole("button", {name: "Logout"});
        expect(logoutButton).toBeInTheDocument();
    });
})
