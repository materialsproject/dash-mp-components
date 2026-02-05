import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Slider input for selecting a single value in a range
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
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    domain: PropTypes.arrayOf(PropTypes.number),
    isLogScale: PropTypes.bool,
    step: PropTypes.number,
    ticks: PropTypes.number,
    inclusiveTickBounds: PropTypes.bool,
    debounce: PropTypes.number,
    styleInput: PropTypes.object,
    styleSlider: PropTypes.object,
};
