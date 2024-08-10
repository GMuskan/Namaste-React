import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resObj }) => {
    const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } = resObj.data;
    const { deliveryTime } = resObj.data;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo/100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;