import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom wrapper for the react-tabs component.
 * See https://github.com/reactjs/react-tabs
 */

export default class Tabs extends Component {
    render() {
        return <mpc.Tabs {...this.props} />;
    }
}

Tabs.propTypes = {
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
     * Class name applied to top level wrapper for tabs and tab content.
     * The "mpc-tabs" class is added automatically
     */
    className: PropTypes.string,

    /**
     * Use the children prop to set the separate tab contents.
     * Children must be a list of elements that is the same length as the list
     * of labels in the labels prop.
     * The element's order in the children array determines which label it
     * is associated with.
     */
    children: PropTypes.node,

    /**
     * List of strings to use as labels for the tabs.
     * The number of labels must equal the number of children (i.e. tab content items).
     */
    labels: PropTypes.arrayOf(PropTypes.string),

    /**
     * The current or default tabIndex to be active.
     * This value can be watched and changed from outside the component (e.g. via dash callback).
     */
    tabIndex: PropTypes.number,

    /**
     * Object for placing all other props that
     * are supported by react-select but are not
     * explicitly defined here.
     * See https://github.com/reactjs/react-tabs
     *
     * This is a workaround because Dash components
     * cannot accept props that aren't explicitly defined.
     * e.g.
        {
          'defaultFocus': True,
          'selectedTabClassName': 'active-tab' 
        }
     */
    arbitraryProps: PropTypes.object,
};
