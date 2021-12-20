# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Select(Component):
    """A Select component.
Wrapper component for react-select
This can be used as an alternative to dcc.Dropdown
Automatically adds the wrapper class "react-select-container"
and the class prefix "react-select-" to all the elements created by react-select

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- arbitraryProps (dict; optional):
    Object for placing all other props that are supported by
    react-select but are not explicitly defined here. See
    https://react-select.com/props  This is a workaround because Dash
    components cannot accept props that aren't explicitly defined.
    e.g.         {           'closeMenuOnSelect': False,
    'escapeClearsValue': True          }.

- defaultValue (boolean | number | string | dict | list; optional):
    The default value assigned if no selection is made. (default:
    None).

- isClearable (boolean; optional):
    Determines if dropdown has an 'x' icon for clearing the current
    value. (default: False).

- isMulti (boolean; optional):
    Set to True if select should allow multiple options to be
    selected. (default: False).

- options (list; optional):
    List of objects to be used as options in the dropdown e.g.
    [           {             'label': 'One',             'value': 1
    },           {             'label': 'Two',             'value': 2
    }         ].

- value (boolean | number | string | dict | list; optional):
    The value of the select dropdown. Accepts either the value itself
    or the an entire object from the options array. e.g. 1 or
    {'label': 'One', 'value': 1}."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, options=Component.UNDEFINED, value=Component.UNDEFINED, defaultValue=Component.UNDEFINED, isClearable=Component.UNDEFINED, isMulti=Component.UNDEFINED, arbitraryProps=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'arbitraryProps', 'defaultValue', 'isClearable', 'isMulti', 'options', 'value']
        self._type = 'Select'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'arbitraryProps', 'defaultValue', 'isClearable', 'isMulti', 'options', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Select, self).__init__(**args)
