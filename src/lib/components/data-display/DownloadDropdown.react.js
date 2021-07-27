import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Dropdown for exporting arrays/lists to json, csv, or xlsx files
 * The dropdown options are prepopulated as JSON, CSV, EXCEL
 * This dropdown contains all the classes used in bulma dropdown
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
     * Use the children prop to set the content for the dropdown button label
     * This can be simple text or a component
     */
    children: PropTypes.node,

    /**
     * Class(es) to add to the top-level element of the component
     * Note: the classes "mpc-download-dropdown dropdown is-active" are already added by default
     */
    className: PropTypes.string,

    /**
     * Class(es) to add to the button element of the component
     * Note: the class "button" is already added by default
     */
    buttonClassName: PropTypes.string,

    /**
     * Array/list to be downloaded
     */
    data: PropTypes.array | PropTypes.object,

    /**
     * Name of the file WITHOUT the extension
     * (default: "export")
     */
    filename: PropTypes.string,

    /**
     * Optional tooltip to display above the button on hover
     */
    tooltip: PropTypes.string,
};
