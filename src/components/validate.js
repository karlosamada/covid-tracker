const validate = (values) => {
    const errors = {};

    if (!values.dataprivacy) {
        errors.dataprivacy = 'Required!'
    }

    if (!values.symptoms || values.symptoms.length === 0) {
        errors.symptoms = 'Required!';
    }

    if (!values.travelledncr) {
        errors.travelledncr = 'Required'
    }

    if (!values.travelledabroad) {
        errors.travelledabroad = 'Required!'
    }

    if (!values.closeenvironment) {
        errors.closeenvironment = 'Required!'
    }

    if (!values.temperature) {
        errors.temperature = 'Required!'
    } else if (!/^[1-9]\d*(\.\d+)?$/.test(values.temperature)){
        errors.temperature = 'Invalid Input!'
    }

    return errors;
}

export default validate;