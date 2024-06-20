import {Outlet} from "react-router-dom"
import ProfileFunctionalComponent from "./profile";
import Profile from "./ProfileClass";
import {Component} from "react";
import UserContext from "../utils/UseContext";

class About extends Component{

    constructor(props){
        super(props)
        //console.log("parent-constructor");
    }


    async componentDidMount(){

        //console.log("parent-component Did mount");
    }

    render(){
        //console.log("parent-render");
        return(
            <div>
                
                <h2>This is aboutus page</h2>

                <UserContext.Consumer>
                    {({user})=><h4 className="font-bold m-2 p-2">{user.name}-{user.email}</h4>}
                </UserContext.Consumer>
                <p>This is chapter 9 and the content is about finding the path</p>
                <ProfileFunctionalComponent name={"Firstchild"}/>
                
                
                
                
            </div>
            
        );

    }

}


export default About;