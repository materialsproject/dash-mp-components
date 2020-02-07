# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Simple3DScene(Component):
    """A Simple3DScene component.


Keyword arguments:
- id (optional): The ID used to identify this component in Dash callbacks
- data (optional): Simple3DScene JSON, the easiest way to generate this is to use the Scene class
in crystal_toolkit.core.scene and its to_json method.
- settings (optional): Options used for generating scene.
Supported options and their defaults are given as follows:
{
   antialias: true, // set to false to improve performance
   renderer: 'webgl', // 'svg' also an option, used for unit testing
   transparentBackground: false, // transparent background
   background: '#ffffff', // background color if not transparent,
   sphereSegments: 32, // decrease to improve performance
   cylinderSegments: 16, // decrease to improve performance
   staticScene: true, // disable if animation required
   defaultZoom: 0.8, // 1 will completely fill viewport with scene
}
There are several additional options used for debugging and testing,
please consult the source code directly for these.
- toggleVisibility (optional): Hide/show nodes in scene by its name (key), value is 1 to show the node
and 0 to hide it.
- downloadRequest (optional): Set to trigger a screenshot or scene download. Should be an object with
the structure:
{
   "n_requests": n_requests, // increment to trigger a new download request
   "filename": request_filename, // the download filename
   "filetype": "png", // the download format
}
- setProps (optional): Dash-assigned callback that should be called whenever any of the
properties change
- selectedObjectReference (optional): Reference to selected objects when clicked
- selectedObjectCount (optional): Click count for selected object"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, settings=Component.UNDEFINED, toggleVisibility=Component.UNDEFINED, downloadRequest=Component.UNDEFINED, selectedObjectReference=Component.UNDEFINED, selectedObjectCount=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'settings', 'toggleVisibility', 'downloadRequest', 'setProps', 'selectedObjectReference', 'selectedObjectCount']
        self._type = 'Simple3DScene'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'settings', 'toggleVisibility', 'downloadRequest', 'setProps', 'selectedObjectReference', 'selectedObjectCount']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Simple3DScene, self).__init__(**args)
