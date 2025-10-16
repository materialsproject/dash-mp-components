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


class Formula(Component):
    """A Formula component.
Render formula strings with proper subscripts.
Note that this component expects the string to be
a valid formula.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the content of the formula. Must be a
    simple string.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-formula).

- setProps (optional):
    Dash-assigned callback that should be called whenever any of the
    properties change."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Formula'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'className', 'setProps']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'setProps']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Formula, self).__init__(children=children, **args)

setattr(Formula, "__init__", _explicitize_args(Formula.__init__))
