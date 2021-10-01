import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render modal that can be opened by a ModalTrigger within its same ModalContextProvider
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
     * Class name applied to the top-level modal div.
     * The "mpc-modal" and "modal" classes are added automatically
     */
    className: PropTypes.string,

    /**
     * Children will be rendered as the modal content
     */
    children: PropTypes.node,
};
