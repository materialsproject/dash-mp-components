import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom Link component that can handle both internal and external URLs.
 * You can also use this component if you need to preserve the url query parameters
 * when following a link.
 */

export default class Link extends Component {
    render() {
        return <mpc.Link {...this.props} />;
    }
}

Link.propTypes = {
    /**
     * The children of this component
     */
    children: PropTypes.node,
    /**
     * The URL of a linked resource.
     */
    href: PropTypes.string.isRequired,
    /**
     * Specifies where to open the link reference.
     */
    target: PropTypes.string,
    /**
     * Controls whether or not the page will refresh when the link is clicked
     */
    refresh: PropTypes.bool,
    /**
     * Adds the title attribute to your link, which can contain supplementary
     * information.
     */
    title: PropTypes.string,
    /**
     * Often used with CSS to style elements with common properties.
     */
    className: PropTypes.string,
    /**
     * Defines CSS styles which will override styles previously set.
     */
    style: PropTypes.object,
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,
    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
    /**
     * If true, the current query parameters will not be removed from the url
     * when following the link.
     */
    preserveQuery: PropTypes.bool,
};
