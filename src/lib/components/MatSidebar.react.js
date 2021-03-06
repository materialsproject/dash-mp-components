import {Sidebar} from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';


/**
 *
 *  Material navigation bar
 *
 */
export default class MatSidebar extends Component {
    render() {
        return (
           <Sidebar width={100} layout={this.props.layout}
           currentApp={this.props.currentApp}
           onAppSelected={(v) => {
                console.log(v);
                this.props.setProps({appId: v});
            }}/>
        );
    }
}
MatSidebar.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    /**
     *
     * The ID of the current selected app
     *
     */
    currentApp: PropTypes.string,
    /**
     * This is a read-only prop that dash callback can subscribe to
     */
    appId: PropTypes.string,
    /**
    *
    * The layout of the sidebar
    *
    */
    layout: PropTypes.oneOf(['vertical', 'horizontal']),
};
