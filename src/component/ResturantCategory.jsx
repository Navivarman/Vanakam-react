import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data,showItems,setShowIndex }) => {
  
  const handleEvent = () =>{
     setShowIndex()
  }
  return (
    <div>
      <div className="w-6/12 bg-gray-200 shadow-xl m-auto p-4 my-3  rounded-lg cursor-pointer"onClick={handleEvent}>
        <div>
          <div className="flex justify-between" >
            <span className="font-bold">{data.title}({data.itemCards.length})</span>
            <span >⬇️</span>
          </div>

          <div>
              {showItems && <ItemList resData={data.itemCards} /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantCategory;
