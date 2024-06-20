import React from "react";


class Profile extends React.Component{

    constructor(props){
        super(props)
        //creating state in class based components
        this.state={
            userInfo:{
                login:"Dummy name",
                location:"Dummy location"

            }
        }
        console.log("child-constructor"+this.props.name);

    }
    async componentDidMount(){
        this.timer=setInterval(()=>{
            console.log("namathe react op");
        },1000);
        
       
    }
    componentDidUpdate(){


        console.log("component Did Update");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        const {count}=this.state;
        console.log("child-render"+this.props.name);
        return (
            <div>
                <h2>Profile Class Component</h2>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name:{this.state.userInfo.login}</h2>
                <h2>id :{this.state.userInfo.id}</h2>
                
                

            </div>
        )
    }
}


export default Profile;