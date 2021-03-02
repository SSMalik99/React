import React from 'react';
import Name from './Name/Name';
import Mobile from './Mobile/Mobile';
import Address from './Address/Address'

import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './Navbar';

function Routing(){
    return(
        <React.Fragment>            
            <BrowserRouter>
            <Navbar/>
            <Route path='/name' component={Name}/>
            <Route path='/contact' component={Mobile}/>
            <Route path='/address' component={Address}/>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Routing;