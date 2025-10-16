# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


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

- inputClassName (string; optional)

- label (string; optional)

- loading (boolean; optional)

- maxElementSelectable (number; optional)

- periodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)

- placeholder (string; optional)

- showSubmitButton (boolean; optional)

- showTypeDropdown (boolean; optional)

- submitButtonClicks (number; optional)

- submitButtonText (string; optional)

- tooltip (string; optional)

- type (a value equal to: 'elements', 'chemical_system', 'formula', 'mpid', 'smiles', 'text', 'molecule_formula'; optional)

- value (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'MaterialsInput'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        inputClassName: typing.Optional[str] = None,
        value: typing.Optional[str] = None,
        type: typing.Optional[Literal["elements", "chemical_system", "formula", "mpid", "smiles", "text", "molecule_formula"]] = None,
        allowedInputTypes: typing.Optional[typing.Sequence] = None,
        showTypeDropdown: typing.Optional[bool] = None,
        placeholder: typing.Optional[str] = None,
        errorMessage: typing.Optional[str] = None,
        debounce: typing.Optional[NumberType] = None,
        periodicTableMode: typing.Optional[Literal["toggle", "focus", "none"]] = None,
        hidePeriodicTable: typing.Optional[bool] = None,
        autocompleteFormulaUrl: typing.Optional[str] = None,
        autocompleteApiKey: typing.Optional[str] = None,
        tooltip: typing.Optional[str] = None,
        helpItems: typing.Optional[typing.Sequence] = None,
        showSubmitButton: typing.Optional[bool] = None,
        submitButtonClicks: typing.Optional[NumberType] = None,
        submitButtonText: typing.Optional[str] = None,
        label: typing.Optional[str] = None,
        hideWildcardButton: typing.Optional[bool] = None,
        chemicalSystemSelectHelpText: typing.Optional[str] = None,
        elementsSelectHelpText: typing.Optional[str] = None,
        maxElementSelectable: typing.Optional[NumberType] = None,
        loading: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'allowedInputTypes', 'autocompleteApiKey', 'autocompleteFormulaUrl', 'chemicalSystemSelectHelpText', 'className', 'debounce', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'hidePeriodicTable', 'hideWildcardButton', 'inputClassName', 'label', 'loading', 'maxElementSelectable', 'periodicTableMode', 'placeholder', 'showSubmitButton', 'showTypeDropdown', 'submitButtonClicks', 'submitButtonText', 'tooltip', 'type', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowedInputTypes', 'autocompleteApiKey', 'autocompleteFormulaUrl', 'chemicalSystemSelectHelpText', 'className', 'debounce', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'hidePeriodicTable', 'hideWildcardButton', 'inputClassName', 'label', 'loading', 'maxElementSelectable', 'periodicTableMode', 'placeholder', 'showSubmitButton', 'showTypeDropdown', 'submitButtonClicks', 'submitButtonText', 'tooltip', 'type', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(MaterialsInput, self).__init__(**args)

setattr(MaterialsInput, "__init__", _explicitize_args(MaterialsInput.__init__))
