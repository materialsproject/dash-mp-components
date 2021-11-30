import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tooltip component based on react-tooltip (https://github.com/wwayne/react-tooltip).
 * To attach a Tooltip component to a trigger element,
 * add the attributes "data-tip" and "data-for" to the trigger element.
 * The "data-for" attribute's value should be equal to the id of the Tooltip
 * component you want to connect it to.
 */

export default class Tooltip extends Component {
    render() {
        return <mpc.Tooltip {...this.props} />;
    }
}

Tooltip.propTypes = {
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
     * Use the children prop to set the content of the tooltip.
     * This can be simple text or a component
     */
    children: PropTypes.node,

    place: PropTypes.string,

    type: PropTypes.string,

    effect: PropTypes.string,

    event: PropTypes.string,

    eventOff: PropTypes.string,

    globalEventOff: PropTypes.string,

    offset: PropTypes.object,

    multiline: PropTypes.bool,

    className: PropTypes.string,

    html: PropTypes.bool,

    delayHide: PropTypes.number,

    delayShow: PropTypes.number,

    border: PropTypes.bool,

    disable: PropTypes.bool,

    scrollHide: PropTypes.bool,

    clickable: PropTypes.bool,
};
