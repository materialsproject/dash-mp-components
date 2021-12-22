import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Common wrapper for filters/inputs and their labels
 */

export default class FilterField extends Component {
    render() {
        return <mpc.FilterField {...this.props} />;
    }
}

FilterField.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    tooltip: PropTypes.string,
    units: PropTypes.string,
    active: PropTypes.bool,
};
