import React from 'react';
import PropTypes from 'prop-types';
import PageOneForm from './PageOneForm';
import PageTwoForm from './PageTwoForm';

import Checkbox from './Checkbox';
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

    render() {

        const { page } = this.state;

        return (
            <div>
                {page === 1 && <PageOneForm onSubmit={this.nextPage} />}
                {page === 2 && <PageTwoForm onSubmit={this.nextPage} />}
            </div>
        )
    }
}

FormPage.propTypes = {
    // onSubmit: PropTypes.func.isRequired
};

export default FormPage;