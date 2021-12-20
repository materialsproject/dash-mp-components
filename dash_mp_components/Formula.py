# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Formula(Component):
    """A Formula component.
Render formula strings with proper subscripts.
Note that this component expects the string to be
a valid formula.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the content of the formula. Must be a
    simple string.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-formula).

- setProps (optional):
    Dash-assigned callback that should be called whenever any of the
    properties change."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'setProps']
        self._type = 'Formula'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'setProps']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Formula, self).__init__(children=children, **args)
