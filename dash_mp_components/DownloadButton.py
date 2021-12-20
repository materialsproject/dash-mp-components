# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DownloadButton(Component):
    """A DownloadButton component.
Button for exporting arrays or objects to files

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional):
    Use the children prop to set the button content This can be simple
    text or a component.

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- className (string; optional):
    Class(es) to add to the top-level element of the component Note:
    the class \"mpc-download-button\" is always added.

- data (optional):
    Array or object (list or dictionary) to be downloaded If
    downloading as csv or xlsx, data must be an array/list.

- filename (string; optional):
    Name of the file WITHOUT the extension (default: \"export\").

- filetype (a value equal to: 'json', 'csv', 'xlsx'; optional):
    File type to be downloaded This is also the extension that will be
    appended to the filename (default: \"json\").

- tooltip (string; optional):
    Optional tooltip to display above the button on hover."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, data=Component.UNDEFINED, filename=Component.UNDEFINED, filetype=Component.UNDEFINED, tooltip=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'data', 'filename', 'filetype', 'tooltip']
        self._type = 'DownloadButton'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'data', 'filename', 'filetype', 'tooltip']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DownloadButton, self).__init__(children=children, **args)
