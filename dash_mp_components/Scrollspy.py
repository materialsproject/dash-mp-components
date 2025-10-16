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


class Scrollspy(Component):
    """A Scrollspy component.
Component for building in-page navigation menus with scrollspy functionality

Keyword arguments:

- activeClassName (string; optional):
    Class name applied to active links in the menu (default:
    'is-active').

- menuClassName (string; optional):
    Class name applied to the <aside> that contains the whole menu
    (default: 'menu').

- menuGroupLabelClassName (string; optional):
    Class name applied to all menu group labels (default:
    'menu-label').

- menuGroups (list; optional):
    An array of MenuGroup items that is used to build the menu and its
    links. Each MenuGroup has an optional label and a required 'items'
    array of MenuItems. Each MenuItem has a label that is rendered in
    the menu and a targetId that is the id of the element it should
    link to. Do not include '#' in targetId. example:       [
    {label: '...', items: [           {label: '...', targetId: '...'},
    {label: '...', targetId: '...', items: [             {label:
    '...', targetId: '...'}           }]         ]}       ].

- menuItemClassName (string; optional):
    Class name applied to the <li> of each menu item (default: '').

- menuItemContainerClassName (string; optional):
    Class name applied to each <ul> of menu items (default:
    'menu-list').

- offset (number; optional):
    An integer to determine the scroll offset from an item that will
    trigger it active (default: -20)."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Scrollspy'


    def __init__(
        self,
        menuGroups: typing.Optional[typing.Sequence] = None,
        activeClassName: typing.Optional[str] = None,
        menuClassName: typing.Optional[str] = None,
        menuGroupLabelClassName: typing.Optional[str] = None,
        menuItemContainerClassName: typing.Optional[str] = None,
        menuItemClassName: typing.Optional[str] = None,
        offset: typing.Optional[NumberType] = None,
        **kwargs
    ):
        self._prop_names = ['activeClassName', 'menuClassName', 'menuGroupLabelClassName', 'menuGroups', 'menuItemClassName', 'menuItemContainerClassName', 'offset']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['activeClassName', 'menuClassName', 'menuGroupLabelClassName', 'menuGroups', 'menuItemClassName', 'menuItemContainerClassName', 'offset']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Scrollspy, self).__init__(**args)

setattr(Scrollspy, "__init__", _explicitize_args(Scrollspy.__init__))
