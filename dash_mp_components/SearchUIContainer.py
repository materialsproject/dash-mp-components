# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args

ComponentSingleType = typing.Union[str, int, float, Component, None]
ComponentType = typing.Union[
    ComponentSingleType,
    typing.Sequence[ComponentSingleType],
]

NumberType = typing.Union[
    typing.SupportsFloat, typing.SupportsInt, typing.SupportsComplex
]


class SearchUIContainer(Component):
    """A SearchUIContainer component.
A component that can wrap around sub-components of `SearchUI` and ensure they are
all hooked up to the same context.
This allows you to use the state management functionality of `SearchUI` with the ability
to customize the inner layout and components.

Keyword arguments:

- children (a list of or a singular dash component, string or number; optional)

- id (string; optional)

- apiEndpoint (string; optional)

- apiEndpointParams (dict; optional)

- apiKey (string; optional)

- autocompleteFormulaUrl (string; optional)

- className (string; optional)

- columns (list; optional)

- conditionalRowStyles (list; optional)

- disableRichColumnHeaders (boolean; optional)

- fieldsKey (string; optional)

- filterGroups (list; optional)

- hasSortMenu (boolean; optional)

- lastClickedCell (dict; optional):
    Set automatically by the SearchUI when a `LINK_POPOVER` cell is
    clicked. Shape: `{selector, value, row, ts}`. Used as a Dash
    callback `Input` to trigger server-side resolution that populates
    `popoverContent`.

- limitKey (string; optional)

- popoverContent (a list of or a singular dash component, string or number; optional):
    Renderable content (Dash component tree) shown inside the popover
    for the most recently clicked `LINK_POPOVER` cell. Typically set
    by a Dash callback responding to `lastClickedCell`.

- resultLabel (string; optional)

- results (list; optional)

- selectableRows (boolean; optional)

- selectedRows (list; optional)

- skipKey (string; optional)

- sortFields (list of strings; optional)

- sortKey (string; optional)

- totalKey (string; optional)

- view (a value equal to: 'table', 'synthesis'; optional)"""
    _children_props: typing.List[str] = ['popoverContent']
    _base_nodes = ['popoverContent', 'children']
    _namespace = 'dash_mp_components'
    _type = 'SearchUIContainer'


    def __init__(
        self,
        children: typing.Optional[ComponentType] = None,
        id: typing.Optional[typing.Union[str, dict]] = None,
        className: typing.Optional[str] = None,
        columns: typing.Optional[typing.Sequence] = None,
        filterGroups: typing.Optional[typing.Sequence] = None,
        apiEndpoint: typing.Optional[str] = None,
        apiEndpointParams: typing.Optional[dict] = None,
        autocompleteFormulaUrl: typing.Optional[str] = None,
        apiKey: typing.Optional[str] = None,
        resultLabel: typing.Optional[str] = None,
        hasSortMenu: typing.Optional[bool] = None,
        sortFields: typing.Optional[typing.Sequence[str]] = None,
        sortKey: typing.Optional[str] = None,
        skipKey: typing.Optional[str] = None,
        limitKey: typing.Optional[str] = None,
        totalKey: typing.Optional[str] = None,
        fieldsKey: typing.Optional[str] = None,
        conditionalRowStyles: typing.Optional[typing.Sequence] = None,
        selectableRows: typing.Optional[bool] = None,
        selectedRows: typing.Optional[typing.Sequence] = None,
        view: typing.Optional[Literal["table", "synthesis"]] = None,
        disableRichColumnHeaders: typing.Optional[bool] = None,
        results: typing.Optional[typing.Sequence] = None,
        lastClickedCell: typing.Optional[dict] = None,
        popoverContent: typing.Optional[ComponentType] = None,
        **kwargs
    ):
        self._prop_names = ['children', 'id', 'apiEndpoint', 'apiEndpointParams', 'apiKey', 'autocompleteFormulaUrl', 'className', 'columns', 'conditionalRowStyles', 'disableRichColumnHeaders', 'fieldsKey', 'filterGroups', 'hasSortMenu', 'lastClickedCell', 'limitKey', 'popoverContent', 'resultLabel', 'results', 'selectableRows', 'selectedRows', 'skipKey', 'sortFields', 'sortKey', 'totalKey', 'view']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'apiEndpoint', 'apiEndpointParams', 'apiKey', 'autocompleteFormulaUrl', 'className', 'columns', 'conditionalRowStyles', 'disableRichColumnHeaders', 'fieldsKey', 'filterGroups', 'hasSortMenu', 'lastClickedCell', 'limitKey', 'popoverContent', 'resultLabel', 'results', 'selectableRows', 'selectedRows', 'skipKey', 'sortFields', 'sortKey', 'totalKey', 'view']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        super(SearchUIContainer, self).__init__(children=children, **args)

setattr(SearchUIContainer, "__init__", _explicitize_args(SearchUIContainer.__init__))
