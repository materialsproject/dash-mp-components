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


class BibjsonCard(Component):
    """A BibjsonCard component.
Parses a bibjson entry and renders a BibCard
Expects bibjsonEntry in the format used by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- bibjsonEntry (boolean | number | string | dict | list; optional):
    A single bib object in bibjson format Only the following bib
    properties are used by this component: title, author (as a list or
    string), year, doi, journal. If any of those properties are
    missing, that property will be omitted from the bibjson result
    card. Any extra properties are simply ignored. e.g.       {
    \"journal\": \"Physical Review X\",         \"year\": \"2015\",
    \"issn\": \"21603308\",         \"isbn\": \"2160-3308\",
    \"doi\": \"10.1103/PhysRevX.5.011006\",         \"author\":
    [\"Agapito, Luis A.\", \"Curtarolo, Stefano\", \"Nardelli, Marco
    Buongiorno\"],         \"title\": \"Reformulation of DFT + U as a
    Pseudohybrid Hubbard Density Functional for Accelerated Materials
    Discovery\",         \"ENTRYTYPE\": \"article\",         \"ID\":
    \"agapito2015\"       }.

- className (string; optional):
    Class name(s) to append to the component's default class.

- preventOpenAccessFetch (boolean; optional):
    Set to True to prevent dynamically fetching a link to a free PDF
    of each reference (using the \"doi\" field for individual bib
    entry). NOTE: the open access URL can also be included in a bib
    entry in the \"openAccessUrl\" property. If set, the URL will not
    be fetched. @default False."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'BibjsonCard'


    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        bibjsonEntry: typing.Optional[typing.Any] = None,
        preventOpenAccessFetch: typing.Optional[bool] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'bibjsonEntry', 'className', 'preventOpenAccessFetch']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bibjsonEntry', 'className', 'preventOpenAccessFetch']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(BibjsonCard, self).__init__(**args)

setattr(BibjsonCard, "__init__", _explicitize_args(BibjsonCard.__init__))
