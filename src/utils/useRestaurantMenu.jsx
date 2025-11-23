import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    // console.log("before fetchData");
    const dataResponse = await fetch(MENU_API + resId);
    const json = await dataResponse.json();
    console.log(json.data);
    

    // setResInfo(json.data);
  };
  // console.log("after fetchData");
  return resInfo;
};

export default useRestaurantMenu;
