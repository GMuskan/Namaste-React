import {RestaurantCard, withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import { useRestaurants } from "../utils/useRestaurants";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {listOfRestaurants, filteredRestaurant, setFilteredRestaurant, setListOfRestraunt} = useRestaurants();
  const onlineStatus = useOnlineStatus();

  const PromotedRestaurantCard  = withPromotedLabel(RestaurantCard);

  if(onlineStatus === false) return (<h1>Looks like you're offline!! Please check your internet connection.</h1>)

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 bg-white border border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4">
          <button
            className="rounded-lg px-4 py-2 bg-gray-200"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"restaurants/"+ restaurant?.info?.id}>
            {restaurant?.data?.promoted ? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};