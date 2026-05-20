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
    sortFields: PropTypes.arrayOf(PropTypes.string),
    sortKey: PropTypes.string,
    skipKey: PropTypes.string,
    limitKey: PropTypes.string,
    totalKey: PropTypes.string,
    fieldsKey: PropTypes.string,
    conditionalRowStyles: PropTypes.array,
    selectableRows: PropTypes.bool,
    selectedRows: PropTypes.array,
    view: PropTypes.oneOf(['table', 'synthesis']),
    disableRichColumnHeaders: PropTypes.bool,
    results: PropTypes.array,
    /**
     * Set automatically by the SearchUI when a `LINK_POPOVER` cell is clicked.
     * Shape: `{selector, value, row, ts}`. Used as a Dash callback `Input` to
     * trigger server-side resolution that populates `popoverContent`.
     */
    lastClickedCell: PropTypes.object,
    /**
     * Renderable content (Dash component tree) shown inside the popover for
     * the most recently clicked `LINK_POPOVER` cell. Typically set by a Dash
     * callback responding to `lastClickedCell`.
     */
    popoverContent: PropTypes.node,
};
