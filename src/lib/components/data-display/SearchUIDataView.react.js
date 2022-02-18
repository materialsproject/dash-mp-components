import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Data view to be used within a `SearchUIContainer`.
 * The view type is determined by the prop passed to `SearchUIContainer`.
 */

export default class SearchUIDataView extends Component {
    render() {
        return <mp.SearchUIDataView {...this.props} />;
    }
}

SearchUIDataView.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
};
