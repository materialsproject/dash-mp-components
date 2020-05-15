import React from 'react';
import {Component} from 'react';
import {JSONViewComponent} from '@materialsproject/mp-react-components';
import PropTypes from 'prop-types';

export default class JsonView extends Component {
    render() {
        return <JSONViewComponent {...this.props} />;
    }
}

JsonView.defaultProps = JSONViewComponent.defaultProps;

JsonView.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,
    // see documentation at https://github.com/mac-s-g/react-json-view
    src: PropTypes.object,
    name: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    theme: PropTypes.string,
    style: PropTypes.object,
    iconStyle: PropTypes.string,
    indentWidth: PropTypes.number,
    collapsed: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    collapseStringsAfterLength: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    groupArraysAfterLength: PropTypes.number,
    enableClipboard: PropTypes.bool,
    displayObjectSize: PropTypes.bool,
    displayDataTypes: PropTypes.bool,
    defaultValue: PropTypes.object,
    sortKeys: PropTypes.bool,
    validationMessage: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
};
