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


class PeriodicElement(Component):
    """A PeriodicElement component.
This component displays a periodic element

Keyword arguments:

- id (string; optional)

- element (string; optional)

- size (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'PeriodicElement'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        size: typing.Optional[NumberType] = None,
        element: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'element', 'size']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'element', 'size']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(PeriodicElement, self).__init__(**args)

setattr(PeriodicElement, "__init__", _explicitize_args(PeriodicElement.__init__))
