import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

export const useRestaurantMenu = ({resId}) => {
    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data?.json();
        setResInfo(json?.data);
    }
    useEffect(() => {
        fetchMenu()
    },[])
    return resInfo;
}