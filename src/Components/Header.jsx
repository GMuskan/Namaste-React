import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useInRouterContext } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../context/UserContext";
import { useSelector } from "react-redux";

export const Header = ({handleThemeSwitch, theme}) => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    //Subscribing to the store using a selector
    const cartItems = useSelector((store) => store?.cart?.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between items-center shadow-xl shadow-gray-200 dark:text-white shadow-white">
            <div>
                <img className="w-48 p-4" src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart({cartItems?.length})</Link></li>
                    <button className="px-4" onClick={handleThemeSwitch}>{theme === "light" ? "Dark" : "Light"} Mode</button>
                    <button className="px-4" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};