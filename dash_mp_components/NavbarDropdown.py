# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NavbarDropdown(Component):
    """A NavbarDropdown component.
Component for including dropdown menus inside a bulma navbar
Includes all of the default bulma classes for a navbar-dropdown

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Use the children prop to set the dropdown trigger content
This can be simple text or a component
The trigger will automatically be wrapped with the "navbar-link" class
- className (string; optional): Extra class name applied to top level navbar-item
The "navbar-item" and "has-dropdown" classes are added automatically
- isArrowless (boolean; optional): Set to true to hide the default angle down arrow created by bulma
- isRight (boolean; optional): Set to true to apply bulma's "is-right" class to the navbar-dropdown
This aligns the dropdown menu with the right side of the trigger
- items (list; optional): An array of navbar-items to show in the dropdown when hovering over the label.
An item can be a link, a menu label, or a divider
Each item can support the following properties:
-- text: string (the text to show in the item)
-- href: string (the href value for link items, ignored if item is menu label)
-- isMenuLabel: boolean (sets this item as a label with the "menu-label" class)
-- isDivider: boolean (sets this item as just a horizontal rule with the "navbar-divider" class)
-- openInNewTab: boolean (will open link in a new tab, only works if href is a full url)
e.g.
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
            text: "External Site",
            href: "https://externalsite.com",
            openInNewTab: true
          }
        ]"""
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, isArrowless=Component.UNDEFINED, isRight=Component.UNDEFINED, items=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'className', 'isArrowless', 'isRight', 'items']
        self._type = 'NavbarDropdown'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'className', 'isArrowless', 'isRight', 'items']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NavbarDropdown, self).__init__(children=children, **args)
