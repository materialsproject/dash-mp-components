# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicTableInput(Component):
    """A PeriodicTableInput component.
MpPeriodicTableInput is a component that allows user to select
some components from a periodic table

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- forceTableLayout (a value equal to: 'spaced', 'compact', 'small', 'map'; optional):
    Force the table to be in a specific layout.

- maxElementSelectable (number; default 10):
    Maximum number of selectable elements.

- state (dict; optional):
    This is a read-only prop that dash callback can subscribe to."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, state=Component.UNDEFINED, maxElementSelectable=Component.UNDEFINED, forceTableLayout=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'forceTableLayout', 'maxElementSelectable', 'state']
        self._type = 'PeriodicTableInput'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'forceTableLayout', 'maxElementSelectable', 'state']
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
