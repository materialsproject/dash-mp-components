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


class Tooltip(Component):
    """A Tooltip component.
Tooltip component based on react-tooltip (https://github.com/wwayne/react-tooltip).
To attach a Tooltip component to a trigger element,
add the attributes "data-tip" and "data-for" to the trigger element.
The "data-for" attribute's value should be equal to the id of the Tooltip
component you want to connect it to.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the content of the tooltip. This can
    be simple text or a component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- border (boolean; optional)

- className (string; optional)

- clickable (boolean; optional)

- delayHide (number; optional)

- delayShow (number; optional)

- disable (boolean; optional)

- effect (string; optional)

- event (string; optional)

- eventOff (string; optional)

- globalEventOff (string; optional)

- html (boolean; optional)

- multiline (boolean; optional)

- offset (dict; optional)

- place (string; optional)

- scrollHide (boolean; optional)

- type (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'Tooltip'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        place: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
        effect: typing.Optional[str] = None,
        event: typing.Optional[str] = None,
        eventOff: typing.Optional[str] = None,
        globalEventOff: typing.Optional[str] = None,
        offset: typing.Optional[dict] = None,
        multiline: typing.Optional[bool] = None,
        className: typing.Optional[str] = None,
        html: typing.Optional[bool] = None,
        delayHide: typing.Optional[NumberType] = None,
        delayShow: typing.Optional[NumberType] = None,
        border: typing.Optional[bool] = None,
        disable: typing.Optional[bool] = None,
        scrollHide: typing.Optional[bool] = None,
        clickable: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'border', 'className', 'clickable', 'delayHide', 'delayShow', 'disable', 'effect', 'event', 'eventOff', 'globalEventOff', 'html', 'multiline', 'offset', 'place', 'scrollHide', 'type']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'border', 'className', 'clickable', 'delayHide', 'delayShow', 'disable', 'effect', 'event', 'eventOff', 'globalEventOff', 'html', 'multiline', 'offset', 'place', 'scrollHide', 'type']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(Tooltip, self).__init__(children=children, **args)

setattr(Tooltip, "__init__", _explicitize_args(Tooltip.__init__))
