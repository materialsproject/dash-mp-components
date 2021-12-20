# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ModalTrigger(Component):
    """A ModalTrigger component.
Render a trigger that opens a ModalContent that is within the same ModalContextProvider

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children will be rendered as the trigger content.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name applied to the modal trigger span. The
    \"mpc-modal-trigger\" class is added automatically."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className']
        self._type = 'ModalTrigger'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ModalTrigger, self).__init__(children=children, **args)
