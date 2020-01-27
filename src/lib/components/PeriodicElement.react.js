import React from 'react';
import {PeriodicElement} from 'mat-periodic-table';

import PropTypes from 'prop-types';

/**
 *
 * This component displays a periodic element
 *
 */
export default class MpPeriodicElement extends Component {
    render() {
        return (
            <PeriodicElement
                hidden={false}
                enabled={false}
                disabled={false}
                onElementHovered={() => {}}
                onElementClicked={() => {}}
            />
        );
    }
}

MpPeriodicElement.propTypes = {
    id: PropTypes.string,
    setProps: PropTypes.func,
};
MpPeriodicElement.defaultProps = {};
