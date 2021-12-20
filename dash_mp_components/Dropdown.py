# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Dropdown(Component):
    """A Dropdown component.
Generic dropdown menu that can render arbitrary items for display
and navigation purposes only (i.e. not for selecting options or performing actions that are not links)

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the dropdown items. This should
    usually be a list of <div> components with the class
    \"dropdown-item\". The content of each item can be anything from
    simple text to a component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (dropdown).

- closeOnSelection (boolean; optional):
    Set to False to keep the menu open when an item is clicked
    @default True.

- isArrowless (boolean; optional):
    Set to True to remove the arrow to the right of the trigger label.

- isRight (boolean; optional):
    Set to True to align the dropdown menu with the right of the
    trigger.

- isUp (boolean; optional):
    Set to True to make the dropdown menu open upwards.

- items (list of strings; optional):
    List of strings to display inside the dropdown menu. Omit this and
    use the children prop instead if you want supply components as
    dropdown items.

- triggerClassName (string; optional):
    Class name(s) to apply to button that opens the dropdown menu
    @default 'button'.

- triggerIcon (string; optional):
    Class name(s) for the icon to display to the left of the trigger
    label (optional).

- triggerLabel (string; optional):
    Text to display in the button that triggers the dropdown to open."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, triggerLabel=Component.UNDEFINED, triggerClassName=Component.UNDEFINED, triggerIcon=Component.UNDEFINED, items=Component.UNDEFINED, isArrowless=Component.UNDEFINED, isUp=Component.UNDEFINED, isRight=Component.UNDEFINED, closeOnSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'closeOnSelection', 'isArrowless', 'isRight', 'isUp', 'items', 'triggerClassName', 'triggerIcon', 'triggerLabel']
        self._type = 'Dropdown'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'closeOnSelection', 'isArrowless', 'isRight', 'isUp', 'items', 'triggerClassName', 'triggerIcon', 'triggerLabel']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Dropdown, self).__init__(children=children, **args)
