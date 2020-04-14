import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SelectableTable} from 'mat-periodic-table';
import 'mat-periodic-table/index.css';

/**
 * MpPeriodicTableInput is a component that allows user to select
 * some components from a periodic table
 *
 */
export default class MpPeriodicTableInput extends Component {
    render() {
        const component = (
            <SelectableTable
                id={this.props.id}
                maxElementSelectable={this.props.maxElementSelectable}
                forceTableLayout={this.props.forceTableLayout}
                onStateChange={v => {
                    this.props.setProps({state: v});
                }}
            />
        );
        return component;
    }
}

MpPeriodicTableInput.defaultProps = {
    maxElementSelectable: 10
};

//Note(chab) dash-generate-components will break if this object is {}/null. You must provide at least id
MpPeriodicTableInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * This is a read-only prop that dash callback can subscribe to
     */
    state: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    /**
     * Maximum number of selectable elements
     */
    maxElementSelectable: PropTypes.number,
    /**
     * Force the table to be in a specific layout
     */
    forceTableLayout: PropTypes.oneOf(['spaced', 'compact', 'small', 'map'])
};
