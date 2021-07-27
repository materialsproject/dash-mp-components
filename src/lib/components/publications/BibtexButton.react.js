import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Standardized button for linking to BibTeX.
 * If no url prop is supplied, a link will be generated
 * using the doi prop and doi2bib.org.
 */

export default class BibtexButton extends Component {
    render() {
        return <mpc.BibtexButton {...this.props} />;
    }
}

BibtexButton.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Class name(s) to append to the component's default class (mpc-bibtex-button)
     * @default 'button is-small'
     */
    className: PropTypes.string,

    /**
     * The DOI (Digital Object Identifier) of the reference
     * to pass to doi2bib.org.
     */
    doi: PropTypes.string,

    /**
     * Directly supply the URL to a reference's bibtex.
     * If supplied, the component will not generate its own link using the doi prop.
     */
    url: PropTypes.string,

    /**
     * Value to add to the anchor tag's target attribute
     * @default '_blank'
     */
    target: PropTypes.string,
};
