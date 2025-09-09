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


class BibFilter(Component):
    """A BibFilter component.
Component for rendering and filtering a list of citations in bibjson or crossref format
Expects bibjson in the format output by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)
Expects crossref in the format returned by the Crossref API

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- ascending (boolean; optional):
    Set to True to have the initial sorting direction be ascending
    @default False.

- bibEntries (list; optional):
    List of bib objects in bibjson or crossref format Only the
    following bib properties are used by this component:  - title  -
    author (as a list or string)  - year  - doi  - journal If any of
    those properties are missing, that property will be omitted from
    the bibjson result card. Any extra properties are simply ignored.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-bib-filter).

- format (a value equal to: 'bibjson', 'crossref'; optional):
    Format of the bibliographoc objects supplied in bibEntries
    @default 'bibjson'.

- preventOpenAccessFetch (boolean; optional):
    Set to True to prevent dynamically fetching a link to a free PDF
    of each reference (using the \"doi\" field for individual bib
    entry). NOTE: the open access URL can also be included in a bib
    entry in the \"openAccessUrl\" property. If set, the URL will not
    be fetched. @default False.

- resultClassName (string; optional):
    Class name(s) to append to individual result cards' default class
    (mpc-bib-card).

- sortField (a value equal to: 'year', 'author', 'title'; optional):
    Name of property to initially sort entries by @default 'year'."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'BibFilter'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        format: typing.Optional[Literal["bibjson", "crossref"]] = None,
        bibEntries: typing.Optional[typing.Sequence] = None,
        sortField: typing.Optional[Literal["year", "author", "title"]] = None,
        ascending: typing.Optional[bool] = None,
        resultClassName: typing.Optional[str] = None,
        preventOpenAccessFetch: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'ascending', 'bibEntries', 'className', 'format', 'preventOpenAccessFetch', 'resultClassName', 'sortField']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'ascending', 'bibEntries', 'className', 'format', 'preventOpenAccessFetch', 'resultClassName', 'sortField']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(BibFilter, self).__init__(**args)

setattr(BibFilter, "__init__", _explicitize_args(BibFilter.__init__))
