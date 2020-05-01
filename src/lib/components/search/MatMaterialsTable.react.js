import PropTypes from 'prop-types';
import {Component} from 'react';
import {MtMaterialTable} from 'mat-periodic-table';
import React from 'react';
import {MatPrintViewContext} from './MatPrintViewContext.react';

const emptyArray = [];
export default class MatMaterialsTable extends Component {

    render() {
        return (
            <MtMaterialTable data={this.props.data || emptyArray} />
        );
    }
}

MatMaterialsTable.propTypes = {
    id: PropTypes.string,
    data: PropTypes.array
};
MatMaterialsTable.defaultProps = {};
