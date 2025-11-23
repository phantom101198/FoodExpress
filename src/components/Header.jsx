import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LOGO from '../assets/images/FoodExpress_Logo.png'

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { onlineStatus, onlineText } = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to our store using a Selector.
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-amber-100 lg:bg-amber-100">
      <div className="logo-container flex">
        <img className="w-25" src={LOGO} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 mx-1 flex items-center bg-amber-300 rounded-2xl">
            {onlineText} : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 mx-1 flex items-center hover:bg-amber-300 rounded-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 mx-1 flex items-center hover:bg-amber-300 rounded-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 mx-1 flex items-center hover:bg-amber-300 rounded-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 mx-1 flex items-center hover:bg-amber-300 rounded-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 mx-1 flex items-center hover:bg-amber-300 rounded-2xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-4 mx-1 flex items-center">
            <button
              className="login-btn border border-black px-4 py-1 bg-amber-300 rounded-2xl font-semibold hover:bg-amber-400 cursor-pointer"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
          <li className="px-4 mx-1 flex items-center bg-amber-300 rounded-2xl font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
