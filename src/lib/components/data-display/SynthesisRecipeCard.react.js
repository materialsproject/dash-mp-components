import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Display synthesis recipe data in a standardized card view.
 */

export default class SynthesisRecipeCard extends Component {
    render() {
        return <mpc.SynthesisRecipeCard {...this.props} />;
    }
}

SynthesisRecipeCard.propTypes = {
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
     * Object (i.e. dictionary) of data to be displayed in the block.
     * Data should be in the format returned for a single result from the synthesis API endpoint.
     */
    data: PropTypes.object,
};
