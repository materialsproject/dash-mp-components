import dash_mp_components
import dash
from dash import dcc, html


app = dash.Dash(__name__)

app.layout = html.Div([
  html.Div(className='navbar-menu', children=[
    html.Div(className='navbar-start', children=[
      dash_mp_components.NavbarDropdown(
        html.H2("Test"),
        isRight=True,
        items=[
          {'text': 'One', 'href': '/one'},
          {'text': 'Two', 'href': '#two'},
          {'isDivider': True},
          {'text': 'Three', 'href': 'https://materialsproject.org', 'openInNewTab': True}
        ]
      )
    ])
  ])
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)