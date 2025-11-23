// ERROR: List of restaurant is undefined (unresolved) 
// this component is going to be used in body component used for searching components by name (search box funcionality).

import { useState } from "react";

function SearchRestaurants() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button
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
  );
}

export default SearchRestaurants;
