import {GridWithContext} from 'mat-periodic-table';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';


// this a search funnel

export default class Search extends Component {
    render() {
        return (
           <GridWithContext
            onChange={(v) => {
            //TODO filter state
                this.props.setProps({state: v});
            }}
            {...this.props}/>
        );
    }
}
Search.propTypes = {
    /**
    * Latest configuration of the funnel
    */
    state: PropTypes.object,
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
    /**
    * An array of object describing the behavior/content of each card
    *
    */
    allDefinitions: PropTypes.array,
    //onChange: (change: CardGridState) => void;
    /**
    * Ids of the cards that are shown. They should match the card in allDefinitions array
    */
    initCards: PropTypes.array
};
