import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{backgroundColor:'#5E88FC'}}>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">App</Link> 
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="collapsible.html">Login</a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Header;
