import React from 'react';

const Navigation = (props) => {
    const {prev, submit} = props;
    if (!prev) {
        const {previousPage} = props;
        const iconName = (submit) ? 'send' : 'navigate_next';
        const buttonName = (submit) ? 'Submit' : 'Next Page';
        return (
            <div className="row center">
                <div className="col s6">
                    <button type="button" className="btn center waves-effect waves-light" onClick={previousPage}>
                        <i className="material-icons left">navigate_before</i>Previous
                    </button>
                </div>
                <div className="col s6">
                    <button type="submit" className="btn center waves-effect waves-light">
                        <i className="material-icons right">{iconName}</i>{buttonName}
                    </button>
                </div>                    
            </div>
        );
    } else {
        return (
            <div className="row center">
                <button className="btn center waves-effect waves-light" type="submit" name="action">
                    <i className="material-icons right">navigate_next</i>Next page
                </button>
            </div>
        )
    }
}

export default Navigation;