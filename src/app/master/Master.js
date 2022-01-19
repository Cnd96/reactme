import React, {Component, Fragment} from 'react';
import dataService from '../services/dataService';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadingSubs} from "../../utils/LoaderHelper";
import LoadingComponent from "../views/common/LoadingComponent";

class Master extends Component {

    state = {
        showLoading: false
    };

    constructor(props) {
        super(props);

        loadingSubs(this.onLoadingChange);
        this.initServices();
    }

    initServices = () => {
        dataService.init();
    };

    onLoadingChange = (isLoading) => {
        this.setState({
            showLoading: isLoading
        });
    };


    render() {
        const {children} = this.props;
        const {showLoading} = this.state;

        return (
            <Fragment>
                {
                    showLoading && (
                        <LoadingComponent/>
                    )
                }

                {children}
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({},
        dispatch);
}

export default connect(null, mapDispatchToProps)(Master);

