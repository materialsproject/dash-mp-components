# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SearchUIGrid(Component):
    """A SearchUIGrid component.
A component that combines the filters, data header, and data view
of a `SearchUI` into a common grid layout.
Note that this must be used within a `SearchUIContainer`.

Keyword arguments:

- id (string; optional)

- exportDataButton (a list of or a singular dash component, string or number; optional)"""
    _children_props = ['exportDataButton']
    _base_nodes = ['exportDataButton', 'children']
    _namespace = 'dash_mp_components'
    _type = 'SearchUIGrid'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, exportDataButton=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'exportDataButton']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'exportDataButton']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SearchUIGrid, self).__init__(**args)
