import React from "react";
import logo from "../img/logo-white.png";
import "./Header.css"
class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="wrap">
                <header>
                        <div className=" row nav-content">
                         <img src={logo} alt="" className="logo"/> 
                         <ul className="main-nav">
                           <li><a href="/"> Food delivery</a></li>
                           <li><a href="/"> How it works</a></li> 
                           <li><a href="/"> Our cities</a></li>
                           <li><a href="/"> Sign Up</a></li>    
                        </ul> 
                        </div>
                        <div className="text">
                        <h1>GOODBYE JUNK FOOD
                            <br></br>
HELLO SUPER HEALTHY MEALS.</h1>
<br></br>
<a href="/" className="btn btn-full">i'm hungry</a>
            <a href="/" className="btn btn-ghost"> show me more</a>
                        </div> 
                </header>
                </div>
            </div>
        )
    }
}

export default Header;