import { useEffect, useState } from "react"

const useOnlineStatus = () =>{
    const [onlinestatus, setOnlineStatus] = useState(true)
    useEffect(()=>{
        window.addEventListener("online" ,()=>{
                setOnlineStatus(true)
        })
        window.addEventListener("offline" ,()=>{
                setOnlineStatus(false)
        })
    })
    return onlinestatus;
}

export default useOnlineStatus;