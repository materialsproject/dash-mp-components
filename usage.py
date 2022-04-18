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
      id="one",
      domain=[-1, 2],
      value=1,
      step=0.1,
      isLogScale=True
  ),
  dash_mp_components.DualRangeSlider(
      id="two",
      domain=[-97, 88],
      valueMin=1,
      valueMax=5,
      step=0.1
  ),
  dash_mp_components.DualRangeSlider(
      id="three",
      domain=[-3, 2],
      valueMin=1,
      valueMax=2,
      step=0.001,
      isLogScale=True
  ),
  html.Div(id='slider-output')
])

@app.callback(
    Output('slider-output', 'children'),
    Input('one', 'value')
)
def get_slider_value(value):
    return value

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True, port=8051)