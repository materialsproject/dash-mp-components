# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SearchUI(Component):
    """A SearchUI component.
Component for rendering advanced search interfaces for data in an API
Renders results in a data table alongside a set of filters that map to properties in the data.

Keyword arguments:
- columns (list; optional): An array of column definitions for the results in the SearchUIDataTable
Column properties are based on the react-data-table column settings (https://github.com/jbetancur/react-data-table-component#columns)
The "format" property must match one of these pre-defined strings: "FIXED_DECIMAL", "SIGNIFICANT_FIGURES", "FORMULA"
The "formatArg" is a special property that is used to make certain formats more specific (e.g. SIGNIFICANT_FIGURES or FIXED_DECIMAL)
example:
    [
        {
          name: 'Material Id',
          selector: 'task_ids',
          sortable: true
        },
        {
          name: 'Volume',
          selector: 'volume',
          sortable: true,
          format: 'FIXED_DECIMAL',
          formatArg: 3
        },
        {
          name: 'Density',
          selector: 'density',
          sortable: true,
          format: 'SIGNIFICANT_FIGURES',
          formatArg: 4
        }
    ]
- filterGroups (list; optional): An array of filter groups and their respective array of filters.
A filter group is a collapsible section of the filters panel that contains one or more filters.
A filter is a type of input element that filters the data based on its value.
Filter "type" must be one of these strings: "SLIDER", "MATERIALS_INPUT", "TEXT_INPUT"
Filter "id" must be a queryable field
Filter "props" defines how that filter should be rendered. See example for props format based on filter type.
example:
    [
      {
        name: 'Material',
        collapsed: false,
        filters: [
          {
            name: 'Required Elements',
            id: 'elements',
            type: 'MATERIALS_INPUT',
            props: {
              field: 'elements' // sets which field the input controls ('elements' or 'formula')
            }
          }
        ]
      },
      {
        name: 'General',
        collapsed: false,
        filters: [
          {
            name: 'Volume',
            id: 'volume',
            type: 'SLIDER',
            props: {
              domain: [0, 200] // sets the min and max values of the slider
            }
          },
          {
            name: 'Density',
            id: 'density',
            type: 'SLIDER',
            props: {
              domain: [0, 200]
            }
          }
        ]
      }
    ]
- baseURL (string; optional): The base URL to the API that this search UI should query
e.g. "https://api.materialsproject.org/materials/"
- apiKey (string; optional): API key (if needed) that will be used when making queries"""
    @_explicitize_args
    def __init__(self, columns=Component.UNDEFINED, filterGroups=Component.UNDEFINED, baseURL=Component.UNDEFINED, apiKey=Component.UNDEFINED, **kwargs):
        self._prop_names = ['columns', 'filterGroups', 'baseURL', 'apiKey']
        self._type = 'SearchUI'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['columns', 'filterGroups', 'baseURL', 'apiKey']
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
