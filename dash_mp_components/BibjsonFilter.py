# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BibjsonFilter(Component):
    """A BibjsonFilter component.
Component for rendering, sorting, and filtering a list of citations in bibjson format
List of bibjson entries are parsed and rendered as BibCards
Expects bibjson in the format used by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- bibjson (list; optional): List of bib objects in bibjson format
Only the following bib properties are used by this component:
 - title
 - author (as a list or string)
 - year
 - doi
 - journal
If any of those properties are missing, that property will be omitted from the bibjson result card.
Any extra properties are simply ignored.
e.g.
        [
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
          },
          {
            "journal": "Physical Review B",
            "year": "2017",
            "issn": "24699969",
            "doi": "10.1103/PhysRevB.95.174110",
            "author": ["Angsten, Thomas", "Martin, Lane W.", "Asta, Mark"],
            "title": "Orientation-Dependent Properties of Epitaxially Strained Perovskite Oxide Thin Films: Insights from First-Principles Calculations",
            "ENTRYTYPE": "article",
            "ID": "angsten2017"
          }
        ]
- sortField (a value equal to: 'year', 'author', 'title'; optional): Name of property to initially sort bibjson entries by
(default: "year")
- ascending (boolean; optional): Set to true to have the initial sorting direction be ascending
(default: false)
- className (string; optional): Class to add to the top-level element of the component
Note: the class "mpc-bibjson-filter" is always added to the top-level element by default
- resultClassName (string; optional): Class to add to individual result cards
Note: the class "mpc-bibjson-card" is always added to each result by default
- fetchOpenAccessUrl (boolean; optional): Set to true to dynamically fetch a link to a free PDF of
each reference (using the "doi" field for individual bibjson entry)
NOTE: the open access URL can also be included in a bibjson entry
in the "openAccessUrl" property. If set, the URL will not be fetched."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, bibjson=Component.UNDEFINED, sortField=Component.UNDEFINED, ascending=Component.UNDEFINED, className=Component.UNDEFINED, resultClassName=Component.UNDEFINED, fetchOpenAccessUrl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'bibjson', 'sortField', 'ascending', 'className', 'resultClassName', 'fetchOpenAccessUrl']
        self._type = 'BibjsonFilter'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'bibjson', 'sortField', 'ascending', 'className', 'resultClassName', 'fetchOpenAccessUrl']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BibjsonFilter, self).__init__(**args)
