# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicContext(Component):
    """A PeriodicContext component.


Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional)

- disabledElements (list; optional):
    A list of symbols to grey-out as disabled.

- enabledElements (list; optional):
    A list of selected symbols.

- forwardOuterChange (boolean; optional):
    Forward external changes.

- hiddenElements (list; optional):
    A list of hidden symbols."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, disabledElements=Component.UNDEFINED, enabledElements=Component.UNDEFINED, hiddenElements=Component.UNDEFINED, forwardOuterChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'disabledElements', 'enabledElements', 'forwardOuterChange', 'hiddenElements']
        self._type = 'PeriodicContext'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'disabledElements', 'enabledElements', 'forwardOuterChange', 'hiddenElements']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(PeriodicContext, self).__init__(children=children, **args)
