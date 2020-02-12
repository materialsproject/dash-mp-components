import React from 'react';
import {ReactGraphComponent} from 'mat-periodic-table';
import {Component} from 'react';

export default class GraphComponent extends Component {
    render() {
        return <ReactGraphComponent {...this.props} />;
    }
}

GraphComponent.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * A graph that will be displayed when this component is rendered
     */
    graph: PropTypes.object,

    /**
     * Display options for the graph
     */
    options: PropTypes.object,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,
};
