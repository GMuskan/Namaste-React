import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "../Components/ItemList";
import { clearCart } from "../Slices/cartSlice";

export const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => { 
        dispatch(clearCart());
    } 
    return (
        <div className="text-center m-4 p-4">
            
            <div className="w-6/12 m-auto">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold ml-8">Cart</h1>
                    <button className="px-8 py-2 bg-white shadow-xl border-gray-400 font-bold m-4 text-red-500 rounded-lg mr-8 mt-0 border-t-2 border-t-gray-200" onClick={handleClearCart}>Clear Cart</button>
                </div>
                {cartItems.length === 0 && <h1>Cart empty. Add items to your cart.</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}