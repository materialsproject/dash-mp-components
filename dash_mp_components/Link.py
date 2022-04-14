# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Link(Component):
    """A Link component.
Custom Link component that can handle both internal and external URLs.
You can also use this component if you need to preserve the url query parameters
when following a link.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- href (string; optional)

- preserveQuery (boolean; optional)

- target (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, href=Component.UNDEFINED, target=Component.UNDEFINED, preserveQuery=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'href', 'preserveQuery', 'target']
        self._type = 'Link'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'href', 'preserveQuery', 'target']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Link, self).__init__(children=children, **args)
