import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Data header to be used within a `SearchUIContainer`.
 */

export default class SearchUIDataHeader extends Component {
    render() {
        return <mp.SearchUIDataHeader {...this.props} />;
    }
}

SearchUIDataHeader.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    exportDataButton: PropTypes.node,
};
