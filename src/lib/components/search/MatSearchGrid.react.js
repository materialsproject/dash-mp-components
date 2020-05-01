import {Component} from 'react';
import {MTGrid} from 'mat-periodic-table';
import PropTypes from 'prop-types';
import React from 'react';

export default class MatSearchGrid extends Component {
    render() {
        return (
            <MTGrid onChange={v => this.props.setProps({state:v})} />
        );
    }
}
MatSearchGrid.propTypes = {
    /**
     * Latest configuration of the funnel
     */
    state: PropTypes.object,
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
     * An array of object describing the behavior/content of each card
     *
     */
    /**
     * The ID used to identify this component in Dash callbacks.
     */
};
