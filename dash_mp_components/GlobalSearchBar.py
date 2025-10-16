# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentType = typing.Union[
    str,
    int,
    float,
    Component,
    None,
    typing.Sequence[typing.Union[str, int, float, Component, None]],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


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
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_mp_components'
    _type = 'GlobalSearchBar'


    def __init__(
        self,
        redirectRoute: typing.Optional[str] = None,
        autocompleteFormulaUrl: typing.Optional[str] = None,
        apiKey: typing.Optional[str] = None,
        hidePeriodicTable: typing.Optional[bool] = None,
        tooltip: typing.Optional[str] = None,
        placeholder: typing.Optional[str] = None,
        **kwargs
    ):
        self._prop_names = ['apiKey', 'autocompleteFormulaUrl', 'hidePeriodicTable', 'placeholder', 'redirectRoute', 'tooltip']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['apiKey', 'autocompleteFormulaUrl', 'hidePeriodicTable', 'placeholder', 'redirectRoute', 'tooltip']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(GlobalSearchBar, self).__init__(**args)

setattr(GlobalSearchBar, "__init__", _explicitize_args(GlobalSearchBar.__init__))
