import {Sidebar} from 'mat-periodic-table';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class MatSidebar extends Component {
    render() {
        return (
           <Sidebar width={100}
           currentApp={this.props.currentApp}
           onAppSelected={(v) => {
            //TODO filter state
                //this.props.setProps({state: v});
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
    currentApp: PropTypes.string,
    state: PropTypes.object
};