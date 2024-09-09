import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = ({ data, showItems, setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
    }
    return(
        <div>
            <div className="w-6/12 shadow-xl p-4 bg-gray-50 m-auto my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                    <span>
                        {!showItems ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>}
                    </span>
                </div>
                {showItems && <ItemList key={data?.title} items={data?.itemCards} />}
            </div>
        </div>
    )
}