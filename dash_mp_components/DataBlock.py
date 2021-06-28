# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DataBlock(Component):
    """A DataBlock component.
Display a single record of data in a horizontal block element
with an optional expanded view to show additional data columns.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- className (string; optional): Class name(s) to append to the component's default class (mpc-data-block)
- data (dict; optional): Object (i.e. dictionary) of data to be displayed in the block
- columns (list; optional): Optional configuration for the columns in the data object.
Follows the same format as the columns prop in the SearchUI component.
- expanded (boolean; optional): Control the initial expanded state of the block.
@default false"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, data=Component.UNDEFINED, columns=Component.UNDEFINED, expanded=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'data', 'columns', 'expanded']
        self._type = 'DataBlock'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'data', 'columns', 'expanded']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DataBlock, self).__init__(**args)
