import dash_mp_components as mpc
import dash
from dash.dependencies import Input, Output, State
from dash import dcc, html
from tests.scene import scene
import os

app = dash.Dash(__name__, suppress_callback_exceptions=True)

app.layout = html.Div(
  [
    html.Ul(
      [
        html.Li(mpc.Link("Home", href="/")),
        html.Li(mpc.Link("Inputs", href="/inputs")),
      ]
    ),
    html.Div(id="page-content"),
    dcc.Location(id="mp-url", refresh=False),
  ]  
)

@app.callback(
    Output('page-content', 'children'),
    Input('mp-url', 'pathname')
)
def get_page_content(path):
  if path == '/inputs':
    return html.Div(
      [
        mpc.Switch(
          id="switch",
          value=False
        ),
        mpc.RangeSlider(
            id="one",
            domain=[-1, 2],
            value=1,
            step=0.1,
            isLogScale=True
        ),
        mpc.DualRangeSlider(
            id="two",
            domain=[-97, 88],
            valueMin=1,
            valueMax=5,
            step=0.1
        ),
        mpc.DualRangeSlider(
            id="three",
            domain=[-3, 2],
            valueMin=1,
            valueMax=2,
            step=0.001,
            isLogScale=True
        ),
        html.Div(id='slider-output'),
      ]
    )
  else:
    return html.Div("Select a page")

@app.callback(
    Output('slider-output', 'children'),
    Input('one', 'value')
)
def get_slider_value(value):
    return value

# use True to load a dev build of react
if __name__ == '__main__':
    app.run(debug=True, port=8051)