# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DualRangeSlider(Component):
    """A DualRangeSlider component.
Slider input with controls for both the minimum and maximum bounds.

Keyword arguments:

- id (string; optional)

- className (string; optional)

- debounce (number; optional)

- domain (list of numbers; optional)

- inclusiveTickBounds (boolean; optional)

- isLogScale (boolean; optional)

- step (number; optional)

- ticks (number; optional)

- valueMax (number; optional)

- valueMin (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, valueMin=Component.UNDEFINED, valueMax=Component.UNDEFINED, domain=Component.UNDEFINED, isLogScale=Component.UNDEFINED, step=Component.UNDEFINED, ticks=Component.UNDEFINED, inclusiveTickBounds=Component.UNDEFINED, debounce=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'debounce', 'domain', 'inclusiveTickBounds', 'isLogScale', 'step', 'ticks', 'valueMax', 'valueMin']
        self._type = 'DualRangeSlider'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'debounce', 'domain', 'inclusiveTickBounds', 'isLogScale', 'step', 'ticks', 'valueMax', 'valueMin']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DualRangeSlider, self).__init__(**args)
