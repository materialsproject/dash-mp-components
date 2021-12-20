# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class JsonView(Component):
    """A JsonView component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- collapseStringsAfterLength (boolean | number; optional)

- collapsed (boolean | number; optional)

- defaultValue (dict; optional)

- displayDataTypes (boolean; optional)

- displayObjectSize (boolean; optional)

- enableClipboard (boolean; optional)

- groupArraysAfterLength (number; optional)

- iconStyle (string; optional)

- indentWidth (number; optional)

- name (boolean | string; optional)

- sortKeys (boolean; optional)

- src (dict; optional)

- style (dict; optional)

- theme (string; optional)

- validationMessage (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, src=Component.UNDEFINED, name=Component.UNDEFINED, theme=Component.UNDEFINED, style=Component.UNDEFINED, iconStyle=Component.UNDEFINED, indentWidth=Component.UNDEFINED, collapsed=Component.UNDEFINED, collapseStringsAfterLength=Component.UNDEFINED, groupArraysAfterLength=Component.UNDEFINED, enableClipboard=Component.UNDEFINED, displayObjectSize=Component.UNDEFINED, displayDataTypes=Component.UNDEFINED, defaultValue=Component.UNDEFINED, sortKeys=Component.UNDEFINED, validationMessage=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'collapseStringsAfterLength', 'collapsed', 'defaultValue', 'displayDataTypes', 'displayObjectSize', 'enableClipboard', 'groupArraysAfterLength', 'iconStyle', 'indentWidth', 'name', 'sortKeys', 'src', 'style', 'theme', 'validationMessage']
        self._type = 'JsonView'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'collapseStringsAfterLength', 'collapsed', 'defaultValue', 'displayDataTypes', 'displayObjectSize', 'enableClipboard', 'groupArraysAfterLength', 'iconStyle', 'indentWidth', 'name', 'sortKeys', 'src', 'style', 'theme', 'validationMessage']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(JsonView, self).__init__(**args)
