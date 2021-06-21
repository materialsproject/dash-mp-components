# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PublicationButton(Component):
    """A PublicationButton component.
Standardized button for linking to a publication.
If a doi prop or doi.org link is supplied, an open access link
will also be generated next to the publication link.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- doi (string; optional): The DOI (Digital Object Identifier) of the publication
Will be used to generate a doi.org link and to fetch an open access PDF link.
- url (string; optional): Directly supply the URL to the publication.
If a doi.org url is supplied, this component will automatically
parse the url for the doi and use that to fetch an open access link.
- openAccessUrl (string; optional): Directly supply the URL to an openly accessible PDF of the reference.
If supplied, the component will not try to fetch an open access URL.
- preventOpenAccessFetch (boolean; optional): Set to true to prevent any requests to the open access api.
Note that if you supply your own openAccessUrl, this prop is not necessary.
- target (string; optional): Value to add to the anchor tag's target attribute
@default '_blank'"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, doi=Component.UNDEFINED, url=Component.UNDEFINED, openAccessUrl=Component.UNDEFINED, preventOpenAccessFetch=Component.UNDEFINED, target=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'doi', 'url', 'openAccessUrl', 'preventOpenAccessFetch', 'target']
        self._type = 'PublicationButton'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'doi', 'url', 'openAccessUrl', 'preventOpenAccessFetch', 'target']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PublicationButton, self).__init__(**args)
