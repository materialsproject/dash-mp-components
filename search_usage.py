import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
from tests.grid import grid
import functools
from dash.exceptions import PreventUpdate
from pymatgen import MPRester

app = dash.Dash(__name__)
app.layout = html.Div(children=[
    dash_mp_components.Search(
        id='test3', allDefinitions=grid, initCards=['has_properties'])
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)
