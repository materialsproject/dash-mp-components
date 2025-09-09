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


class BibtexButton(Component):
    """A BibtexButton component.
Standardized button for linking to BibTeX.
If no url prop is supplied, a link will be generated
using the doi prop and doi2bib.org.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-bibtex-button) @default 'button is-small'.

- doi (string; optional):
    The DOI (Digital Object Identifier) of the reference to pass to
    doi2bib.org.

- target (string; optional):
    Value to add to the anchor tag's target attribute @default
    '_blank'.

- url (string; optional):
    Directly supply the URL to a reference's bibtex. If supplied, the
    component will not generate its own link using the doi prop."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'BibtexButton'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        doi: typing.Optional[str] = None,
        url: typing.Optional[str] = None,
        target: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'className', 'doi', 'target', 'url']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'doi', 'target', 'url']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(BibtexButton, self).__init__(**args)

setattr(BibtexButton, "__init__", _explicitize_args(BibtexButton.__init__))
