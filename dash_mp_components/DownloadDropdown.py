# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DownloadDropdown(Component):
    """A DownloadDropdown component.
Dropdown for exporting arrays/lists to json, csv, or xlsx files
The dropdown options are prepopulated as JSON, CSV, EXCEL
This dropdown contains all the classes used in bulma dropdown

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the content for the dropdown button
    label This can be simple text or a component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- buttonClassName (string; optional):
    Class(es) to add to the button element of the component Note: the
    class \"button\" is already added by default.

- className (string; optional):
    Class(es) to add to the top-level element of the component Note:
    the classes \"mpc-download-dropdown dropdown is-active\" are
    already added by default.

- data (optional):
    Array/list to be downloaded.

- filename (string; optional):
    Name of the file WITHOUT the extension (default: \"export\").

- tooltip (string; optional):
    Optional tooltip to display above the button on hover."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, buttonClassName=Component.UNDEFINED, data=Component.UNDEFINED, filename=Component.UNDEFINED, tooltip=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'buttonClassName', 'className', 'data', 'filename', 'tooltip']
        self._type = 'DownloadDropdown'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'buttonClassName', 'className', 'data', 'filename', 'tooltip']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DownloadDropdown, self).__init__(children=children, **args)
