import React from 'react';
import { reduxForm } from 'redux-form';

import RenderField from '../RenderField';
import validate from '../validate';
import Navigation from '../Navigation';

const PageTwoForm = (props) => {
    const { handleSubmit, previousPage } = props; 

    const questions = [{
        text: 'Do you have any of the following Symptoms?',
        name: 'symptoms',
        important: true,
        type:'checkbox',
        choices: [
            {
                id: 1,
                name: 'Cough'
            },
            {
                id: 2,
                name: 'Colds'
            },
            {
                id: 3,
                name: 'Sore Throat'
            },
            {
                id: 4,
                name: 'Shortness of breath'
            },
            {
                id: 5,
                name: 'Fever 37.8 C and above'
            },
            {
                id: 6,
                name: 'Headache'
            },
            {
                id: 7,
                name: 'Body pains / muscle pains'
            },
            {
                id: 8,
                name: 'Weakness'
            },
            {
                id: 9,
                name: 'Diarrhea'
            },
            {
                id: 10,
                name: 'Lack of smell/taste'
            },
            {
                id: 11,
                name: 'None'
            }
        ]
    }];

    return (
        <form onSubmit={handleSubmit}>
            <RenderField questions={questions} />
            <Navigation prev={false} submit={false} previousPage={previousPage}/>
        </form>
    )
}

export default reduxForm({
    form: 'tracer', 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })(PageTwoForm);
