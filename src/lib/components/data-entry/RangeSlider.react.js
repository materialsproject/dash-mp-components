import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Common wrapper for filters/inputs and their labels
 */

export default class RangeSlider extends Component {
    render() {
        return <mpc.RangeSlider {...this.props} />;
    }
}

RangeSlider.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    setProps: PropTypes.func,
    value: PropTypes.number,
    domain: PropTypes.arrayOf(PropTypes.number),
    isLogScale: PropTypes.bool,
    step: PropTypes.number,
    ticks: PropTypes.number,
    inclusiveTickBounds: PropTypes.bool,
    debounce: PropTypes.number,
};
