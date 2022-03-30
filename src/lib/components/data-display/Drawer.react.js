import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render drawer that can be opened by a ModalTrigger within a ModalContextProvider
 */

export default class Drawer extends Component {
    render() {
        return <mpc.Drawer {...this.props} />;
    }
}

Drawer.propTypes = {
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
     * Class name applied to the top-level drawer div.
     * The "mpc-drawer" and "modal" classes are added automatically
     */
    className: PropTypes.string,

    /**
     * Children will be rendered as the drawer content
     */
    children: PropTypes.node,
};
