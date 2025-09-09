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


class Switch(Component):
    """A Switch component.
Common wrapper for filters/inputs and their labels

Keyword arguments:

- id (string; optional)

- className (string; optional)

- falsyLabel (string; optional)

- hasLabel (boolean; optional)

- truthyLabel (string; optional)

- value (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Switch'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        value: typing.Optional[bool] = None,
        hasLabel: typing.Optional[bool] = None,
        truthyLabel: typing.Optional[str] = None,
        falsyLabel: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'falsyLabel', 'hasLabel', 'truthyLabel', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'falsyLabel', 'hasLabel', 'truthyLabel', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Switch, self).__init__(**args)

setattr(Switch, "__init__", _explicitize_args(Switch.__init__))
