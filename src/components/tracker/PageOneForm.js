import React from 'react';
import {reduxForm } from 'redux-form';
import Navigation from '../Navigation';

import RenderField from '../RenderField';
import validate from '../validate';

const PageOneForm = (props) => {
    const { handleSubmit } = props; 

    const questions = [{
        text: 'DATA PRIVACY NOTICE: The personal data collected in this form is used to the purpose of contact tracing to control COVID-19 transmission. All information are properly secured and retained in Caloocan Center Church and will be destroyed after 30 days from the date of accomplishment, following the National Archives of the Philippines Protocol. By filling out the fields below, you consent to the processing of your information as indicated in the Memorandum 20-04 Series of 2020 DTI. I understand that i am required by RA 11332 to provide truthful information about my health.',
        choices: ['I Confirm that i have read, understood and agree with the Data Privacy Notice'],
        type: 'radio',
        name: 'dataprivacy',
        important: true
    }];

    return (
        <form onSubmit={handleSubmit}>
            <RenderField questions={questions} />
            <Navigation prev={true} submit={false}/>
        </form>
    )
}

export default reduxForm({
    form: 'tracer', 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(PageOneForm);
