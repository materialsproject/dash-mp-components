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


class PeriodicContextTable(Component):
    """A PeriodicContextTable component.


Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional)

- disabledElements (list; optional):
    A list of symbols to grey-out as disabled.

- enabledElements (list; optional):
    A list of selected symbols.

- forceTableLayout (string; optional):
    Force table layout.

- forwardOuterChange (boolean; optional):
    Forward external changes.

- hiddenElements (list; optional):
    A list of hidden symbols.

- maxElementSelectable (number; optional):
    The maximum number of selectable elements.

- state (dict; optional):
    The state of the table, as exposed in the dash callback."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'PeriodicContextTable'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        disabledElements: typing.Optional[typing.Sequence] = None,
        enabledElements: typing.Optional[typing.Sequence] = None,
        hiddenElements: typing.Optional[typing.Sequence] = None,
        forwardOuterChange: typing.Optional[bool] = None,
        forceTableLayout: typing.Optional[str] = None,
        maxElementSelectable: typing.Optional[NumberType] = None,
        state: typing.Optional[dict] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'disabledElements', 'enabledElements', 'forceTableLayout', 'forwardOuterChange', 'hiddenElements', 'maxElementSelectable', 'state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'disabledElements', 'enabledElements', 'forceTableLayout', 'forwardOuterChange', 'hiddenElements', 'maxElementSelectable', 'state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(PeriodicContextTable, self).__init__(children=children, **args)

setattr(PeriodicContextTable, "__init__", _explicitize_args(PeriodicContextTable.__init__))
