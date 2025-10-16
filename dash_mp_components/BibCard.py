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


class BibCard(Component):
    """A BibCard component.
Render bibliographic information in a formatted card view

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- author (string; optional):
    Authors of the reference This string will render as is, so any
    formatting must be done beforehand.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-bib-card).

- doi (string; optional):
    The DOI (Digital Object Identifier) of the reference This
    identifier is used to generate links to the reference's online
    publication, open access PDF, and bibtex.

- journal (string; optional):
    Name of the journal or publisher of the reference.

- openAccessUrl (string; optional):
    Directly supply the URL to an accessible PDF of the reference If
    supplied, the component will not try to fetch an open access URL
    @default undefined.

- preventOpenAccessFetch (boolean; optional):
    Set to True to prevent dynamically fetching a link to a free PDF
    of each reference (using the \"doi\" field for individual bib
    entry). NOTE: the open access URL can also be included in a bib
    entry in the \"openAccessUrl\" property. If set, the URL will not
    be fetched. @default False.

- shortName (string; optional):
    Shortened title of the article.

- title (string; optional):
    Title of the reference Will render as a link if doi is supplied.

- year (string | number; optional):
    Year of the reference as either a string or number."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'BibCard'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        title: typing.Optional[str] = None,
        author: typing.Optional[str] = None,
        year: typing.Optional[typing.Union[str, NumberType]] = None,
        journal: typing.Optional[str] = None,
        doi: typing.Optional[str] = None,
        shortName: typing.Optional[str] = None,
        preventOpenAccessFetch: typing.Optional[bool] = None,
        openAccessUrl: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'author', 'className', 'doi', 'journal', 'openAccessUrl', 'preventOpenAccessFetch', 'shortName', 'title', 'year']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'author', 'className', 'doi', 'journal', 'openAccessUrl', 'preventOpenAccessFetch', 'shortName', 'title', 'year']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(BibCard, self).__init__(**args)

setattr(BibCard, "__init__", _explicitize_args(BibCard.__init__))
