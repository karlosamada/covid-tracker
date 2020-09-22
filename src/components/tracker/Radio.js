import React from 'react';
import { Field } from 'redux-form';

const Radio = (props) => {
    return (
        <div>
            <p>{props.label}</p>
            {props.choices.map(choice => {
                return (
                    <div key={choice}>
                        <p>
                            <label>
                            <Field name={props.fieldName} component="input" className="with-gap" type="radio" value={choice} />
                                <span>{choice}</span>
                            </label>
                        </p>
                    </div>
                );
            })}
        </div>
    )
}

export default Radio