import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render bibliographic information in a formatted card view
 */

export default class OpenAccessLink extends Component {
    render() {
        return <mpc.OpenAccessLink {...this.props} />;
    }
}

OpenAccessLink.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Class to add to the top-level element of the component
     */
    className: PropTypes.string,

    /**
     * Use the children prop to set the inner link content
     * This can be simple text or a component
     */
    children: PropTypes.node,

    /**
     * The DOI (Digital Object Identifier) of the reference
     * to attempt to fetch an open access PDF link for
     */
    doi: PropTypes.string,

    /**
     * Directly supply the URL to an accessible PDF of the reference
     * If supplied, the component will not try to fetch an open access URL
     * (default: undefined)
     */
    url: PropTypes.string,

    /**
     * Set to true to show the text "Loading..." inside the link
     * while the URL is being fetched.
     * If false, the is-loading is applied to the link while loading.
     * If supplying the Bulma button class, this will show a spinner icon.
     * (default: false)
     */
    showLoadingText: PropTypes.bool,
};
