import {RestaurantCard} from "./RestaurantCard";
import { useState, useEffect } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import { useRestaurants } from "../utils/useRestaurants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {listOfRestaurants, filteredRestaurant, setFilteredRestaurant, setListOfRestraunt} = useRestaurants();
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>Looks like you're offline!! Please check your internet connection.</h1>)

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const filteredRestaurant = listOfRestaurants?.filter((res) =>
                res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (res) => res?.info?.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"restaurants/"+ restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};