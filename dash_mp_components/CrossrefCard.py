# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CrossrefCard(Component):
    """A CrossrefCard component.
Parses a crossref entry or fetches a reference from the crossref API and renders a BibCard.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class name(s) to append to the component's default class
- crossrefEntry (boolean | number | string | dict | list; optional): A single bib object in crossref format.
If a crossEntry is supplied, a request will not be made to the crossref API.
The following bib values are parsed from a Crossref API response: title, authors, year, doi, journal.
- identifier (string; optional): Either a DOI or bibtex string to use to search against the Crossref /works endpoint.
An identifier must be supplied if you are not supplying the crossrefEntry directly.
- errorMessage (string; optional): Error message to show inside the card if the crossref request fails
@default 'Could not find reference'
- fetchOpenAccessUrl (boolean; optional): Set to true to dynamically fetch a link to a free PDF of
the reference (using the bibjsonEntry doi field).
NOTE: the open access URL can also be included in the bibjsonEntry
in the "openAccessUrl" property. If set, the URL will not be fetched."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, crossrefEntry=Component.UNDEFINED, identifier=Component.UNDEFINED, errorMessage=Component.UNDEFINED, fetchOpenAccessUrl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'crossrefEntry', 'identifier', 'errorMessage', 'fetchOpenAccessUrl']
        self._type = 'CrossrefCard'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'crossrefEntry', 'identifier', 'errorMessage', 'fetchOpenAccessUrl']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CrossrefCard, self).__init__(**args)
