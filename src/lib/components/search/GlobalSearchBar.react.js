import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for rendering advanced search interfaces for data in an API
 * Renders results in a data table alongside a set of filters that map to properties in the data.
 */

export default class GlobalSearchBar extends Component {
    render() {
        return <mp.GlobalSearchBar {...this.props} />;
    }
}

GlobalSearchBar.propTypes = {
    /**
     * The route (minus the query params) that submissions should redirect to
     */
    redirectRoute: PropTypes.string,
    /**
     * Optional URL endpoint for fetching formula autocompletion results
     * e.g. "https://api.materialsproject.org/materials/formula_autocomplete/"
     */
    autocompleteFormulaUrl: PropTypes.string,
    /**
     * API key (if needed) that will be used to hit the autocomplete route
     */
    apiKey: PropTypes.string,
    /**
     * Boolean flag for showing/hiding the periodic table on initial load
     */
    hidePeriodicTable: PropTypes.bool,
    /**
     * Optionally add a help icon with a tooltip in the search bar
     * This should be used to provide instructions on how to use the search bar
     * e.g.
     *  'Type in a comma-separated list of element symbols (e.g. Ga, N),
     *  a chemical formula (e.g. C3N), or a material id (e.g. mp-10152).
     *  You can also click elements on the periodic table to add them to your search.'
     */
    tooltip: PropTypes.string,
};
