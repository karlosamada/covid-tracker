import React, {useState} from 'react';
import { Field, reduxForm } from 'redux-form';
import Checkbox from './Checkbox';
import Radio from './Radio';

const PageOneForm = (props) => {
    const { handleSubmit } = props; 

    const questions = [{
        text: 'DATA PRIVACY NOTICE: The personal data collected in this form is used to the purpose of contact tracing to control COVID-19 transmission. All information are properly secured and retained in Caloocan Center Church and will be destroyed after 30 days from the date of accomplishment, following the National Archives of the Philippines Protocol. By filling out the fields below, you consent to the processing of your information as indicated in the Memorandum 20-04 Series of 2020 DTI. I understand that i am required by RA 11332 to provide truthful information about my health.',
        choices: ['I Confirm that i have read, understood and agree with the Data Privacy Notice'],
        type: 'radio',
        important: true
    },
    {
        text: 'Do you have any of the following Symptoms?',
        name: 'symptoms',
        important: true,
        type:'checkbox',
        choices: ['Cough', 'Colds', 'Sore Throat', 'Shortness of breath', 'Fever 37.8 C and above', 'Headache', 'Body pains / muscle pains', 'Weakness', 'Diarrhea', 'Lack of smell/taste', 'None']
    }, {
        text: 'Have you travelled to any area outside National Capital Region (NCR) aside from your home in the last 14 days?',
        name: 'travelled-ncr',
        important: true,
        type: 'radio',
        choices: ['Yes', 'No']
    },{
        text: 'Have you travelled outside the Philippines in the last 14 days?',
        name: 'travelled-abroad',
        important: true,
        type: 'radio',
        choices: ['Yes', 'No']
    },{
        text: 'Have you worked together or stayed in the same close environment with a confirmed COVID-19 case (including those in the household) within the last 14 days WITHOUT wearing a face mask?',
        important: true,
        name: 'close-environment',
        choices: ['Yes', 'No'],
        type:'radio'
    }, {
        text: 'Have you worked together or stayed in the same close environment with a confirmed COVID-19 case (including those in the household) within the last 14 days WITHOUT wearing a face mask?',
        important: true,
        name: 'temperature',
        choices: [],
        type:'text'
    }];
    

    const renderComponent = (
        {input, label, type, choices, meta: {touched, error}}
    ) => {

        if (type === 'checkbox') {
            return <Checkbox choices={choices} label={label} type={type} />
        }
        if (type === 'radio') {
            return <Radio choices={choices} label={label} type={type} fieldName={input.name} />
        }

        return (
            <div className="row">
                <div className="input-field">
                    <p>{label}</p>
                    <Field id='temperature' name="temperature" type={type} component="input" label="Temperature" />
                </div>
            </div>
        );
    }

    const renderField = () => {
        const field = questions.map((question) => {
            return (
                <div key={question.name}>
                    <Field
                        name={question.name}
                        type={question.type}
                        component={renderComponent}
                        label={question.text}
                        choices={question.choices}
                    />
                </div>
            )
        })

        return field;
    }

    return (
        <form onSubmit={handleSubmit}>
            {renderField()}
            <div className="row center">
                <button className="btn center waves-effect waves-light" type="submit" name="action">Next page
                </button>
            </div>
        </form>
    )
}

const validate = formValues => {

    const errors = {};

    if (! formValues.title) {
        errors.title = 'Required!'
    }

    if (! formValues.description) {
        errors.description = 'Required!';
    }

    return errors;
}

export default reduxForm({
    form: 'tracer', 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(PageOneForm);
