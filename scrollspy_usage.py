import dash_mp_components
import dash
from dash import dcc, html


app = dash.Dash(__name__)

app.layout = html.Div(className='scrollspy', children=[
  dash_mp_components.Scrollspy(
    menuGroups=[{'label': 'Table of Contents', 'items': [{'label': 'One', 'targetId': 'one'}, {'label': 'Two', 'targetId': 'two'}, {'label': 'Three', 'targetId': 'three'}]}],
    menuClassName="menu",
    menuItemContainerClassName="menu-list",
    activeClassName="is-active",
    offset=0
  ),
  html.Div(className='content', children=[
    html.Div(id='one', children=[
        html.H1('One'),
        html.P('lorem ipsum'),
    ]),
    html.Div(id='two', children=[
        html.H1('Two'),
        html.P('lorem ipsum'),
    ]),
    html.Div(id='three', children=[
        html.H1('Three'),
        html.P('lorem ipsum'),
    ]),
    dash_mp_components.Select(
      options=[
          {'label': 'One', 'value': 1},
          {'label': 'Two', 'value': 2}
      ],
      value=2,
      isClearable=True,
      arbitraryProps={'closeMenuOnSelect': False}
    )
  ])
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)