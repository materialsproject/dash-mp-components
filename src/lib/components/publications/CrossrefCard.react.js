import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Parses a crossref entry or fetches a reference from the crossref API and renders a BibCard.
 */

export default class CrossrefCard extends Component {
    render() {
        return <mpc.CrossrefCard {...this.props} />;
    }
}

CrossrefCard.propTypes = {
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
     * Class name(s) to append to the component's default class
     */
    className: PropTypes.string,

    /**
     * A single bib object in crossref format.
     * If a crossEntry is supplied, a request will not be made to the crossref API.
     * The following bib values are parsed from a Crossref API response: title, authors, year, doi, journal.
     */
    crossrefEntry: PropTypes.any,

    /**
     * Either a DOI or bibtex string to use to search against the Crossref /works endpoint.
     * An identifier must be supplied if you are not supplying the crossrefEntry directly.
     */
    identifier: PropTypes.string,

    /**
     * Error message to show inside the card if the crossref request fails
     * @default 'Could not find reference'
     */
    errorMessage: PropTypes.string,

    /**
     * Set to true to prevent dynamically fetching a link to a free PDF of
     * each reference (using the "doi" field for individual bib entry).
     * NOTE: the open access URL can also be included in a bib entry
     * in the "openAccessUrl" property. If set, the URL will not be fetched.
     * @default false
     */
    preventOpenAccessFetch: PropTypes.bool,
};
