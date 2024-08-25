import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    console.log("Header render");

    //if no dependency array => useEffect is called on every render
    //if empty dependency array => useEffect is called on initial render(just once)
    //if dependency array is not empty => useEffect is called whenever dependencies changes
    useEffect(() => {
        console.log("useEffect called");
    },[btnName])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={() => {btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};