import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for rendering and filtering a list of citations in bibjson or crossref format
 * Expects bibjson in the format output by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)
 * Expects crossref in the format returned by the Crossref API
 */

export default class BibFilter extends Component {
    render() {
        return <mpc.BibFilter {...this.props} />;
    }
}

BibFilter.propTypes = {
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
     * Class name(s) to append to the component's default class (mpc-bib-filter)
     */
    className: PropTypes.string,

    /**
     * Format of the bibliographoc objects supplied in bibEntries
     * @default 'bibjson'
     */
    format: PropTypes.oneOf(['bibjson', 'crossref']),

    /**
     * List of bib objects in bibjson or crossref format
     * Only the following bib properties are used by this component:
     *  - title
     *  - author (as a list or string)
     *  - year
     *  - doi
     *  - journal
     * If any of those properties are missing, that property will be omitted from the bibjson result card.
     * Any extra properties are simply ignored.
     */
    bibEntries: PropTypes.array,

    /**
     * Name of property to initially sort entries by
     * @default 'year'
     */
    sortField: PropTypes.oneOf(['year', 'author', 'title']),

    /**
     * Set to true to have the initial sorting direction be ascending
     * @default false
     */
    ascending: PropTypes.bool,

    /**
     * Class name(s) to append to individual result cards' default class (mpc-bib-card)
     */
    resultClassName: PropTypes.string,

    /**
     * Set to true to prevent dynamically fetching a link to a free PDF of
     * each reference (using the "doi" field for individual bib entry).
     * NOTE: the open access URL can also be included in a bib entry
     * in the "openAccessUrl" property. If set, the URL will not be fetched.
     * @default false
     */
    preventOpenAccessFetch: PropTypes.bool,
};
