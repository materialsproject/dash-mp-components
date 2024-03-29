import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display a single record of data in a horizontal block element
 * with an optional expanded view to show additional data columns.
 */

export default class DataBlock extends Component {
    render() {
        return <mpc.DataBlock {...this.props} />;
    }
}

DataBlock.propTypes = {
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
     * Class name(s) to append to the component's default class (mpc-data-block)
     */
    className: PropTypes.string,

    /**
     * Object (i.e. dictionary) of data to be displayed in the block
     */
    data: PropTypes.object,

    /**
     * Optional configuration for the columns in the data object.
     * Follows the same format as the columns prop in the SearchUI component.
     */
    columns: PropTypes.array,

    /**
     * Control the initial expanded state of the block.
     * @default false
     */
    expanded: PropTypes.bool,

    /**
     * Content to display in the bottom section of the card.
     * If you want to put a component in the footer, add it to the children prop instead.
     */
    footer: PropTypes.node,

    /**
     * Content to display in the bottom section of the card.
     * AlternativeWill take precedent
     */
    children: PropTypes.node,

    /**
     * Class name(s) to use for the icon in the top right.
     * If no class is supplied, there will not be an icon.
     */
    iconClassName: PropTypes.string,

    /**
     * Optional tooltip to show when hovering over the icon
     */
    iconTooltip: PropTypes.string,
    disableRichColumnHeaders: PropTypes.bool,
};
