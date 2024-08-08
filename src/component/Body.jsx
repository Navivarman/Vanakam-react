import { useContext, useEffect, useState } from "react";
import ResturantCart,{WithPromoted} from "./ResturantCart";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { API_URL } from "./utils/constants";
import Context from "./utils/Context";


const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [searchText,setSearchText] = useState("")
  const [filterrest,setFilterRest]=useState([])
  const ResturantPomoted = WithPromoted()

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843007&lng=80.2704622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }

  const OnlineStatus = useOnlineStatus()
  if(OnlineStatus==false){
    return(<h1>Check the internet connection</h1>)
    
  }
  const{Default,setUserName} = useContext(Context)
  return listOfRest.length==0?(<Shimmer/>):(
    <div className="body">
      <div className="  m-2 p-4 ">
        <div className=" flex gap-2 h-18">
          <input type="text" className="border-2 border-gray-500 rounded-xl px-2" placeholder="Enter Restaurant Name" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
          <button className=" border-2 border-gray-400 p-1 bg-green-400 rounded-lg " onClick={()=>{
            const filter = listOfRest.filter((res)=>res?.info.name.toLowerCase().includes(searchText.toLowerCase()))
             setFilterRest(filter) 
          }}>Search</button>
                  <button
          className="filter-btn border-2 border-gray-400 p-1 bg-green-400 rounded-lg"
          onClick={() => {
            setFilterRest(listOfRest.filter((res) => res.info.avgRating > 4.3));
          }}
          >
          Top Restarant
        </button>
         <input type="text" className="border-2 border-gray-500 rounded-xl px-2"
          placeholder="Enter Your Name"
          value={Default}
          onChange={(e)=>setUserName(e.target.value)}/>

        </div>      

      </div>
      <div className="body-container  flex flex-wrap justify-around ">
        {filterrest.map((resturant) => (
          <Link to={"/resturants/"+resturant.info.id} key={resturant.info.id}>
            {resturant.info.isOpen ? <ResturantPomoted  resdata={resturant}   key={resturant.info.id} /> : <ResturantCart resdata={resturant} key={resturant.info.id} />  }
                             
            </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
