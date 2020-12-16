# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NavbarDropdown(Component):
    """A NavbarDropdown component.
Component for including dropdown menus inside a bulma navbar
Includes all of the default bulma classes for a navbar-dropdown

Keyword arguments:
- className (string; optional): Extra class name applied to top level navbar-item
The "navbar-item" and "has-dropdown" classes are added automatically
- label (string; optional): Text to include in the dropdown trigger item
This item automatically has the "navbar-link" class
- items (list; optional): An array of navbar-items to show in the dropdown when hovering over the label.
An item can be a link, a menu label, or a divider
Each item can support the following properties:
-- text: string (the text to show in the item)
-- href: string (the href value for link items, ignored if item is menu label)
-- isMenuLabel: boolean (sets this item as a label with the "menu-label" class)
-- isDivider: boolean (sets this item as just a horizontal rule with the "navbar-divider" class)
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
          text: "Different",
          href: "/different"
        }
      ]"""
    @_explicitize_args
    def __init__(self, className=Component.UNDEFINED, label=Component.UNDEFINED, items=Component.UNDEFINED, **kwargs):
        self._prop_names = ['className', 'label', 'items']
        self._type = 'NavbarDropdown'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['className', 'label', 'items']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NavbarDropdown, self).__init__(**args)
