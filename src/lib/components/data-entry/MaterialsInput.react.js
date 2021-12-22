import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * An input field component for searching by mp-id, elements, formula, smiles, or text.
 * Renders a text input and a periodic table within a PeriodicContext to support two-way binding between the input and periodic table.
 * i.e. when elements are typed into the field, they are selected in the table,
 * and when elements are selected in the table, they are appended to the field's input.
 *
 * Documentation: https://materialsproject.github.io/mp-react-components/?path=/docs/data-entry-materialsinput--multi-type
 */

export default class MaterialsInput extends Component {
    render() {
        return <mpc.MaterialsInput {...this.props} />;
    }
}

MaterialsInput.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    className: PropTypes.string,
    inputClassName: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.oneOf([
        'elements',
        'chemical_system',
        'formula',
        'mpid',
        'smiles',
        'text',
    ]),
    allowedInputTypes: PropTypes.array,
    showTypeDropdown: PropTypes.bool,
    placeholder: PropTypes.string,
    errorMessage: PropTypes.string,
    debounce: PropTypes.number,
    periodicTableMode: PropTypes.oneOf(['toggle', 'focus', 'none']),
    hidePeriodicTable: PropTypes.bool,
    autocompleteFormulaUrl: PropTypes.string,
    autocompleteApiKey: PropTypes.string,
    tooltip: PropTypes.string,
    helpItems: PropTypes.array,
    showSubmitButton: PropTypes.bool,
    submitButtonClicks: PropTypes.number,
    submitButtonText: PropTypes.string,
    label: PropTypes.string,
    hideWildcardButton: PropTypes.bool,
    chemicalSystemSelectHelpText: PropTypes.string,
    elementsSelectHelpText: PropTypes.string,
    maxElementSelectable: PropTypes.number,
    loading: PropTypes.bool,
};
