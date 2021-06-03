import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Standardized button for linking to an Open Access PDF.
 * If no url prop is supplied, a PDF link will be fetched
 * from the Open Access Button API using the doi prop.
 */

export default class OpenAccessButton extends Component {
    render() {
        return <mpc.OpenAccessButton {...this.props} />;
    }
}

OpenAccessButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Class name(s) to append to the component's default class (mpc-open-access-button)
     * @default 'button is-small'
     */
    className: PropTypes.string,

    /**
     * The DOI (Digital Object Identifier) of the reference
     * to attempt to fetch an open access PDF link for.
     */
    doi: PropTypes.string,

    /**
     * Directly supply the URL to an accessible PDF of the reference.
     * If supplied, the component will not try to fetch an open access URL.
     */
    url: PropTypes.string,

    /**
     * Set to true to show the text "Loading..." inside the link
     * while the URL is being fetched.
     * If false, the is-loading is applied to the link while loading.
     * If supplying the Bulma button class, this will show a spinner icon.
     * @default false
     */
    showLoadingText: PropTypes.bool,

    /**
     * Value to add to the anchor tag's target attribute
     * @default '_blank'
     */
    target: PropTypes.string,
};
