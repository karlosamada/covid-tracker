import React from 'react';
import {reduxForm} from 'redux-form';

class Checkbox extends React.Component {
    checkboxGroup() {
        let {choices, input } = this.props;

        return choices.map((choice, index) => {
            return (
                <div className="checkbox" key={index}>
                    <p>
                        <label>
                            <input 
                                type="checkbox"
                                name={`${input.name}[${index}]`}
                                checked={input.value.indexOf(choice.name) !== -1}
                                onChange={(event) => {
                                    const newValue = [...input.value];
                                    if (event.target.checked) {
                                        newValue.push(choice.name)
                                    } else {
                                        newValue.splice(newValue.indexOf(choice.name), 1);
                                    }

                                    return input.onChange(newValue);
                                }} />

                                <span>{choice.name}</span>
                        </label>
                    </p>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.checkboxGroup()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'tracer',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(Checkbox);