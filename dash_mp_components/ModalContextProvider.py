# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ModalContextProvider(Component):
    """A ModalContextProvider component.
Use ModalContextProvider to coordinate modal trigger and modal content

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Children will be rendered within the ModalContext. Should contain
    at least a ModalTrigger component and a Modal component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- active (boolean; optional):
    The current or default state of the modal. If True, the
    \"is-active\" class is added to <Modal/>. This value can be
    watched and changed from outside the component (e.g. via dash
    callback).

- forceAction (boolean; optional):
    Prevent modal from being closed without completion of a specific
    action. If set, there must be a button within the modal that
    updates the \"active\" state using the ModalContext or a dash
    callback on the active prop.

- isDrawer (boolean; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'ModalContextProvider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, active=Component.UNDEFINED, forceAction=Component.UNDEFINED, isDrawer=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'active', 'forceAction', 'isDrawer']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'active', 'forceAction', 'isDrawer']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(ModalContextProvider, self).__init__(children=children, **args)
