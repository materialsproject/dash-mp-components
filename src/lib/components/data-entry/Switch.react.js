import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Common wrapper for filters/inputs and their labels
 */

export default class Switch extends Component {
    render() {
        return <mpc.Switch {...this.props} />;
    }
}

Switch.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    setProps: PropTypes.func,
    value: PropTypes.bool,
    hasLabel: PropTypes.bool,
    truthyLabel: PropTypes.string,
    falsyLabel: PropTypes.string,
};
