import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.layout = html.Div([
  html.Div(className='navbar-menu', children=[
    html.Div(className='navbar-start', children=[
      dash_mp_components.NavbarDropdown(
        label='Test', 
        items=[
          {'text': 'One', 'href': '#one'},
          {'text': 'Two', 'href': '#two'},
          {'isDivider': True},
          {'text': 'Three', 'href': '#three'}
        ]
      )
    ])
  ])
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)