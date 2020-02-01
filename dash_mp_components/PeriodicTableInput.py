# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicTableInput(Component):
    """A PeriodicTableInput component.
MpPeriodicTableInput is a component that allows user to select
some components from a periodic table

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- state (list; optional): This is a read-only prop that dash callback can subscribe to
- disabledElements (list; optional): A list of symbols to grey-out as disabled
- enabledElements (list; optional): A list of selected symbols
- hiddenElements (list; optional): A list of hidden symbols
- maxElementSelectable (number; default 10): Maximum number of selectable elements
- forceTableLayout (a value equal to: 'spaced', 'compact', 'small', 'map'; optional): Force the table to be in a specific layout
- forwardOuterChange (boolean; default True): Forward external changes"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, state=Component.UNDEFINED, disabledElements=Component.UNDEFINED, enabledElements=Component.UNDEFINED, hiddenElements=Component.UNDEFINED, maxElementSelectable=Component.UNDEFINED, forceTableLayout=Component.UNDEFINED, forwardOuterChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'state', 'disabledElements', 'enabledElements', 'hiddenElements', 'maxElementSelectable', 'forceTableLayout', 'forwardOuterChange']
        self._type = 'PeriodicTableInput'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'state', 'disabledElements', 'enabledElements', 'hiddenElements', 'maxElementSelectable', 'forceTableLayout', 'forwardOuterChange']
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
