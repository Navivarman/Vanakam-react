import { CDN_URL } from "./utils/constants";

const ResturantCart  = ({resdata}) =>{
      const {
        name,
        avgRatingString,
        costForTwo,
        sla,
        locality
      } = resdata.info

    return (
      <div className="resturant-container w-[200px] h-[420px] m-4  border-2 border-gray-600 rounded-lg relative hover:bg-gray-400">
          <div className="res-container  ">
            <div className="res-cart absolute ">
              <div className="res-logo w-44    ">
                <img className="  rounded-lg  m-2 " src={CDN_URL+ resdata.info.cloudinaryImageId} alt="" />
              </div>
              <div >
                  <h4 className="font-bold py-1 mx-2">{name}</h4>
                  <h4 className="py-0.5 mx-2">{avgRatingString}</h4>
                  <h4 className="py-0.5 mx-2">{costForTwo}</h4>
                  <h4 className="py-0.5 mx-2">{sla.slaString}</h4>
                  <h4 className="py-0.5 mx-2">{locality}</h4>
              </div>
            </div>
          </div>
      </div>
   
    )
  }

  export const WithPromoted = () =>{
    return (props) =>{
      return (
        <div>
          <label className="absolute bg-black text-white z-10 m-1 p-2 rounded-lg"> Opened</label>
          <ResturantCart {...props} />
        </div>
      )
    }
  }

export default ResturantCart ;