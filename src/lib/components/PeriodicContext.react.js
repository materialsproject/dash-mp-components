import {PeriodicContext} from 'mat-periodic-table';
import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

export default class MpPeriodicContext extends Component {
    render() {
        if (!!this.props.children) {
            return <PeriodicContext
            enabledElements={this.props.enabledElements}
            hiddenElements={this.props.hiddenElements}
            forwardOuterChange={this.props.forwardOuterChange}
            disabledElements={this.props.disabledElements}>
                {this.props.children}
             </PeriodicContext>;
        } else {
            return <div>empty</div>;
        }
    }
}

MpPeriodicContext.propTypes = {
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
    forwardOuterChange: PropTypes.bool
};
MpPeriodicContext.defaultProps = {};


