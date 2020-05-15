import {CameraContextWrapper} from '@materialsproject/mp-react-components';
import React from 'react';
import {Component} from 'react';

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
    id: PropTypes.string,
    children: PropTypes.any,
};
CameraContext.defaultProps = {};
