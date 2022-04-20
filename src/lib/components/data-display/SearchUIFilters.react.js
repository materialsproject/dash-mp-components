import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Filters panel to be used within a `SearchUIContainer`.
 */

export default class SearchUIFilters extends Component {
    render() {
        return <mp.SearchUIFilters {...this.props} />;
    }
}

SearchUIFilters.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
};
