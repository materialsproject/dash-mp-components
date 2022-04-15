# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DrawerContextProvider(Component):
    """A DrawerContextProvider component.
Use DrawerContextProvider to render drawers that will automatically
close when another drawer in the context is opened.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children will be rendered within the DrawerContext. Should contain
    at least a DrawerTrigger component and a Drawer component."""
    @_explicitize_args
    def __init__(self, children=None, **kwargs):
        self._prop_names = ['children']
        self._type = 'DrawerContextProvider'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DrawerContextProvider, self).__init__(children=children, **args)
