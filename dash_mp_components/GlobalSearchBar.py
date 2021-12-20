# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GlobalSearchBar(Component):
    """A GlobalSearchBar component.
Component for rendering advanced search interfaces for data in an API
Renders results in a data table alongside a set of filters that map to properties in the data.

Keyword arguments:

- apiKey (string; optional):
    API key (if needed) that will be used to hit the autocomplete
    route.

- autocompleteFormulaUrl (string; optional):
    Optional URL endpoint for fetching formula autocompletion results
    e.g.
    \"https://api.materialsproject.org/materials/formula_autocomplete/\".

- hidePeriodicTable (boolean; optional):
    Boolean flag for showing/hiding the periodic table on initial
    load.

- placeholder (string; optional):
    Optionally add a string of text to show up in the top-level search
    bar.

- redirectRoute (string; optional):
    The route (minus the query params) that submissions should
    redirect to.

- tooltip (string; optional):
    Optionally add a help icon with a tooltip in the search bar This
    should be used to provide instructions on how to use the search
    bar e.g.  'Type in a comma-separated list of element symbols (e.g.
    Ga, N),  a chemical formula (e.g. C3N), or a material id (e.g.
    mp-10152).  You can also click elements on the periodic table to
    add them to your search.'."""
    @_explicitize_args
    def __init__(self, redirectRoute=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, apiKey=Component.UNDEFINED, hidePeriodicTable=Component.UNDEFINED, tooltip=Component.UNDEFINED, placeholder=Component.UNDEFINED, **kwargs):
        self._prop_names = ['apiKey', 'autocompleteFormulaUrl', 'hidePeriodicTable', 'placeholder', 'redirectRoute', 'tooltip']
        self._type = 'GlobalSearchBar'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['apiKey', 'autocompleteFormulaUrl', 'hidePeriodicTable', 'placeholder', 'redirectRoute', 'tooltip']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GlobalSearchBar, self).__init__(**args)
