import * as mp from '@materialsproject/mp-react-components';
import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for building in-page navigation menus with scrollspy functionality
 */
export default class Scrollspy extends Component {
    render() {
        return <mp.Scrollspy {...this.props} />;
    }
}

Scrollspy.propTypes = {
    /**
   * An array of MenuGroup items that is used to build the menu and its links.
   * Each MenuGroup has an optional label and a required 'items' array of MenuItems.
   * Each MenuItem has a label that is rendered in the menu and a targetId that is the id of the element it should link to.
   * Do not include '#' in targetId.
   * example:
      [
        {label: '...', items: [
          {label: '...', targetId: '...'}, 
          {label: '...', targetId: '...', items: [
            {label: '...', targetId: '...'}
          }]
        ]}
      ]
   */
    menuGroups: PropTypes.array,
    /**
     * Class name applied to active links in the menu (default: 'is-active')
     */
    activeClassName: PropTypes.string,
    /**
     * Class name applied to the <aside> that contains the whole menu (default: 'menu')
     */
    menuClassName: PropTypes.string,
    /**
     * Class name applied to all menu group labels (default: 'menu-label')
     */
    menuGroupLabelClassName: PropTypes.string,
    /**
     * Class name applied to each <ul> of menu items (default: 'menu-list')
     */
    menuItemContainerClassName: PropTypes.string,
    /**
     * Class name applied to the <li> of each menu item (default: '')
     */
    menuItemClassName: PropTypes.string,
    /**
     * An integer to determine the scroll offset from an item that will trigger it active (default: -20)
     */
    offset: PropTypes.number,
};
