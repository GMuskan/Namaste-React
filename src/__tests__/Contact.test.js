import { render, screen } from "@testing-library/react";
import { Contact } from "../Pages/Contact"
import "@testing-library/jest-dom"

describe("Test Cases for Contact Us Page", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterEach(() => {
    //     console.log("After Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });
    
    test("Should load contact us page", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading"); 
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us page", () => {
        render(<Contact/>);
        const button = screen.getByText("Submit"); //const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside contact us page", () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside contact us page", () => {
        render(<Contact/>);
    
        //Querying
        const inputBoxes = screen.getAllByRole("textbox"); // inputBoxes are react fiberNodes/react element/jsx element/virtual dom object
        expect(inputBoxes.length).toBe(2);
    });
});