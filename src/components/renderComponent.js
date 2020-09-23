import React from 'react';
import {Field} from 'redux-form';

import Checkbox from './tracker/Checkbox';
import Radio from './tracker/Radio';

const renderComponent = (
    {input, label, type, choices, meta: {touched, error}}
) => {

    if (type === 'checkbox') {
        return (
            <div>
                <Field name={input.name} component={Checkbox} choices={choices} />
                {touched && error &&
                    <div className="card-panel deep-orange darken-4">{error}</div>
                }
            </div>
        );
    }
    if (type === 'radio') {
        return(
            <div>
                <Radio choices={choices} label={label} type={type} fieldName={input.name} />
                {touched && error &&
                    <div className="card-panel deep-orange darken-4 ">{error}</div>
                }
            </div>
        );
        
    }

    return (
        <div className="row">
            <div className="input-field">
                <p>{label}</p>
                <Field id='temperature' name="temperature" type={type} component="input" label="Temperature" />
                {touched && error &&
                    <div className="card-panel deep-orange darken-4 ">{error}</div>
                }
            </div>
        </div>
    );
}

export default renderComponent;