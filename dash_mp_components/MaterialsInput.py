# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MaterialsInput(Component):
    """A MaterialsInput component.
An input field component for searching by mp-id, elements, formula, smiles, or text.
Renders a text input and a periodic table within a PeriodicContext to support two-way binding between the input and periodic table.
i.e. when elements are typed into the field, they are selected in the table,
and when elements are selected in the table, they are appended to the field's input.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- value (string; optional)
- inputType (a value equal to: 'elements', 'formula', 'mpid', 'smiles', 'text'; optional)
- allowedInputTypes (list; optional)
- showInputTypeDropdown (boolean; optional)
- isChemSys (boolean; optional)
- allowSmiles (boolean; optional)
- placeholder (string; optional)
- errorMessage (string; optional)
- debounce (number; optional)
- periodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)
- hidePeriodicTable (boolean; optional)
- autocompleteFormulaUrl (string; optional)
- autocompleteApiKey (string; optional)
- tooltip (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, inputType=Component.UNDEFINED, allowedInputTypes=Component.UNDEFINED, showInputTypeDropdown=Component.UNDEFINED, isChemSys=Component.UNDEFINED, allowSmiles=Component.UNDEFINED, placeholder=Component.UNDEFINED, errorMessage=Component.UNDEFINED, debounce=Component.UNDEFINED, periodicTableMode=Component.UNDEFINED, hidePeriodicTable=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, autocompleteApiKey=Component.UNDEFINED, tooltip=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'inputType', 'allowedInputTypes', 'showInputTypeDropdown', 'isChemSys', 'allowSmiles', 'placeholder', 'errorMessage', 'debounce', 'periodicTableMode', 'hidePeriodicTable', 'autocompleteFormulaUrl', 'autocompleteApiKey', 'tooltip']
        self._type = 'MaterialsInput'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'inputType', 'allowedInputTypes', 'showInputTypeDropdown', 'isChemSys', 'allowSmiles', 'placeholder', 'errorMessage', 'debounce', 'periodicTableMode', 'hidePeriodicTable', 'autocompleteFormulaUrl', 'autocompleteApiKey', 'tooltip']
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
