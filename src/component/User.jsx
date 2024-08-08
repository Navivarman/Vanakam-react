import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Count:0,
        }
        console.log("First constructor ")
    }
    componentDidMount(){
        console.log("First component did mount ")
    }
    render(){
        console.log("First Render ")
        const {Count}=this.state
        return <div className="user">
            <div className="About">
                <h1>Count:{Count}</h1>
                <button onClick={()=>{this.setState(
                    {Count:this.state.Count+1}
                )}}>Click Increase</button>
                <p>Name:{this.props.name}</p>
                <p>Location:{this.props.location}</p>
                <p>E-mail:{this.props.email}</p>
               
            </div>
        </div>
    }
}

export default User;