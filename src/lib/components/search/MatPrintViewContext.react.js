import {
    MtPrintViewContext
} from 'mat-periodic-table';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class MatPrintViewContext extends Component {
    render() {
        if (!!this.props.children) {
            return (
                <MtPrintViewContext>
                    {this.props.children}
                </MtPrintViewContext>
            );
        } else {
            return <div>NO CHILDREN PASSED</div>;
        }
    }
}
MatPrintViewContext.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any,
};
MatPrintViewContext.defaultProps = {};
