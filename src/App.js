import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./Components/Header";
import {Body} from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Error } from "./Pages/Error";
import { RestaurantMenu } from "./Components/RestaurantMenu";
// import { Instamart } from "./Components/Instamart";

// Chunking / Code Splitting / Dynamic Bundling / Lazy Loading / On Demand Loading- are same things

const Instamart = lazy(async() => await import("./Components/Instamart"));

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
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