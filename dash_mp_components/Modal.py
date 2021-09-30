# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Modal(Component):
    """A Modal component.
Render a trigger that opens a modal with the specified modal content

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Use the children prop to set the trigger element and modal content.
The first element in the children array will be used as the trigger
and the second element will be rendered inside the modal-content div.
- id (string; optional): The ID used to identify this component in Dash callbacks
- trigger (string; optional): Element to be used to open the modal.
Can also be supplied as the first of two children (necessary in Dash).
- modalContent (string; optional): Element to render inside the modal-content div.
Can also be supplied as the second of two children (necessary in Dash)."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, trigger=Component.UNDEFINED, modalContent=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'trigger', 'modalContent']
        self._type = 'Modal'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'trigger', 'modalContent']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Modal, self).__init__(children=children, **args)
