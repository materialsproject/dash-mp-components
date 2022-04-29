# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Link(Component):
    """A Link component.
Custom Link component that can handle both internal and external URLs.
You can also use this component if you need to preserve the url query parameters
when following a link.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    The children of this component.

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    Often used with CSS to style elements with common properties.

- href (string; required):
    The URL of a linked resource.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- preserveQuery (boolean; optional):
    If True, the current query parameters will not be removed from the
    url when following the link.

- refresh (boolean; optional):
    Controls whether or not the page will refresh when the link is
    clicked.

- style (dict; optional):
    Defines CSS styles which will override styles previously set.

- target (string; optional):
    Specifies where to open the link reference.

- title (string; optional):
    Adds the title attribute to your link, which can contain
    supplementary information."""
    @_explicitize_args
    def __init__(self, children=None, href=Component.REQUIRED, target=Component.UNDEFINED, refresh=Component.UNDEFINED, title=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, id=Component.UNDEFINED, loading_state=Component.UNDEFINED, preserveQuery=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'href', 'loading_state', 'preserveQuery', 'refresh', 'style', 'target', 'title']
        self._type = 'Link'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'href', 'loading_state', 'preserveQuery', 'refresh', 'style', 'target', 'title']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['href']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Link, self).__init__(children=children, **args)
