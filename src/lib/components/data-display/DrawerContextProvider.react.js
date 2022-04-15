import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Use DrawerContextProvider to render drawers that will automatically
 * close when another drawer in the context is opened.
 */

export default class DrawerContextProvider extends Component {
    render() {
        return <mpc.DrawerContextProvider {...this.props} />;
    }
}

DrawerContextProvider.propTypes = {
    /**
     * Children will be rendered within the DrawerContext.
     * Should contain at least a DrawerTrigger component and a Drawer component.
     */
    children: PropTypes.node,
};
