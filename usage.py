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
                                forceTableLayout='spaced',
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

@app.callback(

[
    Output(component_id = 'periodic-table', component_property= 'disabledElements'),
    Output(component_id = 'periodic-table', component_property= 'enabledElements')]
, [Input('RR', 'value')])
def display_output(value):
    return [], [value]

@app.callback(Output(component_id = 'periodic-table', component_property= 'forceTableLayout'), [Input('RR', 'value')])
def display_output(value):
    return 'compact'
    if value == 'K':
        return 'small'
    if value == 'Cl':
        return 'compact'
    if value == 'Na':
        return 'spaced'
    #return 'compact'

if __name__ == '__main__':
    app.run_server(debug=True)
