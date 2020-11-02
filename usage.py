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
    'format': 'FORMULA'
  },
  {
    'name': 'Volume',
    'selector': 'volume',
    'format': 'FIXED_DECIMAL',
    'formatArg': 3
  },
  {
    'name': 'Density',
    'selector': 'density',
    'format': 'SIGNIFICANT_FIGURES',
    'formatArg': 4
  },
  {
    'name': 'Sites',
    'selector': 'nsites'
  },
  {
    'name': 'Energy Above Hull',
    'selector': 'e_above_hull',
    'format': 'SIGNIFICANT_FIGURES',
    'formatArg': 4
  },
  {
    'name': 'Formation Energy',
    'selector': 'formation_energy_per_atom',
    'format': 'SIGNIFICANT_FIGURES',
    'formatArg': 4
  },
  {
    'name': 'Is Stable',
    'selector': 'is_stable',
    'format': 'BOOLEAN',
    'formatArg': ['yes', 'no']
  },
  {
    'name': 'Spacegroup Symbol',
    'selector': 'symmetry.symbol'
  },
  {
    'name': 'Spacegroup Number',
    'selector': 'symmetry.number'
  },
  {
    'name': 'Crystal System',
    'selector': 'symmetry.crystal_system'
  }
]

filterGroups = [
  {
    'name': 'Material',
    'collapsed': False,
    'filters': [
      {
        'name': 'ID',
        'id': 'task_id',
        'type': 'TEXT_INPUT'
      },
      {
        'name': 'Required Elements',
        'id': 'elements',
        'type': 'MATERIALS_INPUT',
        'props': {
          'field': 'elements'
        }
      },
      {
        'name': 'Formula',
        'id': 'formula',
        'type': 'MATERIALS_INPUT',
        'props': {
          'field': 'formula'
        }
      }
    ]
  },
  {
    'name': 'Basic Properties',
    'collapsed': True,
    'filters': [
      {
        'name': 'Volume',
        'id': 'volume',
        'type': 'SLIDER',
        'props': {
          'domain': [5, 19407],
          'step': 1
        }
      },
      {
        'name': 'Density',
        'id': 'density',
        'type': 'SLIDER',
        'props': {
          'domain': [0, 25],
          'step': 0.1
        }
      },
      {
        'name': 'Number of Sites',
        'id': 'nsites',
        'type': 'SLIDER',
        'props': {
          'domain': [1, 360],
          'step': 1
        }
      }
    ]
  },
  {
    'name': 'Thermodynamics',
    'collapsed': True,
    'filters': [
      {
        'name': 'Energy Above Hull',
        'id': 'e_above_hull',
        'type': 'SLIDER',
        'props': {
          'domain': [0, 7],
          'step': 0.1
        }
      },
      {
        'name': 'Formation Energy',
        'id': 'formation_energy_per_atom',
        'type': 'SLIDER',
        'props': {
          'domain': [-10, 6],
          'step': 0.1
        }
      },
      {
        'name': 'Stability',
        'id': 'is_stable',
        'type': 'THREE_STATE_BOOLEAN_SELECT',
        'props': {
          'options': [
            {
              'label': 'Is stable',
              'value': True
            },
            {
              'label': 'Is not stable',
              'value': False
            }
          ]
        }
      }
    ]
  },
  {
    'name': 'Symmetry',
    'collapsed': True,
    'filters': [
      {
        'name': 'Spacegroup Symbol',
        'id': 'spacegroup_symbol',
        'type': 'SELECT_SPACEGROUP_SYMBOL'
      },
      {
        'name': 'Spacegroup Number',
        'id': 'spacegroup_number',
        'type': 'SELECT_SPACEGROUP_NUMBER'
      },
      {
        'name': 'Crystal System',
        'id': 'crystal_system',
        'type': 'SELECT_CRYSTAL_SYSTEM'
      }
    ]
  },
  {
    'name': 'Electronic Structure',
    'collapsed': True,
    'filters': [  
      {
        'name': 'Band Gap',
        'id': 'sc_band_gap',
        'type': 'SLIDER',
        'props': {
          'domain': [0, 100],
          'step': 1
        }
      },
      {
        'name': 'Direct Band Gap',
        'id': 'sc_direct',
        'type': 'THREE_STATE_BOOLEAN_SELECT',
        'props': {
          'options': [
            {
              'label': 'Is direct',
              'value': True
            },
            {
              'label': 'Is not direct',
              'value': False
            }
          ]
        }
      }
    ]
  }
];

app.layout = html.Div(children=[
  dash_mp_components.SearchUI(
    columns=columns,
    filterGroups=filterGroups,
    baseURL="https://api.materialsproject.org/search/",
    apiKey=os.environ['MP_API_KEY']

  )
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)