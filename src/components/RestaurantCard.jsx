import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext);
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData?.info;

    // console.log("resData in RestaurantCard", resData);
  return (
    <div className="m-4 p-2 w-[220px] h-[450px] rounded-lg bg-orange-100 hover:bg-orange-200 hover:border border-orange-300">
      <img
        className="w-64 h-40 object-cover rounded-lg"
        alt="res.logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <div>{cuisines.join(", ")}</div>
      <div>{avgRating} ⭐</div>
      <div>{costForTwo}</div>
      <div>{sla.slaString}</div>
      <div>User: {loggedInUser}</div>
    </div>
  );
};

// high order component is a function that takes a component as an argument and returns a new component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 bg-black text-white absolute">
          PROMOTED
        </label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
