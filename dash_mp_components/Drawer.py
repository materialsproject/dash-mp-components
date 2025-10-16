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


class Drawer(Component):
    """A Drawer component.
Render drawer that can be opened by a ModalTrigger within a ModalContextProvider

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children will be rendered as the drawer content.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name applied to the top-level drawer div. The \"mpc-drawer\"
    and \"modal\" classes are added automatically."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Drawer'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'className']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Drawer, self).__init__(children=children, **args)

setattr(Drawer, "__init__", _explicitize_args(Drawer.__init__))
