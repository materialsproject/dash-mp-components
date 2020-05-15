import {Component} from 'react';
import {TableFilter} from '@materialsproject/mp-react-components';
import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * This component filter an associated periodic table
 *
 */
export default class MpPeriodicFilter extends Component {
    render() {
        return <TableFilter />;
    }
}

MpPeriodicFilter.propTypes = {
    id: PropTypes.string,
};
MpPeriodicFilter.defaultProps = {};
