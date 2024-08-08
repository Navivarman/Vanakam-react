import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";
import Context from "./utils/Context"
import { useSelector } from "react-redux";


const Header = () =>{
  const [login,setLogin]=useState("Login")
  const onlinestatus = useOnlineStatus()
  const {Default}=useContext(Context)
  const cartItems = useSelector(store => store.cart.items)
  
    return (
      <div className="flex justify-between items-center bg-gray-100">
        <div className="w-44">
          <img src={LOGO_URL}/>
        </div>
        <div className="nav-item">
          <ul className="flex p-4 m-4 font-bold text-2xl cursor-pointer">
            <li className="p-4 hover:bg-white rounded-3xl ">Online Status:{onlinestatus?"🟢Online":"🔴Offline"}</li>
            <li className="p-4 hover:bg-white rounded-3xl " ><Link to="/">Home</Link></li>
            <li className="p-4 hover:bg-white rounded-3xl "><Link to="/about">About</Link></li>
            <li className="p-4 hover:bg-white rounded-3xl "><Link to="/contact">Contact</Link></li>
            <li className="p-4 hover:bg-white rounded-3xl "><Link to="/cart">Cart-({cartItems.length} items)</Link></li>
            <li className="p-4 hover:bg-white rounded-3xl "><Link to="/contact">{Default}</Link></li>
            <li className="p-4 hover:bg-white rounded-3xl border-2 border-black "><button onClick={()=>{login==="Login"?setLogin("Logout"):setLogin("Login")}}>{login}</button></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;