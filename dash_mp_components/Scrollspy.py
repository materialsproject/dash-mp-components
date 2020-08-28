# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Scrollspy(Component):
    """A Scrollspy component.


Keyword arguments:
- className (string; optional)
- menuGroups (list; optional)
- activeItemClassName (string; optional)
- offset (number; optional)
- menuLabelClassName (string; optional)
- menuContainerClassName (string; optional)
- menuItemClassName (string; optional)"""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, menuGroups=Component.UNDEFINED, activeItemClassName=Component.UNDEFINED, offset=Component.UNDEFINED, menuLabelClassName=Component.UNDEFINED, menuContainerClassName=Component.UNDEFINED, menuItemClassName=Component.UNDEFINED, **kwargs):
        self._prop_names = ['className', 'menuGroups', 'activeItemClassName', 'offset', 'menuLabelClassName', 'menuContainerClassName', 'menuItemClassName']
        self._type = 'Scrollspy'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'menuGroups', 'activeItemClassName', 'offset', 'menuLabelClassName', 'menuContainerClassName', 'menuItemClassName']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Scrollspy, self).__init__(**args)
