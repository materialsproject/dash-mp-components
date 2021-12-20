# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


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

- title (string; optional):
    Title of the reference Will render as a link if doi is supplied.

- year (optional):
    Year of the reference as either a string or number."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, title=Component.UNDEFINED, author=Component.UNDEFINED, year=Component.UNDEFINED, journal=Component.UNDEFINED, doi=Component.UNDEFINED, preventOpenAccessFetch=Component.UNDEFINED, openAccessUrl=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'author', 'className', 'doi', 'journal', 'openAccessUrl', 'preventOpenAccessFetch', 'title', 'year']
        self._type = 'BibCard'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'author', 'className', 'doi', 'journal', 'openAccessUrl', 'preventOpenAccessFetch', 'title', 'year']
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
