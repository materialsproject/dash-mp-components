# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CameraContextProvider(Component):
    """A CameraContextProvider component.
Use this component to synchronize the camera of multiple
 SimpleSceneComponent

Keyword arguments:

- children (optional)

- id (optional):
    The ID used to identify this component in Dash callbacks."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'CameraContextProvider'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(CameraContextProvider, self).__init__(children=children, **args)
