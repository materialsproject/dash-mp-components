# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OpenAccessLink(Component):
    """An OpenAccessLink component.
Render bibliographic information in a formatted card view

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Use the children prop to set the inner link content
This can be simple text or a component
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class to add to the top-level element of the component
- doi (string; optional): The DOI (Digital Object Identifier) of the reference
to attempt to fetch an open access PDF link for
- url (string; optional): Directly supply the URL to an accessible PDF of the reference
If supplied, the component will not try to fetch an open access URL
(default: undefined)
- showLoadingText (boolean; optional): Set to true to show the text "Loading..." inside the link
while the URL is being fetched.
If false, the is-loading is applied to the link while loading.
If supplying the Bulma button class, this will show a spinner icon.
(default: false)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, doi=Component.UNDEFINED, url=Component.UNDEFINED, showLoadingText=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'doi', 'url', 'showLoadingText']
        self._type = 'OpenAccessLink'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'doi', 'url', 'showLoadingText']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OpenAccessLink, self).__init__(children=children, **args)
