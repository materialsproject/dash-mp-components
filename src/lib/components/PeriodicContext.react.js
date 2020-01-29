import {PeriodicContext} from 'mat-periodic-table';
import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

export default class MpPeriodicContext extends Component {
    render() {
        if (!!this.props.children) {
            return <PeriodicContext>{this.props.children}</PeriodicContext>;
        } else {
            return <div>empty</div>;
        }
    }
}

MpPeriodicContext.propTypes = {
    id: PropTypes.string,
    children: PropTypes.any,
};
MpPeriodicContext.defaultProps = {};
