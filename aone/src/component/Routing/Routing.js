import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';
import Contact from '../Contact/Contact';

class Routing extends Component{

    render(){
        return (
            <BrowserRouter>
                <Header/>
                <Navbar/>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Routing; 