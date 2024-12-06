import { fireEvent, render, screen } from "@testing-library/react"
import { Body } from "../Components/Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("should test the whole updated restaurant details",  () => {
    it("Should Search Res List for Pizza text input", async () => {
        await act(async() => render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )) 
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(8);
        const searchBtn = screen.getByRole("button", {name: "Search"});
        const searchInputBox = screen.getByTestId("searchInput");
        fireEvent.change(searchInputBox, { target: {value: "Pizza"}});
        fireEvent.click(searchBtn);

        //screen should load 2 cards
        const cardsAfterSearch = screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(2);
    });

    it("Should filter top rated restaurants", async () => {
        await act(async() => render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )) 
        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(8);
        const topRatedResBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
        fireEvent.click(topRatedResBtn);

        //screen should load 2 cards
        const cardsAfterSearch = screen.getAllByTestId("resCard");
        expect(cardsAfterSearch.length).toBe(2);
    });
    
})