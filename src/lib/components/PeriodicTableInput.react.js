import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PeriodicTableComponent from '../dependencies/PeriodicTableInput';

export default class PeriodicTableInput extends Component {
    render() {
        const {id, clicked, disabled} = this.props;
        let component = (
            <PeriodicTableComponent
                updateSelected={newClicked =>
                    this.props.setProps({clicked: newClicked})
                }
                initialClicked={clicked}
            />
        );
        return component;
    }
}

PeriodicTableInput.defaultProps = {disabled: [], clicked: []};

PeriodicTableInput.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A list of symbols that are currently highlighted as clicked
     */
    clicked: PropTypes.array,

    /**
     * A list of symbols to grey-out as disabled
     */
    disabled: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};
