import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for including dropdown menus inside a bulma navbar
 * Includes all of the default bulma classes for a navbar-dropdown
 */
export default class Navbar extends Component {
    render() {
        return <mp.Navbar {...this.props} />;
    }
}

Navbar.propTypes = {
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
     * Extra class name applied to top level navbar-item.
     * The "navbar" class is added automatically
     */
    className: PropTypes.string,

    /**
     * An array of navbar-items to show on the right side of the navbar.
     * An item can be a link, a menu label, or a divider.
     * Each item can support the following properties:
     *    className: string;
     *    label: string (the text to show in the item);
     *    href: string (the href value for link items, ignored if item is menu label);
     *    target: string (target value to be added to the link);
     *    icon: string (class name(s) for an icon to display in the navbar-item);
     *    image: string (src attribute of an image to display in the navbar-item);
     *    items: array (items to render underneath this item as a dropdown)
     * 
     *      items of items (i.e. dropdown items) can have all the above properties plus the following:
     * 
     *      isDivider: boolean (sets this item as just a horizontal rule with the "navbar-divider" class);
     *      isMenuLabel: boolean (sets this item as a label with the "menu-label" class);
     *      items: NavbarItem[];
     * 
     *    isRight: boolean (applies bulma's "is-right" class to the navbar-dropdown
     *    isArrowless: boolean (Set to true to hide the default angle down arrow created by bulma);
     * e.g.
        [
          {
            label: "API",
            href: "/api"
          },
          {
            label: "Help",
            href: "/help"
          },
          {
            label: "Apps",
            isRight: true,
            items: [
              {
                label: "Materials",
                href: "/materials"
              },
              {
                label: "Molecules",
                href: "/molecules"
              },
              {
                isDivider: true
              },
              {
                isMenuLabel: true,
                label: "Other"
              },
              {
                label: "External Site",
                href: "https://externalsite.com",
                target: "_blank"
              }
            ]
          }
        ]
    */
    items: PropTypes.array,

    /**
     * Single navbar-item to display on the left of the navbar in the "navbar-brand" element.
     * Expects an object that can support all the same properties of a navbar-item.
     * e.g.
        {
          label: "The Materials Project",
          href: "/",
          image: "/images/brand.png"
        },
     */
    brandItem: PropTypes.object,
};
