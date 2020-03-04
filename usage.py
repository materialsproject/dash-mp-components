import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash(__name__)

app.layout = html.Div(children=[
    dash_mp_components.GraphComponent(graph={
        'nodes': [
            {'id': 0, 'title': 'Sn site (4 neighbors)', 'color': '#9a8eb9'},
            {'id': 1, 'title': 'Sn site (4 neighbors)', 'color': '#9a8eb9'},
            {'id': 2, 'title': 'Sn site (4 neighbors)', 'color': '#9a8eb9'},
            {'id': 3, 'title': 'Ce site (12 neighbors)', 'color': '#ffffc7'}
        ],
        'edges': [
            {
                'from': 0,
                'to': 3,
                'arrows': '',
                'length': 166.88637683827804,
                'title': '3.34 Å between sites',
                'id': '82870605-7f0c-4177-a438-63be2da70eda'
            },
            {
                'from': 0,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (1, 0, 0)',
                'id': '026e7ed0-3a85-4138-9b9e-f6156d99ee58'
            },
            {
                'from': 0,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (1, 0, 1)',
                'id': 'bf2562f5-9501-4d2a-9e5c-fefecfcaddf2'
            },
            {
                'from': 0,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (0, 0, 1)',
                'id': '0b290f2b-30cd-4fe2-b168-c61fba1a9515'
            },
            {
                'from': 1,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (0, 1, 0)',
                'id': '7b877631-1bbc-4558-a4a3-872b4dcb8661'
            },
            {
                'from': 1,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (0, 1, 1)',
                'id': '63ec8d00-bdfe-4058-93eb-3f7e87d1cfbb'
            },
            {
                'from': 1,
                'to': 3,
                'arrows': '',
                'length': 166.88637683827804,
                'title': '3.34 Å between sites',
                'id': '2b6a4f9c-e4e1-43fb-941a-941ca3d0a034'
            },
            {
                'from': 1,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (0, 0, 1)',
                'id': 'f735e7cf-b270-481f-ba4b-8f9603abbd8e'
            },
            {
                'from': 2,
                'to': 3,
                'arrows': 'to',
                'length': 166.88637683827804,
                'title': '3.34 Å to site at image vector (0, 1, 0)',
                'id': '5357da7c-4a88-4219-b5c4-b93eb712e8ed'
            },
        ]
    }),
    dash_mp_components.JsonView(id='json',
    name=False,
    src={'a': 12, 'b':13, 'c': 'd'}),
    dash_mp_components.CameraContext(
            children = [
                html.Div([
                 dash_mp_components.Simple3DScene(
                        id='3d-2',
                        axisView='NW',
                        sceneSize=250,
                        data={
                                 "name": "StructureMoleculeComponent",
                                 "contents": [{
                                   "name": "atoms",
                                   "contents": [{
                                     "positions": [[-2.13336842, -1.2940969500000001, -7.74158491], [0.8064071299999997, -1.3064432600000002, -2.8524384100000004], [2.1537217799999997, 1.30644326, 2.0367080899999994], [-0.8064071300000002, 1.30644326, 2.8524384099999995], [2.13336842, 1.2940969500000001, 7.74158491], [-2.15372178, -1.3064432600000002, -2.0367080900000003], [0.7860537699999997, -1.31878957, 2.8524384099999995], [-0.7860537700000001, 1.3187895699999999, -2.8524384100000004]],
                                     "clickable": True,
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
                 ),dash_mp_components.Simple3DScene(
                        id='3d-3',
                        sceneSize=400,
                        debug=True,
                        inletSize=150,
                        settings={'extractAxis': True},
                        inletPadding=0,
                        axisView='SW',
                        data={
                            "name": "StructureMoleculeComponent",
                            "contents": [
                            {
                                  'name': 'axes',
                                  'contents': [
                                    {
                                      'positionPairs': [
                                        [
                                          [-2.1, -2.1, -2.1],
                                          [-1.4, -1.4, -3.1]
                                        ]
                                      ],
                                      'color': 'red',
                                      'radius': 0.07, 
                                      'headLength': 0.24,
                                      'headWidth': 0.14,
                                      'type': 'arrows'
                                    },
                                    {
                                      'positionPairs': [
                                        [
                                          [-2.1, -2.1, -2.1],
                                          [-0.1, -2.5, -1.1]
                                        ]
                                      ],
                                      'color': 'green',
                                      'radius': 0.07,
                                      'headLength': 0.24,
                                      'headWidth': 0.14,
                                      'type': 'arrows'
                                    },
                                    {
                                      'positionPairs': [
                                        [
                                          [-2.1, -2.1, -2.1],
                                          [-1.1, -1.1, -1.1]
                                        ]
                                      ],
                                      'color': 'blue',
                                      'radius': 0.07, #// 0.37302772291498865) * 2,
                                      'headLength': 0.24,# // / 0.37302772291498865) * 2,
                                      'headWidth': 0.14, #// / 0.37302772291498865) * 2,
                                      'type': 'arrows'
                                    },
                                    {
                                      'positions': [[-2.1, -2.1, -2.1]],
                                      'color': 'black',
                                      'radius': 0.0175,
                                      'type': 'spheres',
                                    }
                                  ]
                                },

                            {
                                "name": "atoms",
                                "contents": [{
                                    "positions": [[-2.13336842, -1.2940969500000001, -7.74158491],
                                                  [0.8064071299999997, -1.3064432600000002, -2.8524384100000004],
                                                  [2.1537217799999997, 1.30644326, 2.0367080899999994],
                                                  [-0.8064071300000002, 1.30644326, 2.8524384099999995],
                                                  [2.13336842, 1.2940969500000001, 7.74158491],
                                                  [-2.15372178, -1.3064432600000002, -2.0367080900000003],
                                                  [0.7860537699999997, -1.31878957, 2.8524384099999995],
                                                  [-0.7860537700000001, 1.3187895699999999, -2.8524384100000004]],
                                    "clickable": True,
                                    "color": "#aa4400",
                                    "radius": [0.7],
                                    "type": "spheres",
                                }, {
                                    "positions": [
                                        [1.3132662690651387e-7, 0.000002162567968477802, -0.000004955452009625105]],
                                    "color": "#00ffdd",
                                    "radius": [1.2],
                                    "type": "spheres"
                                }],
                                "origin": [0, 0, 0]
                            }],
                            "origin": [-2.1, -2.1, -2.1]
                        }
                    ),
                ])
            ]),
    html.Div(id='selected-object'),
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

@app.callback(Output(component_id = 'selected-object', component_property= 'children'), [Input('3d-2', 'selectedObject')])
def display_selectedObject(value):
    print(value)
    return f'Type {value} color {value}'

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)
