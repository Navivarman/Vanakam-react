
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ResturantMenu from "./component/ResturantsMenu";
import Context from "./component/utils/Context";
import { Provider } from "react-redux";
import appStore from "./component/utils/appStore"
import CartItems from "./component/CartItems";


const AppLayout = () =>{

  const [userName,setUserName] = useState("Navivarman")
  
  return (
    <Provider store={appStore}>
    <Context.Provider value={{Default:userName,setUserName}} >
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Context.Provider>
    </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/resturants/:resId",
        element:<ResturantMenu />
      },
      {
        path:"/cart",
        element:<CartItems />
      },


    ],
    errorElement:<Error />
  }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


