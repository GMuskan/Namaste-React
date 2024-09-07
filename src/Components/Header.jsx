import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = ({handleThemeSwitch, theme}) => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //if no dependency array => useEffect is called on every render
    //if empty dependency array => useEffect is called on initial render(just once)
    //if dependency array is not empty => useEffect is called whenever dependencies changes
    return (
        <div className="flex justify-between items-center shadow-xl dark:text-white shadow-white">
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
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <button className="px-4" onClick={() => {btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                    <button className="px-4" onClick={handleThemeSwitch}>{theme === "light" ? "Dark" : "Light"} Mode</button>
                </ul>
            </div>
        </div>
    )
};