import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Use ModalContextProvider to coordinate modal trigger and modal content
 */

export default class ModalContextProvider extends Component {
    render() {
        return <mpc.ModalContextProvider {...this.props} />;
    }
}

ModalContextProvider.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Children will be rendered within the ModalContext.
     * Should contain at least a ModalTrigger component and a Modal component.
     */
    children: PropTypes.node,
};
