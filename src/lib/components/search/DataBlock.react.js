import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display a single record of data in a horizontal block element
 * with an optional expanded view to show additional data columns.
 */

export default class DataBlock extends Component {
    render() {
        return <mpc.DataBlock {...this.props} />;
    }
}

DataBlock.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * Class name(s) to append to the component's default class (mpc-data-block)
     */
    className: PropTypes.string,

    /**
     * Object (i.e. dictionary) of data to be displayed in the block
     */
    data: PropTypes.object,

    /**
     * Optional configuration for the columns in the data object.
     * Follows the same format as the columns prop in the SearchUI component.
     */
    columns: PropTypes.array,
};
