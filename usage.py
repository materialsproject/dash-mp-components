import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_mp_components.PeriodicTableInput(
        id='input',
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'clicked')])
def display_output(value):
    return 'Clicked Elements {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
