import {SearchFunnel} from 'mat-periodic-table';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';



export default class SearchGrid extends Component {
    render() {
        return (
           <SearchFunnel/>
        );
    }
}
SearchGrid.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
