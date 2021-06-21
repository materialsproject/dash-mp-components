import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render formula strings with proper subscripts.
 * Note that this component expects the string to be
 * a valid formula.
 */

export default class Formula extends Component {
    render() {
        return <mpc.Formula {...this.props} />;
    }
}

Formula.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.function,

    /**
     * Class name(s) to append to the component's default class (mpc-formula)
     */
    className: PropTypes.string,

    /**
     * Use the children prop to set the content of the formula.
     * Must be a simple string.
     */
    children: PropTypes.node,
};
