import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A custom re-worked version of dcc.Markdown.
 * Uses v6 of react-markdown and applies five plugins
 * to the markdown component by default:
 * - remark-gfm
 * - remark-slug
 * - remark-highlight.js
 * - remark-math
 * - rehype-katex
 */

export default class Markdown extends Component {
    render() {
        return <mpc.Markdown {...this.props} />;
    }
}

Markdown.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Class name of the container element
     */
    className: PropTypes.string,

    /**
     * A markdown string (or array of strings) that adhreres to the CommonMark spec
     */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),

    /**
     * Remove matching leading whitespace from all lines.
     * Lines that are empty, or contain *only* whitespace, are ignored.
     * Both spaces and tab characters are removed, but only if they match;
     * we will not convert tabs to spaces or vice versa.
     */
    dedent: PropTypes.bool,

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
     * User-defined inline styles for the rendered Markdown
     */
    style: PropTypes.object,
};
