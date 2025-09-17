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


class MatSidebar(Component):
    """A MatSidebar component.
Material navigation bar

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- appId (string; optional):
    This is a read-only prop that dash callback can subscribe to.

- currentApp (string; optional):
    The ID of the current selected app.

- layout (a value equal to: 'vertical', 'horizontal'; optional):
    The layout of the sidebar."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'MatSidebar'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        currentApp: typing.Optional[str] = None,
        appId: typing.Optional[str] = None,
        layout: typing.Optional[Literal["vertical", "horizontal"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'appId', 'currentApp', 'layout']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'appId', 'currentApp', 'layout']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(MatSidebar, self).__init__(**args)

setattr(MatSidebar, "__init__", _explicitize_args(MatSidebar.__init__))
