import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SelectableTable} from "mat-periodic-table";
//import 'mat-periodic-table/index.css';

export default class PeriodicTableInput extends Component {
    render() {
        const {id, ...remainingProps} = this.props;
        const component = (
            <SelectableTable
                id={id}
                enabledElements={{}} disabledElements={{}} onStateChange={
                (v)=>{ console.log(v); this.props.setProps({state:v})}
            } />
        );
        return component;
    }
}

PeriodicTableInput.defaultProps = {disabledElements: {}, enabledElements: {}};

PeriodicTableInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A list of symbols that are currently highlighted as clicked
     */
    state: PropTypes.array,

    /**
     * A list of symbols to grey-out as disabled
     */
    disabledElements: PropTypes.object,
    enabledElements: PropTypes.object,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
