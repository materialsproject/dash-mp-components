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


class SearchUISearchBar(Component):
    """A SearchUISearchBar component.
Search bar to be used within a `SearchUIContainer`.

Keyword arguments:

- id (string; optional)

- allowedInputTypesMap (dict; optional)

- chemicalSystemSelectHelpText (string; optional)

- className (string; optional)

- elementsSelectHelpText (string; optional)

- errorMessage (string; optional)

- helpItems (list; optional)

- periodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)

- placeholder (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'SearchUISearchBar'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        placeholder: typing.Optional[str] = None,
        errorMessage: typing.Optional[str] = None,
        allowedInputTypesMap: typing.Optional[dict] = None,
        periodicTableMode: typing.Optional[Literal["toggle", "focus", "none"]] = None,
        helpItems: typing.Optional[typing.Sequence] = None,
        chemicalSystemSelectHelpText: typing.Optional[str] = None,
        elementsSelectHelpText: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'allowedInputTypesMap', 'chemicalSystemSelectHelpText', 'className', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'periodicTableMode', 'placeholder']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowedInputTypesMap', 'chemicalSystemSelectHelpText', 'className', 'elementsSelectHelpText', 'errorMessage', 'helpItems', 'periodicTableMode', 'placeholder']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(SearchUISearchBar, self).__init__(**args)

setattr(SearchUISearchBar, "__init__", _explicitize_args(SearchUISearchBar.__init__))
