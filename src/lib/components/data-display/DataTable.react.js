import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Common wrapper for filters/inputs and their labels
 */

export default class DataTable extends Component {
    render() {
        return <mpc.DataTable {...this.props} />;
    }
}

DataTable.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
    /**
     * Class name(s) to append to the component's default class
     */
    className: PropTypes.string,
    /**
     * Array of data objects to display in the table
     */
    data: PropTypes.array,
    /**
     * An array of column definition objects to control what is rendered in the table.
     * See `Column` documentation for specifics on how to construct `Column` objects.
     */
    columns: PropTypes.array,
    /**
     * Optionally include a field to sort by on initial load
     * Must be a valid field and included in your list of columns
     */
    sortField: PropTypes.string,
    /**
     * If including a sortField, set whether it should ascend by default
     * True for ascending, False for descending
     */
    sortAscending: PropTypes.bool,
    /**
     * Optionally include a secondary sort field. If the sortField ever becomes the same as
     * the secondarySortField, the secondary field is removed.
     * Must be a valid field and included in your list of columns.
     */
    secondarySortField: PropTypes.string,
    /**
     * If including a secondarySortField, set whether it should ascend by default.
     * True for ascending, False for descending.
     */
    secondarySortAscending: PropTypes.bool,
    /**
     * List of conditions for styling rows based on a property (selector) and a value.
     * Note that this prop currently only supports checking for
     * value equivalence (i.e. row[selector] === value).
     * See `ConditionalRowStyle` documentation for how to construct `ConditionalRowStyle` conditions.
     */
    conditionalRowStyles: PropTypes.array,
    /**
     * Optionally include/exclude checkboxes next to rows for selecting
     */
    selectableRows: PropTypes.bool,
    /**
     * Property to maintain the state of selected rows so that
     * they are accessible via Dash callback
     */
    selectedRows: PropTypes.any,
    /**
     * Set to true to show a header with total number of rows and a columns selector
     */
    hasHeader: PropTypes.bool,
    /**
     * Optional class name to apply to the table header
     */
    headerClassName: PropTypes.string,
    /**
     * A noun in singular form to describe what a result represents (e.g. "material").
     * This is displayed in the table header.
     */
    resultLabel: PropTypes.string,
    /**
     * Plural form of the result label. If none supplied, it will automatically be the result label plus an "s"
     */
    resultLabelPlural: PropTypes.string,
    /**
     * Set to true to paginate the table records
     */
    pagination: PropTypes.bool,
    /**
     * If true, an expanded component will be used for pagination (same as in `SearchUI`).
     * If false, a compact version will be used.
     */
    paginationIsExpanded: PropTypes.bool,
    /**
     * Content to display below the table but inside the table's box wrapper.
     * Accepts markdown.
     */
    footer: PropTypes.string,
    /**
     * This is a temporary solution to allow SearchUI's to render in Storybook.
     * There is an issue with the dynamic column header components that causes
     * Storybook to crash. Rendering column headers as plain PropTypes.strings fixes the problem.
     * Note that this will disable column tooltips and unit labels.
     */
    disableRichColumnHeaders: PropTypes.bool,
};
