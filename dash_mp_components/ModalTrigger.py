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


class ModalTrigger(Component):
    """A ModalTrigger component.
Render a trigger that opens a ModalContent that is within the same ModalContextProvider

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children will be rendered as the trigger content.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name applied to the modal trigger span. The
    \"mpc-modal-trigger\" class is added automatically."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'ModalTrigger'


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

        super(ModalTrigger, self).__init__(children=children, **args)

setattr(ModalTrigger, "__init__", _explicitize_args(ModalTrigger.__init__))
