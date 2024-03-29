# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CrystalToolkitScene(Component):
    """A CrystalToolkitScene component.


Keyword arguments:

- children (optional):
    First child will be rendered as the settings panel. Second child
    will be rendered as the bottom panel (legend).

- id (optional):
    The ID used to identify this component in Dash callbacks.

- animation (optional):
    Animation type.

- axisView (optional):
    Where is the axis displayed ( 'NW' / 'NE' / 'SE' / 'SW' / 'HIDDEN'
    ).

- className (optional):
    Class name that will wrap around the whole scene component. When
    enlarged, this class name is applied to the modal-content element.

- currentCameraState (optional):
    THIS PROP IS SET AUTOMATICALLY Object that maintains the current
    state of the camera. e.g. {   position: {x: 0, y: 0, z: 0},
    quarternion: {x: 0, y: 0, z: 0, w: 0},   zoom: 1,
    setByComponentId: \"1\",   following: True }.

- customCameraState (optional):
    Object for setting the scene to a custom camera state. When
    modified, the camera will update to new custom state. e.g. {
    position: {x: 0, y: 0, z: 0},   quarternion: {x: 0, y: 0, z: 0, w:
    0}, (optional)   zoom: 1 (optional) }.

- data (optional):
    Simple3DScene JSON, the easiest way to generate this is to use the
    Scene class in crystal_toolkit.core.scene and its to_json method.

- debug (optional):
    Display a debug view.

- fileOptions (optional):
    List of options to show in file download dropdown.

- fileTimestamp (optional):
    THIS PROP IS SET AUTOMATICALLY Date string that represents the
    time fileType was set. Use this prop in dash callbacks to trigger
    file downloads.

- fileType (optional):
    THIS PROP IS SET AUTOMATICALLY The last file type clicked in the
    file download menu.

- imageData (optional):
    THIS PROP IS SET AUTOMATICALLY Data string for the image generated
    on image button click.

- imageDataTimestamp (optional):
    THIS PROP IS SET AUTOMATICALLY Date string that represents the
    time imageData was set. Use this prop in dash callbacks to trigger
    downloads of imageData.

- imageRequest (optional):
    Set to trigger a screenshot or scene download. Must be an object
    with the following structure: {    \"filetype\": \"png\" // the
    image format (\"png\", \"dae\") } Passing this prop as an object
    ensures that new requests are triggered any time the prop is set.

- imageType (optional):
    File type to be downloaded as an image. Either png or dae.

- inletPadding (optional):
    Padding of the axis view.

- inletSize (optional):
    Size of the axis view.

- sceneSize (optional):
    Width / Height of the displayed component.

- selectedObject (optional):
    This points to the last clicked objects. Use it in your dash
    callback to know which objects are currently selected in the
    scene.

- setProps (optional):
    Dash-assigned callback that should be called whenever any of the
    properties change.

- settings (optional):
    Options used for generating scene. Supported options and their
    defaults are given as follows: {    antialias: True, // set to
    False to improve performance    renderer: 'webgl', // 'svg' also
    an option, used for unit testing    transparentBackground: False,
    // transparent background    background: '#ffffff', // background
    color if not transparent,    sphereSegments: 32, // decrease to
    improve performance    cylinderSegments: 16, // decrease to
    improve performance    staticScene: True, // disable if animation
    required    defaultZoom: 1, // 1 will zoom to fit object exactly,
    <1 will add padding between object and box bounds    zoomToFit2D:
    False // if True, will zoom to fit object only along the X and Y
    axes (not Z)    extractAxis: False // will remove the axis from
    the main scene    isMultiSelectionEnabled: False // allow to use
    shift to select,    secondaryObjectView: True // show the selected
    object in a detail view    animation: 'play' | 'slider' | 'none'
    // choose which style of animation is use } There are several
    additional options used for debugging and testing, please consult
    the source code directly for these.

- showControls (optional)

- showExpandButton (optional)

- showExportButton (optional)

- showImageButton (optional)

- showPositionButton (optional)

- toggleVisibility (optional):
    Hide/show nodes in scene by its name (key), value is 1 to show the
    node and 0 to hide it."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'CrystalToolkitScene'
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, data=Component.UNDEFINED, settings=Component.UNDEFINED, toggleVisibility=Component.UNDEFINED, imageRequest=Component.UNDEFINED, imageType=Component.UNDEFINED, imageData=Component.UNDEFINED, imageDataTimestamp=Component.UNDEFINED, fileOptions=Component.UNDEFINED, fileType=Component.UNDEFINED, fileTimestamp=Component.UNDEFINED, selectedObject=Component.UNDEFINED, sceneSize=Component.UNDEFINED, axisView=Component.UNDEFINED, inletSize=Component.UNDEFINED, inletPadding=Component.UNDEFINED, debug=Component.UNDEFINED, animation=Component.UNDEFINED, currentCameraState=Component.UNDEFINED, customCameraState=Component.UNDEFINED, showControls=Component.UNDEFINED, showExpandButton=Component.UNDEFINED, showImageButton=Component.UNDEFINED, showExportButton=Component.UNDEFINED, showPositionButton=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'animation', 'axisView', 'className', 'currentCameraState', 'customCameraState', 'data', 'debug', 'fileOptions', 'fileTimestamp', 'fileType', 'imageData', 'imageDataTimestamp', 'imageRequest', 'imageType', 'inletPadding', 'inletSize', 'sceneSize', 'selectedObject', 'setProps', 'settings', 'showControls', 'showExpandButton', 'showExportButton', 'showImageButton', 'showPositionButton', 'toggleVisibility']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'animation', 'axisView', 'className', 'currentCameraState', 'customCameraState', 'data', 'debug', 'fileOptions', 'fileTimestamp', 'fileType', 'imageData', 'imageDataTimestamp', 'imageRequest', 'imageType', 'inletPadding', 'inletSize', 'sceneSize', 'selectedObject', 'setProps', 'settings', 'showControls', 'showExpandButton', 'showExportButton', 'showImageButton', 'showPositionButton', 'toggleVisibility']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CrystalToolkitScene, self).__init__(children=children, **args)
