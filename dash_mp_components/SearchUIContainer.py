# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


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

- filterGroups (list; optional)

- hasSearchBar (boolean; optional)

- hasSortMenu (boolean; optional)

- isContribs (boolean; optional)

- resultLabel (string; optional)

- results (list; optional)

- secondarySortAscending (boolean; optional)

- secondarySortField (string; optional)

- selectableRows (boolean; optional)

- selectedRows (list; optional)

- sortAscending (boolean; optional)

- sortField (string; optional)

- view (a value equal to: 'table', 'synthesis'; optional)"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, columns=Component.UNDEFINED, filterGroups=Component.UNDEFINED, apiEndpoint=Component.UNDEFINED, apiEndpointParams=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, apiKey=Component.UNDEFINED, resultLabel=Component.UNDEFINED, hasSortMenu=Component.UNDEFINED, sortField=Component.UNDEFINED, sortAscending=Component.UNDEFINED, secondarySortField=Component.UNDEFINED, secondarySortAscending=Component.UNDEFINED, hasSearchBar=Component.UNDEFINED, conditionalRowStyles=Component.UNDEFINED, selectableRows=Component.UNDEFINED, selectedRows=Component.UNDEFINED, view=Component.UNDEFINED, isContribs=Component.UNDEFINED, disableRichColumnHeaders=Component.UNDEFINED, results=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'apiEndpoint', 'apiEndpointParams', 'apiKey', 'autocompleteFormulaUrl', 'className', 'columns', 'conditionalRowStyles', 'disableRichColumnHeaders', 'filterGroups', 'hasSearchBar', 'hasSortMenu', 'isContribs', 'resultLabel', 'results', 'secondarySortAscending', 'secondarySortField', 'selectableRows', 'selectedRows', 'sortAscending', 'sortField', 'view']
        self._type = 'SearchUIContainer'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'apiEndpoint', 'apiEndpointParams', 'apiKey', 'autocompleteFormulaUrl', 'className', 'columns', 'conditionalRowStyles', 'disableRichColumnHeaders', 'filterGroups', 'hasSearchBar', 'hasSortMenu', 'isContribs', 'resultLabel', 'results', 'secondarySortAscending', 'secondarySortField', 'selectableRows', 'selectedRows', 'sortAscending', 'sortField', 'view']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SearchUIContainer, self).__init__(children=children, **args)
