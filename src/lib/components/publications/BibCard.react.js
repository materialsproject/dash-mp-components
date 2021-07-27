import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render bibliographic information in a formatted card view
 */

export default class BibCard extends Component {
    render() {
        return <mpc.BibCard {...this.props} />;
    }
}

BibCard.propTypes = {
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
     * Class name(s) to append to the component's default class (mpc-bib-card)
     */
    className: PropTypes.string,

    /**
     * Title of the reference
     * Will render as a link if doi is supplied
     */
    title: PropTypes.string,

    /**
     * Authors of the reference
     * This string will render as is, so any formatting must be done beforehand
     */
    author: PropTypes.string,

    /**
     * Year of the reference as either a string or number
     */
    year: PropTypes.oneOfType[(PropTypes.string, PropTypes.number)],

    /**
     * Name of the journal or publisher of the reference
     */
    journal: PropTypes.string,

    /**
     * The DOI (Digital Object Identifier) of the reference
     * This identifier is used to generate links to the reference's
     * online publication, open access PDF, and bibtex
     */
    doi: PropTypes.string,

    /**
     * Set to true to prevent dynamically fetching a link to a free PDF of
     * each reference (using the "doi" field for individual bib entry).
     * NOTE: the open access URL can also be included in a bib entry
     * in the "openAccessUrl" property. If set, the URL will not be fetched.
     * @default false
     */
    preventOpenAccessFetch: PropTypes.bool,

    /**
     * Directly supply the URL to an accessible PDF of the reference
     * If supplied, the component will not try to fetch an open access URL
     * @default undefined
     */
    openAccessUrl: PropTypes.string,
};
