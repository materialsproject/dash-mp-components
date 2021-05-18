# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class BibCard(Component):
    """A BibCard component.
Render bibliographic information in a formatted card view

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class to add to the top-level element of the component
Note: the class "mpc-bib-card" is always added to the top-level element by default
- title (string; optional): Title of the reference
Will render as a link if doi is supplied
- author (string; optional): Authors of the reference
This string will render as is, so any formatting must be done beforehand
- year (optional): Year of the reference as either a string or number
- journal (string; optional): Name of the journal or publisher of the reference
- doi (string; optional): The DOI (Digital Object Identifier) of the reference
This identifier is used to generate links to the reference's
online publication, open access PDF, and bibtex
- fetchOpenAccessUrl (boolean; optional): Set to true to dynamically fetch a link to a free PDF of
the reference (using the doi prop)
(default: false)
- openAccessUrl (string; optional): Directly supply the URL to an accessible PDF of the reference
If supplied, the component will not try to fetch an open access URL
(default: undefined)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, author=Component.UNDEFINED, year=Component.UNDEFINED, journal=Component.UNDEFINED, doi=Component.UNDEFINED, fetchOpenAccessUrl=Component.UNDEFINED, openAccessUrl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'title', 'author', 'year', 'journal', 'doi', 'fetchOpenAccessUrl', 'openAccessUrl']
        self._type = 'BibCard'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'title', 'author', 'year', 'journal', 'doi', 'fetchOpenAccessUrl', 'openAccessUrl']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(BibCard, self).__init__(**args)
