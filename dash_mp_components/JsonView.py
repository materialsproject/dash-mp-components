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


class JsonView(Component):
    """A JsonView component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- collapseStringsAfterLength (boolean | number; optional)

- collapsed (boolean | number; optional)

- defaultValue (dict; optional)

- displayDataTypes (boolean; optional)

- displayObjectSize (boolean; optional)

- enableClipboard (boolean; optional)

- groupArraysAfterLength (number; optional)

- iconStyle (string; optional)

- indentWidth (number; optional)

- name (boolean | string; optional)

- sortKeys (boolean; optional)

- src (dict; optional)

- theme (string; optional)

- validationMessage (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'JsonView'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        src: typing.Optional[dict] = None,
        name: typing.Optional[typing.Union[bool, str]] = None,
        theme: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        iconStyle: typing.Optional[str] = None,
        indentWidth: typing.Optional[NumberType] = None,
        collapsed: typing.Optional[typing.Union[bool, NumberType]] = None,
        collapseStringsAfterLength: typing.Optional[typing.Union[bool, NumberType]] = None,
        groupArraysAfterLength: typing.Optional[NumberType] = None,
        enableClipboard: typing.Optional[bool] = None,
        displayObjectSize: typing.Optional[bool] = None,
        displayDataTypes: typing.Optional[bool] = None,
        defaultValue: typing.Optional[dict] = None,
        sortKeys: typing.Optional[bool] = None,
        validationMessage: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'collapseStringsAfterLength', 'collapsed', 'defaultValue', 'displayDataTypes', 'displayObjectSize', 'enableClipboard', 'groupArraysAfterLength', 'iconStyle', 'indentWidth', 'name', 'sortKeys', 'src', 'style', 'theme', 'validationMessage']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'collapseStringsAfterLength', 'collapsed', 'defaultValue', 'displayDataTypes', 'displayObjectSize', 'enableClipboard', 'groupArraysAfterLength', 'iconStyle', 'indentWidth', 'name', 'sortKeys', 'src', 'style', 'theme', 'validationMessage']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(JsonView, self).__init__(**args)

setattr(JsonView, "__init__", _explicitize_args(JsonView.__init__))
