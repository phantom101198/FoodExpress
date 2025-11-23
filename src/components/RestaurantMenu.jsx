import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log("resId", resId);

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log("data", data);
    setResInfo(json);
  };

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log(resInfo?.cards[2]?.card?.card?.info?.name);
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo);

  return (
    <div className="text-center">
      <h2 className="font-bold text-4xl p-4 m-6">{name}</h2>
      <p className="font-semibold text-lg ">
        ({cuisines.join(", ")}) - ₹{costForTwo / 100} for two
      </p>

      {/* <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"₹"}
            {costForTwo / 100}
          </li>
        ))}
      </ul> */}

      {/* categories-accordian */}
      {/* {console.log("catt", categories)} */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          // showItems={false}
          showItems={index === showIndex}
          // setShowIndex = {() => setShowIndex(index)}
          setShowIndex={() =>
            setShowIndex((prevIndex) => (prevIndex === index ? null : index))
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
