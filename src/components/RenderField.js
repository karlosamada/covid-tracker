import React from 'react';
import {Field} from 'redux-form';

import renderComponent from './renderComponent';

const RenderField = ({questions}) => {

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

export default RenderField;