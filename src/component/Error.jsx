import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError()
    console.log(err)
    return(
        <div className="error">
            <h1>Oops </h1>
            <h1>Something Went wrong</h1>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error;