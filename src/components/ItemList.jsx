import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../ReduxStore/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="p-2">
              <p className="text-lg font-bold">{item.card.info.name} </p>
              <p className="font-light">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100 ||
                    Math.floor(Math.random() * 999) + 100}
              </p>
            </div>
            <p className="text-xs font-light p-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative w-3/12 bg-gray-200 rounded-lg mr-4 flex items-center justify-center text-gray-400 ">
            {item.card.info.imageId ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                className="rounded-lg"
              />
            ) : (
              "IMAGE"
            )}
            <div className="absolute bottom-0">
              <button
                className="cursor-pointer border border-green-950 text-green-900 bg-white hover:bg-gray-200 font-bold px-4 py-2 rounded-xl"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
