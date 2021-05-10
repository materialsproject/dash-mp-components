import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for rendering and filtering a list of citations in bibjson format
 * Expects bibjson in the format output by the bibtexparser library (https://bibtexparser.readthedocs.io/en/v1.1.0/tutorial.html#)
 */

export default class BibjsonCard extends Component {
    render() {
        return <mpc.BibjsonCard {...this.props} />;
    }
}

BibjsonCard.propTypes = {
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
     * A single bib object in bibjson format
     * Only the following bib properties are used by this component:
     *  - title
     *  - author (as a list or string)
     *  - year
     *  - doi
     *  - journal
     * If any of those properties are missing, that property will be omitted from the bibjson result card.
     * Any extra properties are simply ignored.
     * e.g.
        {
          "journal": "Physical Review X",
          "year": "2015",
          "issn": "21603308",
          "isbn": "2160-3308",
          "doi": "10.1103/PhysRevX.5.011006",
          "author": ["Agapito, Luis A.", "Curtarolo, Stefano", "Nardelli, Marco Buongiorno"],
          "title": "Reformulation of DFT + U as a Pseudohybrid Hubbard Density Functional for Accelerated Materials Discovery",
          "ENTRYTYPE": "article",
          "ID": "agapito2015"
        }
     */
    bibjsonEntry: PropTypes.array,

    /**
     * Class to add to the top-level element of the component
     * Note: the class "mpc-bibjson-card" is always added to the top-level element by default
     */
    className: PropTypes.string,
};
