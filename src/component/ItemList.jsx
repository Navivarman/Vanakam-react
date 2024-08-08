import { useDispatch } from "react-redux";
import { CDN_URL } from "./utils/constants";
import { addItems } from "./utils/cartSlice";

const ItemList = ({ resData }) => {
  
  const dispatch = useDispatch()
  const handleAddItems = (item) =>{
    dispatch(addItems(item))
  }
  return (
    <div>
      {resData.map((item) => (
        <div className="border-gray-400 border-b-2 p-2 flex justify-between " key={item.card.info.name}>
          <div className="p-4">
            <span className="text-xl">{item.card.info.name}</span> <br />
            <span className="text-xl"> ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            <div className="text-sm">{item.card.info.description}</div>
          </div>
          <div>
            <button className="bg-black text-white p-2 rounded-xl my-10" onClick={() => handleAddItems(item)}>Add+</button>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default ItemList;
