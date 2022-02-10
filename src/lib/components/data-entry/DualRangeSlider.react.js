import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Slider input with controls for both the minimum and maximum bounds.
 */

export default class DualRangeSlider extends Component {
    render() {
        return <mpc.DualRangeSlider {...this.props} />;
    }
}

DualRangeSlider.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    setProps: PropTypes.func,
    value: PropTypes.arrayOf(PropTypes.number),
    domain: PropTypes.arrayOf(PropTypes.number),
    isLogScale: PropTypes.bool,
    step: PropTypes.number,
    ticks: PropTypes.number,
    inclusiveTickBounds: PropTypes.bool,
    debounce: PropTypes.number,
};
