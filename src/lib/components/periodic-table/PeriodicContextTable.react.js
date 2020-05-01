import {PeriodicContext, SelectableTable} from 'mat-periodic-table';
import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

export default class MpPeriodicContextTable extends Component {
    render() {
            return <PeriodicContext
                enabledElements={this.props.enabledElements}
                hiddenElements={this.props.hiddenElements}
                forwardOuterChange={this.props.forwardOuterChange}
                disabledElements={this.props.disabledElements}>
                <SelectableTable  forceTableLayout={this.props.forceTableLayout}
                                  maxElementSelectable={this.props.maxElementSelectable}
                                  onStateChange={v => {
                                    this.props.setProps({state:v});
                                  }} />
            </PeriodicContext>;
    }
}

MpPeriodicContextTable.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any,
    /**
     * A list of symbols to grey-out as disabled
     */
    disabledElements: PropTypes.array,
    /**
     * A list of selected symbols
     */
    enabledElements: PropTypes.array,
    /**
     * A list of hidden symbols
     */
    hiddenElements: PropTypes.array,
    /**
     * Forward external changes
     */
    forwardOuterChange: PropTypes.bool,
    /**
     *  Force table layout
     */
    forceTableLayout: PropTypes.string,
    /**
     * The maximum number of selectable elements
     */
    maxElementSelectable: PropTypes.number,
    /**
    * The state of the table, as exposed in the dash callback
    */
    state: PropTypes.object
};
MpPeriodicContextTable.defaultProps = {};


