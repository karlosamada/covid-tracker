import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <br /><br />
            <h1 className="header center orange-text">COVID-19 Contact Tracing</h1>
            <div className="row center">
                <h5 className="header col s12 light">Caloocan Center Church</h5>
                <p className="header col s12 light">16 Chicago tech., University Hills Subdivision, Caloocan City</p>
            </div>
            <div className="row center">
                <Link to='/tracker/new' className="btn-large waves-effect waves-light blue ">
                    Login in Facebook
                </Link>
                <br />
                <br />
                <Link to='/tracker/new' className="btn-large waves-effect waves-light orange">
                    Login with Google
                </Link>
            </div>
            <br /><br />
        </div>
    );
}

export default HomePage;