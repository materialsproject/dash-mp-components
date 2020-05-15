import {CameraContextWrapper} from '@materialsproject/mp-react-components';
import React from 'react';
import {Component} from 'react';


/**
 *
 *  Use this component to synchronize the camera of multiple
 *  SimpleSceneComponent
 *
 *
 */
export default class CameraContext extends Component {
    render() {
        if (!!this.props.children) {
            return (
                <CameraContextWrapper>
                    {this.props.children}
                </CameraContextWrapper>
            );
        } else {
            return <div>NO SCENE PASSED</div>;
        }
    }
}

CameraContext.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    children: PropTypes.any,
};
CameraContext.defaultProps = {};
