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


class NotificationDropdown(Component):
    """A NotificationDropdown component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- hasUnread (boolean; optional)

- isHidden (boolean; optional)

- isModal (boolean; optional)

- isRight (boolean; optional)

- items (list; optional)

- link (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'NotificationDropdown'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        className: typing.Optional[str] = None,
        items: typing.Optional[typing.Sequence] = None,
        isRight: typing.Optional[bool] = None,
        isModal: typing.Optional[bool] = None,
        isHidden: typing.Optional[bool] = None,
        hasUnread: typing.Optional[bool] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        link: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'className', 'hasUnread', 'isHidden', 'isModal', 'isRight', 'items', 'link']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'hasUnread', 'isHidden', 'isModal', 'isRight', 'items', 'link']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(NotificationDropdown, self).__init__(children=children, **args)

setattr(NotificationDropdown, "__init__", _explicitize_args(NotificationDropdown.__init__))
