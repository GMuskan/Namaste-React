import React, { lazy, StrictMode, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Error } from "./Pages/Error";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import { UserContext } from "./context/UserContext";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore";
import { Cart } from "./Pages/Cart";

// import { Instamart } from "./Components/Instamart";

// Chunking / Code Splitting / Dynamic Bundling / Lazy Loading / On Demand Loading- are same things

const Instamart = lazy(async() => await import("./Components/Instamart"));

const App = () => {
    const [theme, setTheme] = useState(null);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        //make an api call and send username and password
        const data = {
            name: "Muskan Gupta"
        }
        setUserName(data?.name)
    },[])

    useEffect(() => {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    },[])
    useEffect(() => {
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    },[theme])

    const handleThemeSwitch  = () => {
       setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <Provider store={appStore}>
            {/* default username will be displayed outside  */}
            <UserContext.Provider value={{ loggedInUser: userName }}>
                {/* Muskan Gupta */}
                <div className="dark:bg-black">
                    <UserContext.Provider value={{ loggedInUser: "Swiggy User" }}>
                        {/* Akshay Saini */}
                        <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
                    </UserContext.Provider>
                    <Outlet/>
                </div>
                </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<h1>Loading...</h1>}><Instamart/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>
)