import React from 'react';
import {Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from './tracker/HomePage';
import FormPage from './tracker/FormPage';
import ConfirmationPage from './tracker/ConfirmationPage';
import history from '../history';

import Header from './Header';
const App = () => {
    return (
        <div>
            <Router history={history}>
                <Header />
                <div className="section">
                    <div className="container">
                        <Route path="/" exact component={HomePage} />
                        <Route path="/tracker/new" component={FormPage} />
                        <Route path="/tracker/confirmation" component={ConfirmationPage} />
                    </div>
                </div>
            </Router>
        </div>
        
    )
}

export default App;