import React from 'react';
import {Field, reduxForm} from 'redux-form';

const Checkbox = ({choices, label, type}) => {
    
    return (
        <div>
            <p>{label}</p>
            {choices.map(choice => {
                return (
                    <div key={choice}>
                        <p>
                            <label>
                            <Field
                                name={choice}
                                component="input"
                                type="checkbox"
                            />
                                <span>{choice}</span>
                            </label>
                        </p>
                    </div>
                );
            })}
        </div>
    )
}

export default reduxForm({
    form: 'tracer',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(Checkbox);