# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicElement(Component):
    """A PeriodicElement component.
This component displays a periodic element

Keyword arguments:

- id (string; optional)

- element (string; optional)

- size (number; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'PeriodicElement'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, size=Component.UNDEFINED, element=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'element', 'size']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'element', 'size']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(PeriodicElement, self).__init__(**args)
