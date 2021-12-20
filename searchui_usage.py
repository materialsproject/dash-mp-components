import os

import dash_mp_components
import dash
from dash import dcc, html

from dash.exceptions import PreventUpdate
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

columns = [
  {
    'title': 'Material Id',
    'selector': 'material_id',
    'sortable': True
  },
  {
    'title': 'Formula',
    'selector': 'formula_pretty',
    'sortable': True,
    'formatType': 'FORMULA'
  },
  {
    'title': 'Volume',
    'selector': 'volume',
    'sortable': True,
    'formatType': 'SIGNIFICANT_FIGURES',
    "formatOptions": {
      "sigFigs": 5
    },
    'units': 'units'
  },
  {
    'title': 'Density',
    'selector': 'density',
    'sortable': True,
    'formatType': 'FIXED_DECIMAL',
    "formatOptions": {
      "decimals": 2
    },
  },
  {
    'title': 'Is Stable',
    'selector': 'is_stable',
    'sortable': True,
    'formatType': 'BOOLEAN'
  }
]

filterGroups = [
  {
    'name': 'Material',
    'collapsed': False,
    'filters': [
      {
        'name': 'ID',
        'id': 'material_ids',
        'type': 'TEXT_INPUT',
      },
      {
        'name': 'Elements',
        'id': 'elements',
        'tooltip': 'test',
        'type': 'MATERIALS_INPUT',
        'props': {
          'inputType': 'elements',
        }
      },
      {
        'name': 'Formula',
        'id': 'formula',
        'type': 'MATERIALS_INPUT',
        'props': {
          'inputType': 'formula',
        }
      }
    ]
  },
  {
    'name': 'Properties',
    'collapsed': False,
    'filters': [
      {
        'name': 'Volume',
        'id': 'volume',
        'type': 'SLIDER',
        'props': {
          'domain': [0, 200]
        }
      },
      {
        'name': 'Density',
        'id': 'density',
        'type': 'SLIDER',
        'props': {
          'domain': [0, 200]
        }
      }
    ]
  }
]

app.layout = html.Div(children=[
  html.Div([
    html.Span(
      'Hover me',
      id='trigger',
      **{
        'data-tip': True,
        'data-for': 'tooltip-1'
      }
    ),
    dash_mp_components.Tooltip(
      'test tooltip',
      id='tooltip-1'
    )
  ]),
  dash_mp_components.Markdown(
    """
    # Heading 1
    ## Heading 2
    
    This is a [link](https://github.com/materialsproject/api).
    
    ~~~python
    from mp_api.matproj import MPRester
    ~~~

    $$
    L = \\frac{1}{2} \\rho v^2 S C_L
    $$
    """,
    id='markdown'
  ),
  html.Div(id="selected-rows"),
  html.Div(id="clicked-filter-groups"),
  dash_mp_components.MaterialsInput(
    id="materials-input",
    showSubmitButton=True
  ),
  dash_mp_components.SearchUI(
    id="search-ui-demo",
    columns=columns,
    filterGroups=filterGroups,
    apiEndpoint="https://api.materialsproject.org/search/",
    autocompleteFormulaUrl="https://api.materialsproject.org/materials/formula_autocomplete/",
    apiKey=os.environ['MP_API_KEY'],
    resultLabel="material",
    searchBarTooltip="Test",
    hasSearchBar=False,
    selectableRows=True,
    conditionalRowStyles=[
      {
        'selector': 'is_stable',
        'value': True,
        'style': {
          'backgroundColor': '#DBE2FA',
          'boxShadow': '4px 0px 0px 0px #000 inset',
        },
      },
    ]
  )
])

@app.callback(
    Output('selected-rows', 'children'),
    Input('search-ui-demo', 'selectedRows')
)
def showNumberOfSelectedRows(selectedRows):
    if not selectedRows:
      raise PreventUpdate
    return f"Selected rows: {str(len(selectedRows))}"

@app.callback(
    Output('clicked-filter-groups', 'children'),
    Input('materials-input', 'submitButtonClicks')
)
def click_filter_group(n_clicks):
    print(n_clicks)
    return n_clicks

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)