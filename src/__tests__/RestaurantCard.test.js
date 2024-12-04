import { render, screen } from "@testing-library/react"
import { RestaurantCard, withPromotedLabel } from "../Components/RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

test("should render restaurant card component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument()
})

test("should render restaurant card component with promoted label", () => {
    const PromotedRestaurantCard  = withPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA}/>);
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();
})