import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that combines the filters, data header, and data view
 * of a `SearchUI` into a common grid layout.
 * Note that this must be used within a `SearchUIContainer`.
 */

export default class SearchUIGrid extends Component {
    render() {
        return <mp.SearchUIGrid {...this.props} />;
    }
}

SearchUIGrid.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    exportDataButton: PropTypes.node,
};
