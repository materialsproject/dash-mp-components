# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class FilterField(Component):
    """A FilterField component.
Common wrapper for filters/inputs and their labels

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- active (boolean; optional)

- className (string; optional)

- dois (list of strings; optional)

- label (string; optional)

- styleLabel (dict; optional)

- tooltip (string; optional)

- units (string; optional)"""
    _children_props: typing.List[str] = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'FilterField'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        label: typing.Optional[str] = None,
        tooltip: typing.Optional[str] = None,
        units: typing.Optional[str] = None,
        dois: typing.Optional[typing.Sequence[str]] = None,
        active: typing.Optional[bool] = None,
        styleLabel: typing.Optional[dict] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'active', 'className', 'dois', 'label', 'styleLabel', 'tooltip', 'units']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'active', 'className', 'dois', 'label', 'styleLabel', 'tooltip', 'units']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(FilterField, self).__init__(children=children, **args)

setattr(FilterField, "__init__", _explicitize_args(FilterField.__init__))
