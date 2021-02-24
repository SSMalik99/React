import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <Link to="/" className="navbar-brand">Aone</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link  to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" href="#">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" >About</Link>
                    </li>    
                    </ul>
                </div>  
                </nav>
            </React.Fragment>

        )
    }
}

export default Navbar;