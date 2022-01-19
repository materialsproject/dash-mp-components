import * as mp from '@materialsproject/mp-react-components';
import React, {Component} from 'react';

export default class CrystalToolkitScene extends Component {
    render() {
        return (
            <mp.CrystalToolkitScene
                {...this.props}
                onObjectClicked={o => {
                    this.props.setProps({selectedObject: o});
                }}
            />
        );
    }
}

CrystalToolkitScene.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    /**
     * Simple3DScene JSON, the easiest way to generate this is to use the Scene class
     * in crystal_toolkit.core.scene and its to_json method.
     */
    data: PropTypes.object,
    /**
     * Options used for generating scene.
     * Supported options and their defaults are given as follows:
     * {
     *    antialias: true, // set to false to improve performance
     *    renderer: 'webgl', // 'svg' also an option, used for unit testing
     *    transparentBackground: false, // transparent background
     *    background: '#ffffff', // background color if not transparent,
     *    sphereSegments: 32, // decrease to improve performance
     *    cylinderSegments: 16, // decrease to improve performance
     *    staticScene: true, // disable if animation required
     *    defaultZoom: 1, // 1 will zoom to fit object exactly, <1 will add padding between object and box bounds
     *    zoomToFit2D: false // if true, will zoom to fit object only along the X and Y axes (not Z)
     *    extractAxis: false // will remove the axis from the main scene
     *    isMultiSelectionEnabled: false // allow to use shift to select,
     *    secondaryObjectView: true // show the selected object in a detail view
     *    animation: 'play' | 'slider' | 'none' // choose which style of animation is use
     * }
     * There are several additional options used for debugging and testing,
     * please consult the source code directly for these.
     */
    settings: PropTypes.object,
    /**
     * Hide/show nodes in scene by its name (key), value is 1 to show the node
     * and 0 to hide it.
     */
    toggleVisibility: PropTypes.object,
    /**
     * File type to be downloaded as an image. Either png or dae
     */
    imageType: PropTypes.oneOf(['png', 'dae']),
    /**
     * THIS PROP IS SET AUTOMATICALLY
     * Data string for the image generated on image button click
     */
    imageData: PropTypes.string,
    /**
     * THIS PROP IS SET AUTOMATICALLY
     * Date string that represents the time imageData was set.
     * Use this prop in dash callbacks to trigger downloads of imageData.
     */
    imageDataTimestamp: PropTypes.string,
    /**
     * List of options to show in file download dropdown
     */
    fileOptions: PropTypes.array,
    /**
     * THIS PROP IS SET AUTOMATICALLY
     * The last file type clicked in the file download menu
     */
    fileType: PropTypes.string,
    /**
     * THIS PROP IS SET AUTOMATICALLY
     * Date string that represents the time fileType was set.
     * Use this prop in dash callbacks to trigger file downloads.
     */
    fileTimestamp: PropTypes.string,
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
    /**
     * This points to the last clicked objects. Use it in your dash callback
     * to know which objects are currently selected in the scene
     *
     */
    selectedObject: PropTypes.array,
    /**
     * Width / Height of the displayed component
     */
    sceneSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Where is the axis displayed ( 'NW' / 'NE' / 'SE' / 'SW' / 'HIDDEN' )
     */
    axisView: PropTypes.string,
    /**
     * Size of the axis view
     */
    inletSize: PropTypes.number,
    /**
     * Padding of the axis view
     */
    inletPadding: PropTypes.number,
    /**
     * Display a debug view
     */
    debug: PropTypes.bool,
    /**
     * Animation type
     */
    animation: PropTypes.string,
    /**
     * THIS PROP IS SET AUTOMATICALLY
     * Object that maintains the current state of the camera.
     * e.g.
     * {
     *   position: {x: 0, y: 0, z: 0},
     *   quarternion: {x: 0, y: 0, z: 0, w: 0},
     *   zoom: 1,
     *   setByComponentId: "1",
     *   following: true
     * }
     */
    currentCameraState: PropTypes.object,
    /**
     * Object for setting the scene to a custom camera state.
     * When modified, the camera will update to new custom state.
     * e.g.
     * {
     *   position: {x: 0, y: 0, z: 0},
     *   quarternion: {x: 0, y: 0, z: 0, w: 0}, (optional)
     *   zoom: 1 (optional)
     * }
     */
    customCameraState: PropTypes.object,
};
