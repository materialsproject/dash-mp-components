import PropTypes from 'prop-types';
import {Component} from 'react';
import {MtMaterialTable} from '@materialsproject/mp-react-components';
import React from 'react';
import {MatPrintViewContext} from './MatPrintViewContext.react';

const emptyArray = [];


/**
 *
 *  Display a table of materials
 *
 */
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
