// Note(chab) If you remove this import, things will fail
import {Component} from 'react';
import React from 'react';
import {StandalonePeriodicComponent} from 'mat-periodic-table';

import PropTypes from 'prop-types';

/**
 *
 * This component displays a periodic element
 *
 */
export default class MpPeriodicElement extends Component {
    render() {
        return (
            <StandalonePeriodicComponent
                hidden={false}
                enabled={false}
                disabled={false}
                size={this.props.size}
                element={this.props.element}
                onElementHovered={() => {}}
                onElementClicked={() => {}}
            />
        );
    }
}

MpPeriodicElement.propTypes = {
    id: PropTypes.string,
    size: PropTypes.number,
    element: PropTypes.string, // symbol of the element to be displayed
    setProps: PropTypes.func,
};
MpPeriodicElement.defaultProps = {};
