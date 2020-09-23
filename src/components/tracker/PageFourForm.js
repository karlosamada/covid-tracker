import React from 'react';
import { reduxForm } from 'redux-form';

import RenderField from '../RenderField';
import validate from '../validate';
import Navigation from '../Navigation';
const PageFourForm = (props) => {
    const { handleSubmit, previousPage } = props; 

    const questions = [{
        text: 'Have you worked together or stayed in the same close environment with a confirmed COVID-19 case (including those in the household) within the last 14 days WITHOUT wearing a face mask?',
        important: true,
        name: 'closeenvironment',
        choices: ['Yes', 'No'],
        type:'radio'
    }, {
        text: 'Temparature (Must be taken before entering CCC premises through thermal scanners available at the entract of the church). You are not allowed inside if temperature is 37.8 C or higher.',
        important: true,
        name: 'temperature',
        choices: [],
        type:'text'
    }];
    
    return (
        <form onSubmit={handleSubmit}>
            <RenderField questions={questions} />
            <Navigation prev={false} submit={true} previousPage={previousPage}/>               
        </form>
    )
}

export default reduxForm({
    form: 'tracer', 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(PageFourForm);
