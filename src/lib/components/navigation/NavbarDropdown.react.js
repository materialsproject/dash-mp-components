import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for including dropdown menus inside a bulma navbar
 * Includes all of the default bulma classes for a navbar-dropdown
 */
export default class NavbarDropdown extends Component {
    render() {
        return <mp.NavbarDropdown {...this.props} />;
    }
}

NavbarDropdown.propTypes = {
    /**
     * Extra class name applied to top level navbar-item
     * The "navbar-item" and "has-dropdown" classes are added automatically
     */
    className: PropTypes.string,
    /**
     * Text to include in the dropdown trigger item
     * This item automatically has the "navbar-link" class
     */
    label: PropTypes.string,
    /**
   * An array of navbar-items to show in the dropdown when hovering over the label.
   * An item can be a link, a menu label, or a divider
   * Each item can support the following properties:
   * -- text: string (the text to show in the item)
   * -- href: string (the href value for link items, ignored if item is menu label)
   * -- isMenuLabel: boolean (sets this item as a label with the "menu-label" class)
   * -- isDivider: boolean (sets this item as just a horizontal rule with the "navbar-divider" class)
   * e.g.
      [
        {
          text: "Materials",
          href: "/materials"
        },
        {
          text: "Molecules",
          href: "/molecules"
        },
        {
          isDivider: true
        },
        {
          isMenuLabel: true,
          text: "Other"
        },
        {
          text: "Different",
          href: "/different"
        }
      ]
   */
    items: PropTypes.array,
};
