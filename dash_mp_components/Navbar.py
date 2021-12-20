# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Navbar(Component):
    """A Navbar component.
Component for including dropdown menus inside a bulma navbar
Includes all of the default bulma classes for a navbar-dropdown

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- brandItem (dict; optional):
    Single navbar-item to display on the left of the navbar in the
    \"navbar-brand\" element. Expects an object that can support all
    the same properties of a navbar-item. e.g.         {
    label: \"The Materials Project\",           href: \"/\",
    image: \"/images/brand.png\"         },.

- className (string; optional):
    Extra class name applied to top level navbar-item. The \"navbar\"
    class is added automatically.

- items (list; optional):
    An array of navbar-items to show on the right side of the navbar.
    An item can be a link, a menu label, or a divider. Each item can
    support the following properties:    className: string;    label:
    string (the text to show in the item);    href: string (the href
    value for link items, ignored if item is menu label);    target:
    string (target value to be added to the link);    icon: string
    (class name(s) for an icon to display in the navbar-item);
    image: string (src attribute of an image to display in the
    navbar-item);    items: array (items to render underneath this
    item as a dropdown)       items of items (i.e. dropdown items) can
    have all the above properties plus the following:       isDivider:
    boolean (sets this item as just a horizontal rule with the
    \"navbar-divider\" class);      isMenuLabel: boolean (sets this
    item as a label with the \"menu-label\" class);      items:
    NavbarItem[];     isRight: boolean (applies bulma's \"is-right\"
    class to the navbar-dropdown    isArrowless: boolean (Set to True
    to hide the default angle down arrow created by bulma); e.g.
    [           {             label: \"API\",             href:
    \"/api\"           },           {             label: \"Help\",
    href: \"/help\"           },           {             label:
    \"Apps\",             isRight: True,             items: [
    {                 label: \"Materials\",                 href:
    \"/materials\"               },               {
    label: \"Molecules\",                 href: \"/molecules\"
    },               {                 isDivider: True
    },               {                 isMenuLabel: True,
    label: \"Other\"               },               {
    label: \"External Site\",                 href:
    \"https://externalsite.com\",                 target: \"_blank\"
    }             ]           }         ]."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, items=Component.UNDEFINED, brandItem=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'brandItem', 'className', 'items']
        self._type = 'Navbar'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'brandItem', 'className', 'items']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Navbar, self).__init__(**args)
