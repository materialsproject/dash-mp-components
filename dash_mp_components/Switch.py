# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Switch(Component):
    """A Switch component.
Common wrapper for filters/inputs and their labels

Keyword arguments:

- id (string; optional)

- className (string; optional)

- falsyLabel (string; optional)

- hasLabel (boolean; optional)

- truthyLabel (string; optional)

- value (boolean; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, value=Component.UNDEFINED, hasLabel=Component.UNDEFINED, truthyLabel=Component.UNDEFINED, falsyLabel=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'falsyLabel', 'hasLabel', 'truthyLabel', 'value']
        self._type = 'Switch'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'falsyLabel', 'hasLabel', 'truthyLabel', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Switch, self).__init__(**args)
