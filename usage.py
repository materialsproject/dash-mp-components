import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
import os

app = dash.Dash(__name__)

columns = [
  {
    'name': 'Material Id',
    'selector': 'task_id',
    'format': 'LINK',
    'formatArg': '/materials/'
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
    'formatArg': 5
  },
  {
    'name': 'Density',
    'selector': 'density',
    'sortable': True,
    'format': 'FIXED_DECIMAL',
    'formatArg': 2
  }
]

filterGroups = [
  {
    'name': 'Material',
    'collapsed': False,
    'filters': [
      {
        'name': 'ID',
        'id': 'task_ids',
        'type': 'TEXT_INPUT',
      },
      {
        'name': 'Elements',
        'id': 'elements',
        'type': 'MATERIALS_INPUT',
        'props': {
          'field': 'elements',
        }
      },
      {
        'name': 'Formula',
        'id': 'formula',
        'type': 'MATERIALS_INPUT',
        'props': {
          'field': 'formula',
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
  dash_mp_components.SearchUI(
    columns=columns,
    filterGroups=filterGroups,
    baseURL="https://api.materialsproject.org/materials/",
    apiKey=os.environ['MP_API_KEY']

  )
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)