import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";

import { clearCart } from "../ReduxStore/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cartt-", cartItems);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.card.info.price || item.card.info.defaultPrice);
  }, 0);

  return (
    <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 text-center font-bold">
      <div className="border-b-2 border-green-500 m-5 flex justify-between w-full items-center">
        <h1 className="font-semibold text-2xl m-2 p-2">Cart</h1>
        <button
          className="bg-black text-white m-4 rounded-4xl py-2 px-4 cursor-pointer hover:bg-gray-500"
          onClick={handleClearCart}
        >
          Clear
        </button>
      </div>
      {cartItems.length === 0 && <h1>Your cart is Empty</h1>}
      <div className="">
        <ItemList items={cartItems} />
      </div>
      <div className="m-5 p-2 border-gray-200 border-b-2 text-left flex w-9/12">
        <p className="m-4 p-5 text-lg font-bold">
          Total: {cartItems.length && totalPrice / 100}
        </p>
      </div>
    </div>
  );
};

export default Cart;
