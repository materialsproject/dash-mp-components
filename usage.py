import dash_mp_components
import dash
from dash.dependencies import Input, Output, State
from dash import dcc, html
from tests.scene import scene
import os

app = dash.Dash(__name__)

app.layout = html.Div(children=[
  dash_mp_components.Switch(
    id="switch",
    value=False
  ),
  dash_mp_components.RangeSlider(
      id="temperature",
      domain=[300, 1800],
      value=300,
      step=1,
      ticks=2
  ),
  html.Div(id='image-output')
])

# @app.callback(
#     Output('image-output', 'children'),
#     Input('scene', 'imageDataTimestamp')
# )
# def get_image_data(image_data_timestamp):
#     print(image_data_timestamp)
#     return image_data_timestamp

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)