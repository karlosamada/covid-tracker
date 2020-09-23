import React from 'react';
import PageOneForm from './PageOneForm';
import PageTwoForm from './PageTwoForm';
import PageThreeForm from './PageThreeForm';
import PageFourForm from './PageFourForm';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1
        }
    }

    nextPage() {
        this.setState({page: this.state.page + 1});
    }

    previousPage() {
        this.setState({page: this.state.page - 1});
    }

    handleSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        const { page } = this.state;

        return (
            <div>
                {page === 1 && <PageOneForm onSubmit={this.nextPage} />}
                {page === 2 && <PageTwoForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
                {page === 3 && <PageThreeForm previousPage={this.previousPage} onSubmit={this.nextPage} />}
                {page === 4 && <PageFourForm previousPage={this.previousPage} onSubmit={this.handleSubmit} />}
            </div>
        )
    }
}

FormPage.propTypes = {
    onSubmit: PropTypes.func
}

export default FormPage;