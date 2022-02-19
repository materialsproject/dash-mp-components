import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Search bar to be used within a `SearchUIContainer`.
 */

export default class SearchUISearchBar extends Component {
    render() {
        return <mp.SearchUISearchBar {...this.props} />;
    }
}

SearchUISearchBar.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    allowedInputTypesMap: PropTypes.object,
    periodicTableMode: PropTypes.oneOf(['toggle', 'focus', 'none']),
    helpItems: PropTypes.array,
    chemicalSystemSelectHelpText: PropTypes.string,
    elementsSelectHelpText: PropTypes.string,
};
