import {Simple3DSceneComponent} from '@materialsproject/mp-react-components';
import React, {Component} from 'react';

export default class SceneComponent extends Component {
    render() {
        return (
            <Simple3DSceneComponent
                {...this.props}
                onObjectClicked={o => {
                    this.props.setProps({selectedObject: o});
                }}
            />
        );
    }
}

SceneComponent.propTypes = {
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
     * Set to trigger a screenshot or scene download. Should be an object with
     * the structure:
     * {
     *    "n_requests": n_requests, // increment to trigger a new download request
     *    "filename": request_filename, // the download filename
     *    "filetype": "png", // the download format
     * }
     */
    downloadRequest: PropTypes.object,

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
};
