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


class Tabs(Component):
    """A Tabs component.
Custom wrapper for the react-tabs component.
See https://github.com/reactjs/react-tabs

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the separate tab contents. Children
    must be a list of elements that is the same length as the list of
    labels in the labels prop. The element's order in the children
    array determines which label it is associated with.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- arbitraryProps (dict; optional):
    Object for placing all other props that are supported by
    react-select but are not explicitly defined here. See
    https://github.com/reactjs/react-tabs  This is a workaround
    because Dash components cannot accept props that aren't explicitly
    defined. e.g.         {           'defaultFocus': True,
    'selectedTabClassName': 'active-tab'          }.

- className (string; optional):
    Class name applied to top level wrapper for tabs and tab content.
    The \"mpc-tabs\" class is added automatically.

- labels (list of strings; optional):
    List of strings to use as labels for the tabs. The number of
    labels must equal the number of children (i.e. tab content items).

- tabIndex (number; optional):
    The current or default tabIndex to be active. This value can be
    watched and changed from outside the component (e.g. via dash
    callback)."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Tabs'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        labels: typing.Optional[typing.Sequence[str]] = None,
        tabIndex: typing.Optional[NumberType] = None,
        arbitraryProps: typing.Optional[dict] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'arbitraryProps', 'className', 'labels', 'tabIndex']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'arbitraryProps', 'className', 'labels', 'tabIndex']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Tabs, self).__init__(children=children, **args)

setattr(Tabs, "__init__", _explicitize_args(Tabs.__init__))
