# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NotificationDropdown(Component):
    """A NotificationDropdown component.


Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- className (string; optional)

- hasUnread (boolean; optional)

- isHidden (boolean; optional)

- isModal (boolean; optional)

- isRight (boolean; optional)

- items (list; optional)

- link (string; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'NotificationDropdown'
    @_explicitize_args
    def __init__(self, children=None, className=Component.UNDEFINED, items=Component.UNDEFINED, isRight=Component.UNDEFINED, isModal=Component.UNDEFINED, isHidden=Component.UNDEFINED, hasUnread=Component.UNDEFINED, id=Component.UNDEFINED, link=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'hasUnread', 'isHidden', 'isModal', 'isRight', 'items', 'link']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'hasUnread', 'isHidden', 'isModal', 'isRight', 'items', 'link']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(NotificationDropdown, self).__init__(children=children, **args)
