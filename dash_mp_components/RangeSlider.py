# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class RangeSlider(Component):
    """A RangeSlider component.
Slider input for selecting a single value in a range

Keyword arguments:

- id (string; optional)

- className (string; optional)

- debounce (number; optional)

- domain (list of numbers; optional)

- inclusiveTickBounds (boolean; optional)

- isLogScale (boolean; optional)

- step (number; optional)

- ticks (number; optional)

- value (number | string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'RangeSlider'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, value=Component.UNDEFINED, domain=Component.UNDEFINED, isLogScale=Component.UNDEFINED, step=Component.UNDEFINED, ticks=Component.UNDEFINED, inclusiveTickBounds=Component.UNDEFINED, debounce=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'debounce', 'domain', 'inclusiveTickBounds', 'isLogScale', 'step', 'ticks', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'debounce', 'domain', 'inclusiveTickBounds', 'isLogScale', 'step', 'ticks', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(RangeSlider, self).__init__(**args)
