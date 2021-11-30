import * as mpc from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generic dropdown menu that can render arbitrary items for display
 * and navigation purposes only (i.e. not for selecting options or performing actions that are not links)
 */
export default class Dropdown extends Component {
    render() {
        return <mpc.Dropdown {...this.props} />;
    }
}

Dropdown.propTypes = {
    /**
     * Use the children prop to set the dropdown items.
     * This should usually be a list of <div> components with the class "dropdown-item".
     * The content of each item can be anything from simple text to a component.
     */
    children: PropTypes.node,

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
     * Class name(s) to append to the component's default class (dropdown)
     */
    className: PropTypes.string,

    /**
     * Text to display in the button that triggers the dropdown to open
     */
    triggerLabel: PropTypes.string,

    /**
     * Class name(s) to apply to button that opens the dropdown menu
     * @default 'button'
     */
    triggerClassName: PropTypes.string,

    /**
     * Class name(s) for the icon to display to the left of the trigger label (optional)
     */
    triggerIcon: PropTypes.string,

    /**
     * List of strings to display inside the dropdown menu.
     * Omit this and use the children prop instead if you want supply components as dropdown items.
     */
    items: PropTypes.arrayOf(PropTypes.string),

    /**
     * Set to true to remove the arrow to the right of the trigger label
     */
    isArrowless: PropTypes.bool,

    /**
     * Set to true to make the dropdown menu open upwards
     */
    isUp: PropTypes.bool,

    /**
     * Set to true to align the dropdown menu with the right of the trigger
     */
    isRight: PropTypes.bool,

    /**
     * Set to false to keep the menu open when an item is clicked
     * @default true
     */
    closeOnSelection: PropTypes.bool,
};
