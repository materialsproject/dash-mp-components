import dash_mp_components
import dash
from dash import dcc, html
from tests.scene import scene
import os

app = dash.Dash(__name__)

app.layout = html.Div(children=[
  dash_mp_components.CrystalToolkitScene(
    [
      html.Div('settings'),
      html.Div('legend')
    ],
    id="scene",
    settings={'renderer': 'svg', 'defaultZoom': 0.8},
    data=scene,
    sceneSize=500
  )
])

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)