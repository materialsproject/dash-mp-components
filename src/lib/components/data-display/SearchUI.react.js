import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for rendering advanced search interfaces for data in an API
 * Renders results in a data table alongside a set of filters that map to properties in the data.
 *
 * Documentation: https://materialsproject.github.io/mp-react-components/?path=/docs/search-ui-searchui-component--fully-featured
 */

export default class SearchUI extends Component {
    render() {
        return <mp.SearchUI {...this.props} />;
    }
}

SearchUI.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    columns: PropTypes.array,
    filterGroups: PropTypes.array,
    apiEndpoint: PropTypes.string,
    apiEndpointParams: PropTypes.object,
    autocompleteFormulaUrl: PropTypes.string,
    apiKey: PropTypes.string,
    resultLabel: PropTypes.string,
    hasSearchBar: PropTypes.bool,
    searchBarTooltip: PropTypes.string,
    searchBarPlaceholder: PropTypes.string,
    searchBarErrorMessage: PropTypes.string,
    searchBarAllowedInputTypesMap: PropTypes.object,
    searchBarPeriodicTableMode: PropTypes.oneOf(['toggle', 'focus', 'none']),
    searchBarHelpItems: PropTypes.array,
    searchBarChemicalSystemSelectHelpText: PropTypes.string,
    searchBarElementsSelectHelpText: PropTypes.string,
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
