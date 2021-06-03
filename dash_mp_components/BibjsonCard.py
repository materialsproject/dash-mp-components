# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BibjsonCard(Component):
    """A BibjsonCard component.
Parses a bibjson entry and renders a BibCard
Expects bibjsonEntry in the format used by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class name(s) to append to the component's default class
- bibjsonEntry (boolean | number | string | dict | list; optional): A single bib object in bibjson format
Only the following bib properties are used by this component: title, author (as a list or string), year, doi, journal.
If any of those properties are missing, that property will be omitted from the bibjson result card.
Any extra properties are simply ignored.
e.g.
      {
        "journal": "Physical Review X",
        "year": "2015",
        "issn": "21603308",
        "isbn": "2160-3308",
        "doi": "10.1103/PhysRevX.5.011006",
        "author": ["Agapito, Luis A.", "Curtarolo, Stefano", "Nardelli, Marco Buongiorno"],
        "title": "Reformulation of DFT + U as a Pseudohybrid Hubbard Density Functional for Accelerated Materials Discovery",
        "ENTRYTYPE": "article",
        "ID": "agapito2015"
      }
- fetchOpenAccessUrl (boolean; optional): Set to true to dynamically fetch a link to a free PDF of
the reference (using the bibjsonEntry doi field)
NOTE: the open access URL can also be included in the bibjsonEntry
in the "openAccessUrl" property. If set, the URL will not be fetched."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, bibjsonEntry=Component.UNDEFINED, fetchOpenAccessUrl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'bibjsonEntry', 'fetchOpenAccessUrl']
        self._type = 'BibjsonCard'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'bibjsonEntry', 'fetchOpenAccessUrl']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BibjsonCard, self).__init__(**args)
