import dash
from dash import dcc, html
import dash_mp_components

"""
Tests the NavbarDropdown component
"""
def test_navbar_dropdown(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      html.Div(className='navbar-menu', children=[
        html.Div(className='navbar-start', children=[
          dash_mp_components.NavbarDropdown(
            html.H2("Test"), 
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
    dash_duo.start_server(app)
    assert dash_duo.find_element('h2')
    assert len(dash_duo.find_elements('.navbar-dropdown .navbar-item')) == 3