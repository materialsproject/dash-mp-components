# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SearchUI(Component):
    """A SearchUI component.
Component for rendering advanced search interfaces for data in an API
Renders results in a data table alongside a set of filters that map to properties in the data.

Keyword arguments:
- columns (list; optional): An array of column definitions for the results in the SearchUIDataTable
Column properties are based on the react-data-table column settings (https://github.com/jbetancur/react-data-table-component#columns)
The "format" property must match one of these pre-defined strings: 
   "FIXED_DECIMAL", "SIGNIFICANT_FIGURES", "FORMULA", "LINK", "BOOLEAN", "SPACEGROUP_SYMBOL", "POINTGROUP"
The "formatArg" is a special property that is used to make certain formats more specific (e.g. SIGNIFICANT_FIGURES or FIXED_DECIMAL)
The "omit" property lets you hide certain columns by default
Read more about columns here: https://github.com/jbetancur/react-data-table-component#columns
e.g.
      [
          {
            name: 'Material Id',
            selector: 'task_ids',
            format: 'LINK', // creates a link using the value in this column
            formatArg: '/materials/' // prepends this string to the column value in the links href (e.g. href="/materials/mp-100")
          },
          {
            name: 'Formula',
            selector: 'formula_pretty',
            format: 'FORMULA',
            minWidth: '130px' // sets a minimum width for cells in this column
          },
          {
            name: 'Volume',
            selector: 'volume',
            format: 'FIXED_DECIMAL',
            formatArg: 3 // number of decimals to fix to
            omit: true // hide this column initially
          },
          {
            name: 'Density',
            selector: 'density',
            format: 'SIGNIFICANT_FIGURES',
            formatArg: 4 // number of significant figures to use
          },
          {
            name: 'Is Stable',
            selector: 'is_stable',
            format: 'BOOLEAN',
            formatArg: ['yes', 'no'] // sets display values for truthy and falsy values
          },
          {
            name: 'Energy Above Hull',
            selector: 'e_above_hull',
            format: 'FIXED_DECIMAL',
            formatArg: 2,
            units: 'meV/atom', // unit label string to show under column header
            conversionFactor: 1000, // number by which to multiply result values in this columm
          },
      ]
- filterGroups (list; optional): An array of filter groups and their respective array of filters.
A filter group is a collapsible section of the filters panel that contains one or more filters.
A filter is a type of input element that filters the data based on its value.
Filter "type" must be one of the all-caps strings used in the example below.
Filter "id" must be a queryable field
Filter "props" defines how that filter should be rendered. See example for props format based on filter type.
e.g.
      [
        {
          name: 'Material Definition',
          collapsed: false,
          filters: [
            {
              name: 'ID',
              id: 'task_ids',
              type: 'TEXT_INPUT' // a standard text input box for string values
            },
            {
              name: 'Elements',
              id: 'elements',
              type: 'MATERIALS_INPUT', // a text input box and a periodic table synced together for selecting selements
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
              type: 'SLIDER', // a dual range slider for setting a min and max value (must have two query params equal to <id>_min and <id>_max)
              units: 'kg', // (optional) unit label string to show next to filter label
              conversionFactor: 0.001, // (optional) number by which to multiply filter values for api queries
              props: {
                domain: [0, 200] // sets the min and max values of the slider
              }
            },
            {
              name: 'Stability',
              id: 'is_stable',
              type: 'THREE_STATE_BOOLEAN_SELECT', // a dropdown with three values: true, false, or undefined
              props: {
                options: [ // a list of options for the dropdwon (must supply only two options, the undefined option is added automatically)
                  {
                    label: 'Is stable',
                    value: true
                  },
                  {
                    label: 'Is not stable',
                    value: false
                  }
                ]
              }
            },
            {
              name: 'Spacegroup Symbol',
              id: 'spacegroup_symbol',
              type: 'SELECT_SPACEGROUP_SYMBOL' // a special dropdown for selecting a space group symbol (options are auto-generated)
            },
            {
              name: 'Spacegroup Number',
              id: 'spacegroup_number',
              type: 'SELECT_SPACEGROUP_NUMBER' // a special dropdown for selecting a space group number (options are auto-generated)
            },
            {
              name: 'Crystal System',
              id: 'crystal_system',
              type: 'SELECT_CRYSTAL_SYSTEM' // a special dropdown for selecting a crystal system (options are auto-generated)
            },
            {
              name: 'Point Group',
              id: 'pointgroup',
              type: 'SELECT_POINTGROUP' // a special dropdown for selecting a point group (options are auto-generated)
            },
            {
              name: 'Color',
              id: 'color',
              type: 'SELECT', // a custom single select dropdown with any number of options
              props: {
                options: [ // a list of options for the dropdwon
                  {
                    label: 'Blue',
                    value: 'blue'
                  },
                  {
                    label: 'Red',
                    value: 'red'
                  },
                  {
                    label: 'Yellow',
                    value: 'yellow'
                  }
                ]
              }
            },
          ]
        }
      ]
- baseURL (string; optional): The base URL to the API that this search UI should query
e.g. "https://api.materialsproject.org/search/"
- autocompleteFormulaUrl (string; optional): Optional URL endpoint for fetching formula autocompletion results
e.g. "https://api.materialsproject.org/materials/formula_autocomplete/"
- apiKey (string; optional): API key (if needed) that will be used when making queries
- resultLabel (string; optional): A noun in singular form to describe what a result represents (default: "result")
e.g. "material"
Note that only some special plural mappings are handled automatically (e.g. battery -> batteries)
In all other cases, an "s" is appended to resultLabel
- searchBarTooltip (string; optional): Optionally add a help icon with a tooltip in the search bar
This should be used to provide instructions on how to use the search bar
e.g.
 'Type in a comma-separated list of element symbols (e.g. Ga, N),
 a chemical formula (e.g. C3N), or a material id (e.g. mp-10152).
 You can also click elements on the periodic table to add them to your search.'
- searchBarPlaceholder (string; optional): Optionally add a string of text to show up in the top-level search bar
- sortField (string; optional): Optionally include a field to sort by on initial load
Must be a valid field and included in your list of columns
- sortAscending (boolean; optional): If including a sortField, set whether it should ascend by default
True for ascending, False for descending"""
    @_explicitize_args
    def __init__(self, columns=Component.UNDEFINED, filterGroups=Component.UNDEFINED, baseURL=Component.UNDEFINED, autocompleteFormulaUrl=Component.UNDEFINED, apiKey=Component.UNDEFINED, resultLabel=Component.UNDEFINED, searchBarTooltip=Component.UNDEFINED, searchBarPlaceholder=Component.UNDEFINED, sortField=Component.UNDEFINED, sortAscending=Component.UNDEFINED, **kwargs):
        self._prop_names = ['columns', 'filterGroups', 'baseURL', 'autocompleteFormulaUrl', 'apiKey', 'resultLabel', 'searchBarTooltip', 'searchBarPlaceholder', 'sortField', 'sortAscending']
        self._type = 'SearchUI'
        self._namespace = 'dash_mp_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['columns', 'filterGroups', 'baseURL', 'autocompleteFormulaUrl', 'apiKey', 'resultLabel', 'searchBarTooltip', 'searchBarPlaceholder', 'sortField', 'sortAscending']
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
