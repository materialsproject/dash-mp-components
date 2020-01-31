# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicElement(Component):
    """A PeriodicElement component.
This component displays a periodic element

Keyword arguments:
- id (string; optional)
- size (number; optional)
- element (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, size=Component.UNDEFINED, element=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'size', 'element']
        self._type = 'PeriodicElement'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'size', 'element']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PeriodicElement, self).__init__(**args)
