# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ModalContextProvider(Component):
    """A ModalContextProvider component.
Use ModalContextProvider to coordinate modal trigger and modal content

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Children will be rendered within the ModalContext.
Should contain at least a ModalTrigger component and a Modal component.
- id (string; optional): The ID used to identify this component in Dash callbacks"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id']
        self._type = 'ModalContextProvider'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ModalContextProvider, self).__init__(children=children, **args)
