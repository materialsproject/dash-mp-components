import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

print("Hello World 2")
app.layout = html.Div(children=[
    dash_mp_components.JsonView(id='json',
    name=False,
    src={'a': 12, 'b':13, 'c': 'd'}),
    dash_mp_components.Simple3DScene(
        id='3d',
        settings={"renderer": "svg"},
        data={
                 "name": "StructureMoleculeComponent",
                 "contents": [{
                   "name": "atoms",
                   "contents": [{
                     "positions": [[-2.13336842, -1.2940969500000001, -7.74158491], [0.8064071299999997, -1.3064432600000002, -2.8524384100000004], [2.1537217799999997, 1.30644326, 2.0367080899999994], [-0.8064071300000002, 1.30644326, 2.8524384099999995], [2.13336842, 1.2940969500000001, 7.74158491], [-2.15372178, -1.3064432600000002, -2.0367080900000003], [0.7860537699999997, -1.31878957, 2.8524384099999995], [-0.7860537700000001, 1.3187895699999999, -2.8524384100000004]],
                     "color": "#ffaaaa",
                     "radius": [0.5],
                     "type": "spheres",
                   }, {
                     "positions": [[1.1352943356867837, 0.688667561081374, 4.1197692008924705], [-1.1352941382531998, -0.6886632575514795, -4.119769120104752]],
                     "color": "#111111",
                     "radius": [0.5],
                     "type": "spheres",
                   }, {
                     "positions": [[1.3132662690651387e-7, 0.000002162567968477802, -0.000004955452009625105]],
                     "color": "#00ffdd",
                     "radius": [0.5],
                     "type": "spheres"
                   }],
                   "origin": [0, 0, 0]
                 }],
                 "origin": [2.13336842, 1.2940969500000001, 7.74158491]
               }
    ),
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
                            dash_mp_components.PeriodicTableInput(
                                                        id='periodic-table-b',
                                                        maxElementSelectable=3,
                                                        forceTableLayout='map',
                                                        disabledElements=[],
                                                        hiddenElements=[],
                                                        enabledElements=[]
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

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)
