import { useEffect, useState } from "react";

export const useRestaurants = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(
            "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data?.json();

        // Optional Chaining
        setListOfRestraunt(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };
    return {listOfRestaurants, filteredRestaurant, setFilteredRestaurant, setListOfRestraunt};
}