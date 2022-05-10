import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Standardized button for linking to a publication.
 *
 * This component can be used in four ways:
 * 1. Supply just a `doi` and let the component build the url and fetch the journal name and year from crossref.
 * 2. Supply just a `url` to doi.org and fetch the journal name and year from crossref.
 * 3. Supply a `doi` and a link label in the component's `children`. In this case, there will be no fetch to crossref.
 * 4. Supply a `url` to any location and a link label in the component's `children`. In this case, there will be no fetch to crossref.
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
     * Class name(s) to append to the component's default class (mpc-open-access-button).
     * Note: the "tag" class is the default value for className.
     * If you don't want the top-level element to have the "tag" class, add className="" or any other value.
     * If you want to use a bulma tag modifier, use the tagClassName prop instead.
     * @default 'tag'
     */
    className: PropTypes.string,

    /**
     * Directly supply the URL to the publication.
     * If a doi.org url is supplied, this component will automatically
     * parse the url for the doi and use that to fetch an open access link.
     */
    url: PropTypes.string,

    /**
     * Value to add to the anchor tag's target attribute
     * @default '_blank'
     */
    target: PropTypes.string,

    /**
     * Only display the publication icon and hide the link label and OAB.
     * Author names will display in a tooltip on hover.
     */
    compact: PropTypes.bool,

    /**
     * Show a tooltip on hover with the bibliographic citation for the publication.
     */
    showTooltip: PropTypes.bool,
};
