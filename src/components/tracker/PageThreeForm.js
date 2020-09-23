import React from 'react';
import { reduxForm } from 'redux-form';

import RenderField from '../RenderField';
import validate from '../validate';
import Navigation from '../Navigation';

const PageThreeForm = (props) => {
    const { handleSubmit, previousPage } = props; 

    const questions = [ {
        text: 'Have you travelled to any area outside National Capital Region (NCR) aside from your home in the last 14 days?',
        name: 'travelledncr',
        important: true,
        type: 'radio',
        choices: ['Yes', 'No']
    },{
        text: 'Have you travelled outside the Philippines in the last 14 days?',
        name: 'travelledabroad',
        important: true,
        type: 'radio',
        choices: ['Yes', 'No']
    }];
    
    return (
        <form onSubmit={handleSubmit}>
            <RenderField questions={questions} />
            <div className="row center">
                <Navigation prev={false} submit={false} previousPage={previousPage}/>               
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'tracer', 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(PageThreeForm);
