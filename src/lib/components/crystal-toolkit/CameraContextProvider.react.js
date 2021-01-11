import * as mp from '@materialsproject/mp-react-components';
import React from 'react';
import {Component} from 'react';

/**
 *
 *  Use this component to synchronize the camera of multiple
 *  SimpleSceneComponent
 *
 *
 */
export default class CameraContextProvider extends Component {
    render() {
        if (!!this.props.children) {
            return (
                <mp.CameraContextProvider>
                    {this.props.children}
                </mp.CameraContextProvider>
            );
        } else {
            return <div>NO SCENE PASSED</div>;
        }
    }
}

CameraContextProvider.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    children: PropTypes.any,
};
CameraContextProvider.defaultProps = {};
