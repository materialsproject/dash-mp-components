import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrap content within this component to allow it to be enlarged into a full screen modal
 */

export default class Enlargeable extends Component {
    render() {
        return <mpc.Enlargeable {...this.props} />;
    }
}

Enlargeable.propTypes = {
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
     * Additional class to apply to the modal-content element when enlarged
     */
    className: PropTypes.string,

    /**
     * Children will be rendered as the modal content
     */
    children: PropTypes.node,
};
