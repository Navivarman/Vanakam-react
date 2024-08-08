import User from "./User";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent component did mount")
    }
        render(){
            console.log("Parent Render")
            return (
                <div className="about">
                <h1>Welcome to Vanakkam React</h1>
                <User name={"Navivarman"} location={"Thanjavur"} email={"navi200511@gmail.com"}/>
              </div>
             
            )
        }
}



export default About;