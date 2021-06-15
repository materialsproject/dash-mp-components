import os

import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.exceptions import PreventUpdate
from dash.dependencies import Input, Output, State

app = dash.Dash(__name__)

columns = [
  {
    'name': 'Material Id',
    'selector': 'material_id',
    'sortable': True
  },
  {
    'name': 'Formula',
    'selector': 'formula_pretty',
    'sortable': True,
    'format': 'FORMULA'
  },
  {
    'name': 'Volume',
    'selector': 'volume',
    'sortable': True,
    'format': 'SIGNIFICANT_FIGURES',
    "formatOptions": {
      "sigFigs": 5
    },
    'units': 'units'
  },
  {
    'name': 'Density',
    'selector': 'density',
    'sortable': True,
    'format': 'FIXED_DECIMAL',
    "formatOptions": {
      "decimals": 2
    },
  },
  {
    'name': 'Is Stable',
    'selector': 'is_stable',
    'sortable': True,
    'format': 'BOOLEAN'
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
  html.Div(id="selected-rows"),
  html.Div(
    dash_mp_components.GlobalSearchBar(
        redirectRoute="/materials",
        hidePeriodicTable=False,
        autocompleteFormulaUrl="https://api.materialsproject.org/materials/formula_autocomplete/",
        tooltip="Type in a comma-separated list of element symbols (e.g. Ga, N), a chemical formula (e.g. C3N), or a material id (e.g. mp-10152). You can also click elements on the periodic table to add them to your search."
    ),
    className="mp-home"
  ),
  dash_mp_components.SearchUI(
    id="search-ui-demo",
    columns=columns,
    filterGroups=filterGroups,
    baseURL="https://api.materialsproject.org/search/",
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

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)