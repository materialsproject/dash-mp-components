# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DataBlock(Component):
    """A DataBlock component.
Display a single record of data in a horizontal block element
with an optional expanded view to show additional data columns.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Content to display in the bottom section of the card.
    AlternativeWill take precedent.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class name(s) to append to the component's default class
    (mpc-data-block).

- columns (list; optional):
    Optional configuration for the columns in the data object. Follows
    the same format as the columns prop in the SearchUI component.

- data (dict; optional):
    Object (i.e. dictionary) of data to be displayed in the block.

- disableRichColumnHeaders (boolean; optional)

- expanded (boolean; optional):
    Control the initial expanded state of the block. @default False.

- footer (a list of or a singular dash component, string or number; optional):
    Content to display in the bottom section of the card. If you want
    to put a component in the footer, add it to the children prop
    instead.

- iconClassName (string; optional):
    Class name(s) to use for the icon in the top right. If no class is
    supplied, there will not be an icon.

- iconTooltip (string; optional):
    Optional tooltip to show when hovering over the icon."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, data=Component.UNDEFINED, columns=Component.UNDEFINED, expanded=Component.UNDEFINED, footer=Component.UNDEFINED, iconClassName=Component.UNDEFINED, iconTooltip=Component.UNDEFINED, disableRichColumnHeaders=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'columns', 'data', 'disableRichColumnHeaders', 'expanded', 'footer', 'iconClassName', 'iconTooltip']
        self._type = 'DataBlock'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'columns', 'data', 'disableRichColumnHeaders', 'expanded', 'footer', 'iconClassName', 'iconTooltip']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DataBlock, self).__init__(children=children, **args)
