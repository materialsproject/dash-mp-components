import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that can wrap around sub-components of `SearchUI` and ensure they are
 * all hooked up to the same context.
 * This allows you to use the state management functionality of `SearchUI` with the ability
 * to customize the inner layout and components.
 */

export default class SearchUIContainer extends Component {
    render() {
        return <mp.SearchUIContainer {...this.props} />;
    }
}

SearchUIContainer.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
    columns: PropTypes.array,
    filterGroups: PropTypes.array,
    apiEndpoint: PropTypes.string,
    apiEndpointParams: PropTypes.object,
    autocompleteFormulaUrl: PropTypes.string,
    apiKey: PropTypes.string,
    resultLabel: PropTypes.string,
    hasSortMenu: PropTypes.bool,
    sortField: PropTypes.string,
    sortAscending: PropTypes.bool,
    secondarySortField: PropTypes.string,
    secondarySortAscending: PropTypes.bool,
    hasSearchBar: PropTypes.bool,
    conditionalRowStyles: PropTypes.array,
    selectableRows: PropTypes.bool,
    selectedRows: PropTypes.array,
    view: PropTypes.oneOf(['table', 'synthesis']),
    isContribs: PropTypes.bool,
    disableRichColumnHeaders: PropTypes.bool,
    results: PropTypes.array,
};
