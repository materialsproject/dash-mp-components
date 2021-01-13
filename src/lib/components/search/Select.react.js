import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper component for react-select
 * This can be used as an alternative to dcc.Dropdown
 * Automatically adds the wrapper class "react-select-container"
 * and the class prefix "react-select-" to all the elements created by react-select
 */

export default class Select extends Component {
    render() {
        return <mp.Select {...this.props} />;
    }
}

Select.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    /**
     * List of objects to be used as options in the dropdown
     * e.g.
        [
          {
            'label': 'One',
            'value': 1
          },
          {
            'label': 'Two',
            'value': 2
          }
        ]
     */
    options: PropTypes.array,
    /**
     * The value of the select dropdown.
     * Accepts either the value itself or the an entire object from the options array.
     * e.g. 1 or {'label': 'One', 'value': 1}
     */
    value: PropTypes.any,
    /**
     * The default value assigned if no selection is made.
     * (default: null)
     */
    defaultValue: PropTypes.any,
    /**
     * Determines if dropdown has an 'x' icon for
     * clearing the current value.
     * (default: False)
     */
    isClearable: PropTypes.bool,
    /**
     * Set to true if select should allow multiple
     * options to be selected.
     * (default: False)
     */
    isMulti: PropTypes.bool,
    /**
     * Object for placing all other props that
     * are supported by react-select but are not
     * explicitly defined here.
     * See https://react-select.com/props
     *
     * This is a workaround because Dash components
     * cannot accept props that aren't explicitly defined.
     * e.g.
        {
          'closeMenuOnSelect': False,
          'escapeClearsValue': True 
        }
     */
    arbitraryProps: PropTypes.object,
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
};
