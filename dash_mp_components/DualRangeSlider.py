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


class DualRangeSlider(Component):
    """A DualRangeSlider component.
Slider input with controls for both the minimum and maximum bounds.

Keyword arguments:

- id (string; optional)

- className (string; optional)

- debounce (number; optional)

- domain (list of numbers; optional)

- inclusiveTickBounds (boolean; optional)

- isLogScale (boolean; optional)

- step (number; optional)

- ticks (number; optional)

- valueMax (number; optional)

- valueMin (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'DualRangeSlider'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        valueMin: typing.Optional[NumberType] = None,
        valueMax: typing.Optional[NumberType] = None,
        domain: typing.Optional[typing.Sequence[NumberType]] = None,
        isLogScale: typing.Optional[bool] = None,
        step: typing.Optional[NumberType] = None,
        ticks: typing.Optional[NumberType] = None,
        inclusiveTickBounds: typing.Optional[bool] = None,
        debounce: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'debounce', 'domain', 'inclusiveTickBounds', 'isLogScale', 'step', 'ticks', 'valueMax', 'valueMin']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'debounce', 'domain', 'inclusiveTickBounds', 'isLogScale', 'step', 'ticks', 'valueMax', 'valueMin']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DualRangeSlider, self).__init__(**args)

setattr(DualRangeSlider, "__init__", _explicitize_args(DualRangeSlider.__init__))
