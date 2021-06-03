# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OpenAccessButton(Component):
    """An OpenAccessButton component.
Standardized button for linking to an Open Access PDF.
If no url prop is supplied, a PDF link will be fetched
from the Open Access Button API using the doi prop.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class name(s) to append to the component's default class (mpc-open-access-button)
@default 'button is-small'
- doi (string; optional): The DOI (Digital Object Identifier) of the reference
to attempt to fetch an open access PDF link for.
- url (string; optional): Directly supply the URL to an accessible PDF of the reference.
If supplied, the component will not try to fetch an open access URL.
- showLoadingText (boolean; optional): Set to true to show the text "Loading..." inside the link
while the URL is being fetched.
If false, the is-loading is applied to the link while loading.
If supplying the Bulma button class, this will show a spinner icon.
@default false
- target (string; optional): Value to add to the anchor tag's target attribute
@default '_blank'"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, doi=Component.UNDEFINED, url=Component.UNDEFINED, showLoadingText=Component.UNDEFINED, target=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'doi', 'url', 'showLoadingText', 'target']
        self._type = 'OpenAccessButton'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'doi', 'url', 'showLoadingText', 'target']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OpenAccessButton, self).__init__(**args)
