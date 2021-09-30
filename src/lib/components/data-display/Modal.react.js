import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render a trigger that opens a modal with the specified modal content
 */

export default class Modal extends Component {
    render() {
        return <mpc.Modal {...this.props} />;
    }
}

Modal.propTypes = {
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
     * Use the children prop to set the trigger element and modal content.
     * The first element in the children array will be used as the trigger
     * and the second element will be rendered inside the modal-content div.
     */
    children: PropTypes.node,

    /**
     * Element to be used to open the modal.
     * Can also be supplied as the first of two children (necessary in Dash).
     */
    trigger: PropTypes.string,

    /**
     * Element to render inside the modal-content div.
     * Can also be supplied as the second of two children (necessary in Dash).
     */
    modalContent: PropTypes.string,
};
