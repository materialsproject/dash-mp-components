# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SearchUI(Component):
    """A SearchUI component.
Component for rendering advanced search interfaces for data in an API
Renders results in a data table alongside a set of filters that map to properties in the data.

Documentation: https://materialsproject.github.io/mp-react-components/?path=/docs/search-ui-searchui-component--fully-featured

Keyword arguments:
- id (string; optional)
- columns (list; optional)
- filterGroups (list; optional)
- apiEndpoint (string; optional)
- apiEndpointParams (dict; optional)
- autocompleteFormulaUrl (string; optional)
- apiKey (string; optional)
- resultLabel (string; optional)
- hasSearchBar (boolean; optional)
- searchBarTooltip (string; optional)
- searchBarPlaceholder (string; optional)
- searchBarErrorMessage (string; optional)
- searchBarAllowedInputTypesMap (dict; optional)
- searchBarPeriodicTableMode (a value equal to: 'toggle', 'focus', 'none'; optional)
- searchBarHelpItems (list; optional)
- searchBarChemicalSystemSelectHelpText (string; optional)
- searchBarElementsSelectHelpText (string; optional)
- hasSortMenu (boolean; optional)
- sortField (string; optional)
- sortAscending (boolean; optional)
- secondarySortField (string; optional)
- secondarySortAscending (boolean; optional)
- conditionalRowStyles (list; optional)
- selectableRows (boolean; optional)
- selectedRows (list; optional)
- view (a value equal to: 'table', 'synthesis'; optional)
- isContribs (boolean; optional)
- disableRichColumnHeaders (boolean; optional)
- results (list; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, columns=Component.UNDEFINED, filterGroups=Component.UNDEFINED, apiEndpoint=Component.UNDEFINED, apiEndpointParams=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, apiKey=Component.UNDEFINED, resultLabel=Component.UNDEFINED, hasSearchBar=Component.UNDEFINED, searchBarTooltip=Component.UNDEFINED, searchBarPlaceholder=Component.UNDEFINED, searchBarErrorMessage=Component.UNDEFINED, searchBarAllowedInputTypesMap=Component.UNDEFINED, searchBarPeriodicTableMode=Component.UNDEFINED, searchBarHelpItems=Component.UNDEFINED, searchBarChemicalSystemSelectHelpText=Component.UNDEFINED, searchBarElementsSelectHelpText=Component.UNDEFINED, hasSortMenu=Component.UNDEFINED, sortField=Component.UNDEFINED, sortAscending=Component.UNDEFINED, secondarySortField=Component.UNDEFINED, secondarySortAscending=Component.UNDEFINED, conditionalRowStyles=Component.UNDEFINED, selectableRows=Component.UNDEFINED, selectedRows=Component.UNDEFINED, view=Component.UNDEFINED, isContribs=Component.UNDEFINED, disableRichColumnHeaders=Component.UNDEFINED, results=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'columns', 'filterGroups', 'apiEndpoint', 'apiEndpointParams', 'autocompleteFormulaUrl', 'apiKey', 'resultLabel', 'hasSearchBar', 'searchBarTooltip', 'searchBarPlaceholder', 'searchBarErrorMessage', 'searchBarAllowedInputTypesMap', 'searchBarPeriodicTableMode', 'searchBarHelpItems', 'searchBarChemicalSystemSelectHelpText', 'searchBarElementsSelectHelpText', 'hasSortMenu', 'sortField', 'sortAscending', 'secondarySortField', 'secondarySortAscending', 'conditionalRowStyles', 'selectableRows', 'selectedRows', 'view', 'isContribs', 'disableRichColumnHeaders', 'results']
        self._type = 'SearchUI'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'columns', 'filterGroups', 'apiEndpoint', 'apiEndpointParams', 'autocompleteFormulaUrl', 'apiKey', 'resultLabel', 'hasSearchBar', 'searchBarTooltip', 'searchBarPlaceholder', 'searchBarErrorMessage', 'searchBarAllowedInputTypesMap', 'searchBarPeriodicTableMode', 'searchBarHelpItems', 'searchBarChemicalSystemSelectHelpText', 'searchBarElementsSelectHelpText', 'hasSortMenu', 'sortField', 'sortAscending', 'secondarySortField', 'secondarySortAscending', 'conditionalRowStyles', 'selectableRows', 'selectedRows', 'view', 'isContribs', 'disableRichColumnHeaders', 'results']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SearchUI, self).__init__(**args)
