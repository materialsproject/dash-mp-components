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
- className (string; optional)
- value (string; optional)
- type (a value equal to: 'elements', 'chemical_system', 'formula', 'mpid', 'smiles', 'text'; optional)
- allowedInputTypes (list; optional)
- showTypeDropdown (boolean; optional)
- placeholder (string; optional)
- errorMessage (string; optional)
- debounce (number; optional)
- periodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)
- hidePeriodicTable (boolean; optional)
- autocompleteFormulaUrl (string; optional)
- autocompleteApiKey (string; optional)
- tooltip (string; optional)
- helpItems (list; optional)
- showSubmitButton (boolean; optional)
- submitButtonId (string; optional)
- label (string; optional)
- hideWildcardButton (boolean; optional)
- chemicalSystemSelectHelpText (string; optional)
- elementsSelectHelpText (string; optional)
- maxElementSelectable (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, value=Component.UNDEFINED, type=Component.UNDEFINED, allowedInputTypes=Component.UNDEFINED, showTypeDropdown=Component.UNDEFINED, placeholder=Component.UNDEFINED, errorMessage=Component.UNDEFINED, debounce=Component.UNDEFINED, periodicTableMode=Component.UNDEFINED, hidePeriodicTable=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, autocompleteApiKey=Component.UNDEFINED, tooltip=Component.UNDEFINED, helpItems=Component.UNDEFINED, showSubmitButton=Component.UNDEFINED, submitButtonId=Component.UNDEFINED, label=Component.UNDEFINED, hideWildcardButton=Component.UNDEFINED, chemicalSystemSelectHelpText=Component.UNDEFINED, elementsSelectHelpText=Component.UNDEFINED, maxElementSelectable=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'value', 'type', 'allowedInputTypes', 'showTypeDropdown', 'placeholder', 'errorMessage', 'debounce', 'periodicTableMode', 'hidePeriodicTable', 'autocompleteFormulaUrl', 'autocompleteApiKey', 'tooltip', 'helpItems', 'showSubmitButton', 'submitButtonId', 'label', 'hideWildcardButton', 'chemicalSystemSelectHelpText', 'elementsSelectHelpText', 'maxElementSelectable']
        self._type = 'MaterialsInput'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'value', 'type', 'allowedInputTypes', 'showTypeDropdown', 'placeholder', 'errorMessage', 'debounce', 'periodicTableMode', 'hidePeriodicTable', 'autocompleteFormulaUrl', 'autocompleteApiKey', 'tooltip', 'helpItems', 'showSubmitButton', 'submitButtonId', 'label', 'hideWildcardButton', 'chemicalSystemSelectHelpText', 'elementsSelectHelpText', 'maxElementSelectable']
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
