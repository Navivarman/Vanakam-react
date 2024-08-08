import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearItems, removeItems } from "./utils/cartSlice";

const CartItems = () => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(clearItems());
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <div className="text-center my-2 p-2 font-bold text-4xl ">
        <h1>Carts</h1>
      </div>
      <div className="text-center">
        <button
          className="bg-black text-white p-2 rounded-xl my-10 cursor-pointer"
          onClick={() => handleRemoveItem()}
        >
          Clear All
        </button>
      </div>
      <div className="w-6/12 m-auto bg-gray-200">
        <ItemList resData={cartItems} />
      </div>
    </div>
  );
};

export default CartItems;
