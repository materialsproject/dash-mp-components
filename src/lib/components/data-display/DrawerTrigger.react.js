import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render a trigger that opens a Drawer that is within the same DrawerContextProvider
 */

export default class DrawerTrigger extends Component {
    render() {
        return <mpc.DrawerTrigger {...this.props} />;
    }
}

DrawerTrigger.propTypes = {
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
     * Class name applied to the modal trigger span.
     * The "mpc-modal-trigger" class is added automatically
     */
    className: PropTypes.string,

    /**
     * Children will be rendered as the trigger content
     */
    children: PropTypes.node,

    /**
     * The ID of the drawer that this trigger should open.
     */
    forDrawerId: PropTypes.string,
};
