import React from 'react';
import {Link} from 'react-router-dom';



function Navbar (){
    return (
        <div>
            <h2>i'm from Navbar</h2>
            <Link to='/name'>Name</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/address'>Address</Link>
        </div>
    )
}

export default Navbar;