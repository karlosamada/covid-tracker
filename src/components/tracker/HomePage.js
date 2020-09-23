import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const HomePage = (props) => {

    const responseFacebook = (response) => {
        if (response) {
            props.history.push('tracker/new');
        }
    }

    return (
        <div>
            <h2 className="header center orange-text">COVID-19 Contact Tracing</h2>
            <div className="row center">
                <h5 className="header col s12 light">Caloocan Center Church</h5>
                <p className="header col s12 light">16 Chicago tech., University Hills Subdivision, Caloocan City</p>
            </div>
            <div className="row center">
                <FacebookLogin
                    appId="3113735472085806"
                    autoLoad={true}
                    fields="email, name"
                    callback={responseFacebook} />
                <br />
                <br />
                <Link to='/tracker/new' className="btn-large waves-effect waves-light orange">
                    Login with Google
                </Link>
            </div>
        </div>
    );
}

export default HomePage;