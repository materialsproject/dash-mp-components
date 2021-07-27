import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button for exporting arrays or objects to files
 */

export default class DownloadButton extends Component {
    render() {
        return <mpc.DownloadButton {...this.props} />;
    }
}

DownloadButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * Use the children prop to set the button content
     * This can be simple text or a component
     */
    children: PropTypes.node,

    /**
     * Class(es) to add to the top-level element of the component
     * Note: the class "mpc-download-button" is always added
     */
    className: PropTypes.string,

    /**
     * Array or object (list or dictionary) to be downloaded
     * If downloading as csv or xlsx, data must be an array/list
     */
    data: PropTypes.array | PropTypes.object,

    /**
     * Name of the file WITHOUT the extension
     * (default: "export")
     */
    filename: PropTypes.string,

    /**
     * File type to be downloaded
     * This is also the extension that will be appended to the filename
     * (default: "json")
     */
    filetype: PropTypes.oneOf(['json', 'csv', 'xlsx']),

    /**
     * Optional tooltip to display above the button on hover
     */
    tooltip: PropTypes.string,
};
