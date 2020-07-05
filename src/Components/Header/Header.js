import React, { Component } from 'react';
import logo from "./images/index.png";

class Header extends Component {
    state = {  }
    render() { 
        return ( 
           <header className="header"> 
            <img className="logo" src={logo} alt="logo" />
            <h1 className="header-h1">SHELFIE</h1>
           </header>
         );
    }
}
 
export default Header;