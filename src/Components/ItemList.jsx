import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../Slices/cartSlice";

export const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return(
        <div> 
            {items?.map((item) => (
                <div key={item?.card?.info?.id} className="p-4 m-4 border=gray-200 border-b-2 text-left flex justify-between h-fit">
                    <div className="py-2 w-9/12">
                        {item.card.info.isBestseller &&
                            <div className="font-bold text-orange-400 italic">
                                Bestseller
                            </div>
                        }
                        <div>
                            <span className="font-bold">{item?.card?.info?.name}</span>
                        </div>
                        <div>
                            <span>₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                        </div>
                        <div>

                        </div>
                        <div className="flex flex-wrap">
                            <p>{item?.card?.info?.description}</p>
                        </div>
                    </div>
                    <div className="w-3/12 flex flex-col items-center">
                        <img src={CDN_URL + item.card.info.imageId} className="w-40" />
                        <button className="px-8 py-2 bg-white shadow-xl border-gray-400 font-bold m-4 text-green-500 rounded-lg" onClick={() => handleAddItem(item)}>ADD</button>
                    </div>
                </div>
            ))}
        </div>
    )
}