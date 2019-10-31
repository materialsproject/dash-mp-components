# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicTableInput(Component):
    """A PeriodicTableInput component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- clicked (list; optional): A list of symbols that are currently highlighted as clicked
- disabled (list; optional): A list of symbols to grey-out as disabled"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, clicked=Component.UNDEFINED, disabled=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'clicked', 'disabled']
        self._type = 'PeriodicTableInput'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'clicked', 'disabled']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PeriodicTableInput, self).__init__(**args)
