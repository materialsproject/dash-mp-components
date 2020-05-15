import {SearchFunnel} from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

// this is the whole search page, wrapped in a component

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
