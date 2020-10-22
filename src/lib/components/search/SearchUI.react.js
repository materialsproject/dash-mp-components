import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for rendering advanced search interfaces for data in an API
 * Renders results in a data table alongside a set of filters that map to properties in the data.
 */

export default class SearchUI extends Component {
    render() {
        return <mp.SearchUI {...this.props} />;
    }
}

SearchUI.propTypes = {
    /**
   * An array of column definitions for the results in the SearchUIDataTable
   * Column properties are based on the react-data-table column settings (https://github.com/jbetancur/react-data-table-component#columns)
   * The "format" property must match one of these pre-defined strings: "FIXED_DECIMAL", "SIGNIFICANT_FIGURES", "FORMULA"
   * The "formatArg" is a special property that is used to make certain formats more specific (e.g. SIGNIFICANT_FIGURES or FIXED_DECIMAL)
   * example:
    [
        {
          name: 'Material Id',
          selector: 'task_ids',
          sortable: true
        },
        {
          name: 'Volume',
          selector: 'volume',
          sortable: true,
          format: 'FIXED_DECIMAL',
          formatArg: 3
        },
        {
          name: 'Density',
          selector: 'density',
          sortable: true,
          format: 'SIGNIFICANT_FIGURES',
          formatArg: 4
        }
    ]
   */
    columns: PropTypes.array,
    /**
   * An array of filter groups and their respective array of filters.
   * A filter group is a collapsible section of the filters panel that contains one or more filters.
   * A filter is a type of input element that filters the data based on its value.
   * Filter "type" must be one of these strings: "SLIDER", "MATERIALS_INPUT", "TEXT_INPUT"
   * Filter "id" must be a queryable field
   * Filter "props" defines how that filter should be rendered. See example for props format based on filter type.
   * example:
    [
      {
        name: 'Material',
        collapsed: false,
        filters: [
          {
            name: 'Required Elements',
            id: 'elements',
            type: 'MATERIALS_INPUT',
            props: {
              field: 'elements' // sets which field the input controls ('elements' or 'formula')
            }
          }
        ]
      },
      {
        name: 'General',
        collapsed: false,
        filters: [
          {
            name: 'Volume',
            id: 'volume',
            type: 'SLIDER',
            props: {
              domain: [0, 200] // sets the min and max values of the slider
            }
          },
          {
            name: 'Density',
            id: 'density',
            type: 'SLIDER',
            props: {
              domain: [0, 200]
            }
          }
        ]
      }
    ]
   */
    filterGroups: PropTypes.array,
    /**
     * The base URL to the API that this search UI should query
     * e.g. "https://api.materialsproject.org/materials/"
     */
    baseURL: PropTypes.string,
    /**
     * API key (if needed) that will be used when making queries
     */
    apiKey: PropTypes.string,
};
