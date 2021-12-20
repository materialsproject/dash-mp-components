# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MaterialsInput(Component):
    """A MaterialsInput component.
An input field component for searching by mp-id, elements, formula, smiles, or text.
Renders a text input and a periodic table within a PeriodicContext to support two-way binding between the input and periodic table.
i.e. when elements are typed into the field, they are selected in the table,
and when elements are selected in the table, they are appended to the field's input.

Documentation: https://materialsproject.github.io/mp-react-components/?path=/docs/data-entry-materialsinput--multi-type

Keyword arguments:

- id (string; optional)

- allowedInputTypes (list; optional)

- autocompleteApiKey (string; optional)

- autocompleteFormulaUrl (string; optional)

- chemicalSystemSelectHelpText (string; optional)

- className (string; optional)

- debounce (number; optional)

- elementsSelectHelpText (string; optional)

- errorMessage (string; optional)

- helpItems (list; optional)

- hidePeriodicTable (boolean; optional)

- hideWildcardButton (boolean; optional)

- label (string; optional)

- maxElementSelectable (number; optional)

- periodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)

- placeholder (string; optional)

- showSubmitButton (boolean; optional)

- showTypeDropdown (boolean; optional)

- submitButtonId (string; optional)

- tooltip (string; optional)

- type (a value equal to: 'elements', 'chemical_system', 'formula', 'mpid', 'smiles', 'text'; optional)

- value (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, value=Component.UNDEFINED, type=Component.UNDEFINED, allowedInputTypes=Component.UNDEFINED, showTypeDropdown=Component.UNDEFINED, placeholder=Component.UNDEFINED, errorMessage=Component.UNDEFINED, debounce=Component.UNDEFINED, periodicTableMode=Component.UNDEFINED, hidePeriodicTable=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, autocompleteApiKey=Component.UNDEFINED, tooltip=Component.UNDEFINED, helpItems=Component.UNDEFINED, showSubmitButton=Component.UNDEFINED, submitButtonId=Component.UNDEFINED, label=Component.UNDEFINED, hideWildcardButton=Component.UNDEFINED, chemicalSystemSelectHelpText=Component.UNDEFINED, elementsSelectHelpText=Component.UNDEFINED, maxElementSelectable=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowedInputTypes', 'autocompleteApiKey', 'autocompleteFormulaUrl', 'chemicalSystemSelectHelpText', 'className', 'debounce', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'hidePeriodicTable', 'hideWildcardButton', 'label', 'maxElementSelectable', 'periodicTableMode', 'placeholder', 'showSubmitButton', 'showTypeDropdown', 'submitButtonId', 'tooltip', 'type', 'value']
        self._type = 'MaterialsInput'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowedInputTypes', 'autocompleteApiKey', 'autocompleteFormulaUrl', 'chemicalSystemSelectHelpText', 'className', 'debounce', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'hidePeriodicTable', 'hideWildcardButton', 'label', 'maxElementSelectable', 'periodicTableMode', 'placeholder', 'showSubmitButton', 'showTypeDropdown', 'submitButtonId', 'tooltip', 'type', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MaterialsInput, self).__init__(**args)
