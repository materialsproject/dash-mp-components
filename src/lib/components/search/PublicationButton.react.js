import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Standardized button for linking to a publication.
 * If a doi prop or doi.org link is supplied, an open access link
 * will also be generated next to the publication link.
 */

export default class PublicationButton extends Component {
    render() {
        return <mpc.PublicationButton {...this.props} />;
    }
}

PublicationButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * The DOI (Digital Object Identifier) of the publication
     * Will be used to generate a doi.org link and to fetch an open access PDF link.
     */
    doi: PropTypes.string,

    /**
     * Directly supply the URL to the publication.
     * If a doi.org url is supplied, this component will automatically
     * parse the url for the doi and use that to fetch an open access link.
     */
    url: PropTypes.string,

    /**
     * Directly supply the URL to an openly accessible PDF of the reference.
     * If supplied, the component will not try to fetch an open access URL.
     */
    openAccessUrl: PropTypes.string,

    /**
     * Set to true to prevent any requests to the open access api.
     * Note that if you supply your own openAccessUrl, this prop is not necessary.
     */
    preventOpenAccessFetch: PropTypes.bool,

    /**
     * Value to add to the anchor tag's target attribute
     * @default '_blank'
     */
    target: PropTypes.string,
};
