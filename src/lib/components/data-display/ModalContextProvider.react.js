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

    /**
     * The current or default state of the modal. If true, the "is-active" class is added to <Modal/>.
     * This value can be watched and changed from outside the component (e.g. via dash callback).
     */
    active: PropTypes.bool,

    /**
     * Prevent modal from being closed without completion of a specific action.
     * If set, there must be a button within the modal that updates the "active"
     * state using the ModalContext or a dash callback on the active prop.
     */
    forceAction: PropTypes.bool,
    isDrawer: PropTypes.bool,
};
