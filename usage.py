import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

print("Hello World 2")
app.layout = html.Div([
    dcc.Dropdown(
                    id='RR',
                    options=[
                        {'label': 'Na', 'value': 'Na'},
                        {'label': 'Cl', 'value': 'Cl'},
                        {'label': 'SF', 'value': 'K'}
                    ],
                    value='MTL'
                    ),
    dash_mp_components.PeriodicContext(
        children = [
            html.Div([
                   dash_mp_components.PeriodicFilter(
                                 id='periodic-filter',
                            ),
                            dash_mp_components.PeriodicTableInput(
                                id='periodic-table',
                                maxElementSelectable=3,
                                disabledElements=['Na', 'Cl'],
                                hiddenElements=['Fe', 'Dy'],
                                enabledElements=['H', 'O']
                            ),
                            html.P(''),
                            dash_mp_components.PeriodicElement(
                                element='Na',
                                size=60,
                                id='periodic-element'
                            ),
            ]),

        ]
    ),
    html.Div(id='component')
])

@app.callback(Output(component_id = 'periodic-table', component_property= 'disabledElements'), [Input('RR', 'value')])
def display_output(value):
    print("Hello World 2", value)
    return [value]


if __name__ == '__main__':
    app.run_server(debug=True)
