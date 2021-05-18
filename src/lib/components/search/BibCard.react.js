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
     * Class to add to the top-level element of the component
     * Note: the class "mpc-bib-card" is always added to the top-level element by default
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
     * Set to true to dynamically fetch a link to a free PDF of
     * the reference (using the doi prop)
     * (default: false)
     */
    fetchOpenAccessUrl: PropTypes.bool,

    /**
     * Directly supply the URL to an accessible PDF of the reference
     * If supplied, the component will not try to fetch an open access URL
     * (default: undefined)
     */
    openAccessUrl: PropTypes.string,
};
