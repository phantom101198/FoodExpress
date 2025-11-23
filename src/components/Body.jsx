import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(null);
  const [filteredRestaurant, setfilteredRestaurant] = useState(null);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Body prints", listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
    );
    const json = await data.json();

    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    setlistOfRestaurants(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!useOnlineStatus()) {
    return (
      <div>
        <h1>
          Looks Like You're Offline, Please Check your Internet Connection.
        </h1>
      </div>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);
  const [newUserName, setNewUserName] = useState("");

  // console.log(setUserName);
  
  // console.log("listOfRestaurants", listOfRestaurants);

  if (!listOfRestaurants) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          {/* <p>{console.log("shimmer", listOfRestaurants.length)}</p> */}
          <input
            type="text"
            placeholder="Enter Restaurant Name Here"
            className="placeholder-gray-500 border border-solid border-black rounded-4xl px-3 py-1.5 w-[350px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-200 hover:border-red-400"
            // styled button class
            // className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-4 p-4"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-amber-100 rounded-lg hover:bg-amber-200"
            // styled button class
            // className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            placeholder="Enter UserName Here"
            className="placeholder-gray-500 border border-solid border-black rounded-4xl px-3 py-1.5 w-[350px]"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
          <button
            className="mx-4 px-4 py-2 bg-amber-100 rounded-lg hover:bg-amber-200"
            // styled button class
            // className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={() => setUserName(newUserName)}
          >
            Change Context Btn
          </button>
        </div>

        {/* <div className="search m-4 p-4 flex items-center">
        </div> */}
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              /* {Promote those restaurants which having the averageRating below 4.3 .} */
              /* {if the restaurant is promoted then add a promoted label to it.} */
              restaurant.info.avgRating < 4.3 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
