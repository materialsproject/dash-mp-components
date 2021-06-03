# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BibFilter(Component):
    """A BibFilter component.
Component for rendering and filtering a list of citations in bibjson or crossref format
Expects bibjson in the format output by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)
Expects crossref in the format returned by the Crossref API

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class name(s) to append to the component's default class (mpc-bib-filter)
- format (a value equal to: 'bibjson', 'crossref'; optional): Format of the bibliographoc objects supplied in bibEntries
@default 'bibjson'
- bibEntries (list; optional): List of bib objects in bibjson or crossref format
Only the following bib properties are used by this component:
 - title
 - author (as a list or string)
 - year
 - doi
 - journal
If any of those properties are missing, that property will be omitted from the bibjson result card.
Any extra properties are simply ignored.
- sortField (a value equal to: 'year', 'author', 'title'; optional): Name of property to initially sort entries by
@default 'year'
- ascending (boolean; optional): Set to true to have the initial sorting direction be ascending
@default false
- resultClassName (string; optional): Class name(s) to append to individual result cards' default class (mpc-bib-card)
- fetchOpenAccessUrl (boolean; optional): Set to true to dynamically fetch a link to a free PDF of
each reference (using the "doi" field for individual bibjson entry)
NOTE: the open access URL can also be included in a bibjson entry
in the "openAccessUrl" property. If set, the URL will not be fetched.
@default false"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, format=Component.UNDEFINED, bibEntries=Component.UNDEFINED, sortField=Component.UNDEFINED, ascending=Component.UNDEFINED, resultClassName=Component.UNDEFINED, fetchOpenAccessUrl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'format', 'bibEntries', 'sortField', 'ascending', 'resultClassName', 'fetchOpenAccessUrl']
        self._type = 'BibFilter'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'format', 'bibEntries', 'sortField', 'ascending', 'resultClassName', 'fetchOpenAccessUrl']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BibFilter, self).__init__(**args)
