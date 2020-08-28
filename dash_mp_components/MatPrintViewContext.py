# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class MatPrintViewContext(Component):
    """A MatPrintViewContext component.
Print view context pass a boolean prop that allows children component to know if
 they are in print-view. Those components can react in various ways ( hidding some elements, changing
 their layouts, and so on... )

Keyword arguments:
- children (boolean | number | string | dict | list; optional)
- id (string; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id']
        self._type = 'MatPrintViewContext'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(MatPrintViewContext, self).__init__(children=children, **args)
