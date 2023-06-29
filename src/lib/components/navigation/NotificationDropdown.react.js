import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class NotificationDropdown extends Component {
    render() {
        return <mpc.NotificationDropdown {...this.props} />;
    }
}

NotificationDropdown.propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    isRight: PropTypes.bool,
    isModal: PropTypes.bool,
    isHidden: PropTypes.bool,
    hasUnread: PropTypes.bool,
    children: PropTypes.node,
    id: PropTypes.string,
    link: PropTypes.string,
};
