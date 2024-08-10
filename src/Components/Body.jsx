import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredResList = resList.filter(res => res.data.avgRating > 4)
                    setListOfRestaurants(filteredResList);
                }}>
                Top Rated Restaurants</button>
            </div>
            <div className="search">Search</div>
            <div className="res-container">
                {listOfRestaurants.map((res) => <RestaurantCard key={res.data.id} resObj={res} />)}
            </div>


        </div>
    );
};

export default Body