# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class PeriodicContextTable(Component):
    """A PeriodicContextTable component.


Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional)

- disabledElements (list; optional):
    A list of symbols to grey-out as disabled.

- enabledElements (list; optional):
    A list of selected symbols.

- forceTableLayout (string; optional):
    Force table layout.

- forwardOuterChange (boolean; optional):
    Forward external changes.

- hiddenElements (list; optional):
    A list of hidden symbols.

- maxElementSelectable (number; optional):
    The maximum number of selectable elements.

- state (dict; optional):
    The state of the table, as exposed in the dash callback."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'PeriodicContextTable'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, disabledElements=Component.UNDEFINED, enabledElements=Component.UNDEFINED, hiddenElements=Component.UNDEFINED, forwardOuterChange=Component.UNDEFINED, forceTableLayout=Component.UNDEFINED, maxElementSelectable=Component.UNDEFINED, state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'disabledElements', 'enabledElements', 'forceTableLayout', 'forwardOuterChange', 'hiddenElements', 'maxElementSelectable', 'state']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'disabledElements', 'enabledElements', 'forceTableLayout', 'forwardOuterChange', 'hiddenElements', 'maxElementSelectable', 'state']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(PeriodicContextTable, self).__init__(children=children, **args)
