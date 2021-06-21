# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Tooltip(Component):
    """A Tooltip component.
Tooltip component based on react-tooltip (https://github.com/wwayne/react-tooltip).
To attach a Tooltip component to a trigger element,
add the attributes "data-tip" and "data-for" to the trigger element.
The "data-for" attribute's value should be equal to the id of the Tooltip
component you want to connect it to.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Use the children prop to set the content of the tooltip.
This can be simple text or a component
- id (string; optional): The ID used to identify this component in Dash callbacks
- setProps (optional): Dash-assigned callback that should be called whenever any of the
properties change
- place (optional)
- type (optional)
- effect (optional)
- event (string; optional)
- eventOff (string; optional)
- globalEventOff (string; optional)
- isCapture (boolean; optional)
- offset (dict; optional)
- multiline (boolean; optional)
- className (string; optional)
- html (boolean; optional)
- delayHide (number; optional)
- delayShow (number; optional)
- delayUpdate (number; optional)
- border (boolean; optional)
- disable (boolean; optional)
- scrollHide (boolean; optional)
- clickable (boolean; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, place=Component.UNDEFINED, type=Component.UNDEFINED, effect=Component.UNDEFINED, event=Component.UNDEFINED, eventOff=Component.UNDEFINED, globalEventOff=Component.UNDEFINED, isCapture=Component.UNDEFINED, offset=Component.UNDEFINED, multiline=Component.UNDEFINED, className=Component.UNDEFINED, html=Component.UNDEFINED, delayHide=Component.UNDEFINED, delayShow=Component.UNDEFINED, delayUpdate=Component.UNDEFINED, border=Component.UNDEFINED, disable=Component.UNDEFINED, scrollHide=Component.UNDEFINED, clickable=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'setProps', 'place', 'type', 'effect', 'event', 'eventOff', 'globalEventOff', 'isCapture', 'offset', 'multiline', 'className', 'html', 'delayHide', 'delayShow', 'delayUpdate', 'border', 'disable', 'scrollHide', 'clickable']
        self._type = 'Tooltip'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'setProps', 'place', 'type', 'effect', 'event', 'eventOff', 'globalEventOff', 'isCapture', 'offset', 'multiline', 'className', 'html', 'delayHide', 'delayShow', 'delayUpdate', 'border', 'disable', 'scrollHide', 'clickable']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Tooltip, self).__init__(children=children, **args)
