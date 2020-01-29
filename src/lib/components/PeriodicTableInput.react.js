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
                enabledElements={this.props.enabledElements}
                hiddenElements={this.props.hiddenElements}
                disabledElements={this.props.disabledElements}
                onStateChange={v => {
                    this.props.setProps({state: v});
                }}
            />
        );
        return component;
    }
}

MpPeriodicTableInput.defaultProps = {
    disabledElements: {},
    enabledElements: {},
    hiddenElements: {},
};

//Note(chab) dash-generate-components will break if this object is {}/null. You must provide at least id
MpPeriodicTableInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A list of symbols that are currently highlighted as clicked
     */
    state: PropTypes.object,

    /**
     * A list of symbols to grey-out as disabled
     */
    disabledElements: PropTypes.object,
    /**
     * A list of selected symbols
     */
    enabledElements: PropTypes.object,
    /**
     * A list of hidden symbols
     */
    hiddenElements: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
