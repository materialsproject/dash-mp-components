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


class PeriodicTableInput(Component):
    """A PeriodicTableInput component.
MpPeriodicTableInput is a component that allows user to select
some components from a periodic table

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- forceTableLayout (a value equal to: 'spaced', 'compact', 'small', 'map'; optional):
    Force the table to be in a specific layout.

- maxElementSelectable (number; default 10):
    Maximum number of selectable elements.

- state (dict; optional):
    This is a read-only prop that dash callback can subscribe to."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'PeriodicTableInput'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        state: typing.Optional[dict] = None,
        maxElementSelectable: typing.Optional[NumberType] = None,
        forceTableLayout: typing.Optional[Literal["spaced", "compact", "small", "map"]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'forceTableLayout', 'maxElementSelectable', 'state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'forceTableLayout', 'maxElementSelectable', 'state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(PeriodicTableInput, self).__init__(**args)

setattr(PeriodicTableInput, "__init__", _explicitize_args(PeriodicTableInput.__init__))
