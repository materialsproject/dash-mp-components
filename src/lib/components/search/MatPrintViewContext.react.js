import {
    MtPrintViewContext
} from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';


/**
 *
 *  Print view context pass a boolean prop that allows children component to know if
 *  they are in print-view. Those components can react in various ways ( hidding some elements, changing
 *  their layouts, and so on... )
 *
 */
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
