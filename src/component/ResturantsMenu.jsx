import { useEffect, useState } from "react";
import { MENU_URL } from "./utils/constants";
import { useParams } from "react-router-dom";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();
  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data);
  };
  if (resInfo === null) {
    return <div></div>;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const category =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div>
      <div className="my-6 text-center py-4 ">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h1 className="py-2">
          {cuisines.join(",")}-{costForTwoMessage}
        </h1>
      </div>
      {category.map((m, index) => (
        <ResturantCategory
          data={m?.card?.card}
          key={m.card.card.title}
          showItems={index == showIndex}
          setShowIndex={() =>{setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default ResturantMenu;
