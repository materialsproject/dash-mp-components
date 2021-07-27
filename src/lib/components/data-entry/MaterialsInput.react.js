import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * An input field component for searching by mp-id, elements, formula, smiles, or text.
 * Renders a text input and a periodic table within a PeriodicContext to support two-way binding between the input and periodic table.
 * i.e. when elements are typed into the field, they are selected in the table,
 * and when elements are selected in the table, they are appended to the field's input.
 */

export default class MaterialsInput extends Component {
    render() {
        return <mpc.MaterialsInput {...this.props} />;
    }
}

MaterialsInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
    value: PropTypes.string,
    inputType: PropTypes.oneOf([
        'elements',
        'formula',
        'mpid',
        'smiles',
        'text',
    ]),
    allowedInputTypes: PropTypes.array,
    showInputTypeDropdown: PropTypes.bool,
    isChemSys: PropTypes.bool,
    allowSmiles: PropTypes.bool,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    debounce: PropTypes.number,
    periodicTableMode: PropTypes.oneOf(['toggle', 'focus', 'none']),
    hidePeriodicTable: PropTypes.bool,
    autocompleteFormulaUrl: PropTypes.string,
    autocompleteApiKey: PropTypes.string,
    tooltip: PropTypes.string,
};
