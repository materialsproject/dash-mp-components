import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Custom Link component that can handle both internal and external URLs.
 * You can also use this component if you need to preserve the url query parameters
 * when following a link.
 */

export default class Link extends Component {
    render() {
        return <mpc.Link {...this.props} />;
    }
}

Link.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    preserveQuery: PropTypes.bool,
};
