import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
from tests.grid import grid
import functools
from dash.exceptions import PreventUpdate

#investigate why it does not work
app = dash.Dash(__name__)
app.layout = html.Div(children=[
    dash_mp_components.CameraContextProvider(children=[
        html.Div([
            dash_mp_components.CrystalToolkitScene(
                id='3d-2',
                axisView='NW',
                animation='none',
                settings={
                    'secondaryObjectView': True,
                    'staticScene': True
                },
                sceneSize=550,
                imageRequest={
                    "n_requests": 4,
                    "filename": "test",
                    "filetype": "png",
                },
                imageData="blarb",
                data={
                    "name":
                    "_ct_StructureMoleculeComponent_1",
                    "contents": [{
                        "name":
                        "atoms",
                        "contents": [{
                            "positions": [[
                                1.6081450794147842, 0.9284629773820368,
                                2.6153700106355755
                            ],
                                          [
                                              -1.9414784057759444e-8,
                                              1.8569259826179634,
                                              5.235351240635575
                                          ],
                                          [
                                              -1.9414784057759444e-8,
                                              1.8569259826179634,
                                              -0.004611219364424821
                                          ]],
                            "color":
                            "#9ee373",
                            "radius":
                            0.5,
                            "type":
                            "spheres",
                            "tooltip":
                            "heell",
                            "clickable":
                            True
                        }, {
                            "positions": [[
                                1.6081450794147842, 0.9284629773820368,
                                4.589578371864425
                            ],
                                          [
                                              -1.9414784057759444e-8,
                                              1.8569259826179634,
                                              1.9695971418644245
                                          ]],
                            "color":
                            "#b0b9e6",
                            "radius":
                            0.5,
                            "type":
                            "spheres",
                            "tooltip":
                            "heell2",
                            "clickable":
                            True
                        }],
                        "origin": [-0.80407253, -1.39269448, -2.61998123],
                        "visible":
                        True
                    }, {
                        "name":
                        "bonds",
                        "contents": [{
                            "positionPairs": [[[
                                1.6081450794147842, 0.9284629773820368,
                                2.6153700106355755
                            ], [0.8040725300000001, 1.39269448, 2.29248357625]
                                               ],
                                              [[
                                                  1.6081450794147842,
                                                  0.9284629773820368,
                                                  2.6153700106355755
                                              ],
                                               [
                                                   1.6081450794147842,
                                                   0.9284629773820368,
                                                   3.6024741912500002
                                               ]],
                                              [[
                                                  -1.9414784057759444e-8,
                                                  1.8569259826179634,
                                                  5.235351240635575
                                              ],
                                               [
                                                   0.8040725300000001,
                                                   1.39269448, 4.91246480625
                                               ]],
                                              [[
                                                  -1.9414784057759444e-8,
                                                  1.8569259826179634,
                                                  -0.004611219364424821
                                              ],
                                               [
                                                   -1.9414784057759444e-8,
                                                   1.8569259826179634,
                                                   0.9824929612499999
                                               ]]],
                            "color":
                            "#9ee373",
                            "radius":
                            0.1,
                            "radiusTop":
                            0.03,
                            "radiusBottom":
                            0.4,
                            "type":
                            "cylinders",
                            "tooltip":
                            "heell4",
                            "clickable":
                            False
                        }, {
                            "positionPairs": [[[
                                1.6081450794147842, 0.9284629773820368,
                                4.589578371864425
                            ], [0.8040725300000001, 1.39269448, 4.91246480625]
                                               ],
                                              [[
                                                  1.6081450794147842,
                                                  0.9284629773820368,
                                                  4.589578371864425
                                              ],
                                               [
                                                   1.6081450794147842,
                                                   0.9284629773820368,
                                                   3.6024741912500002
                                               ]],
                                              [[
                                                  -1.9414784057759444e-8,
                                                  1.8569259826179634,
                                                  1.9695971418644245
                                              ],
                                               [
                                                   0.8040725300000001,
                                                   1.39269448, 2.29248357625
                                               ]],
                                              [[
                                                  -1.9414784057759444e-8,
                                                  1.8569259826179634,
                                                  1.9695971418644245
                                              ],
                                               [
                                                   -1.9414784057759444e-8,
                                                   1.8569259826179634,
                                                   0.9824929612499999
                                               ]]],
                            "color":
                            "#b0b9e6",
                            "radius":
                            0.1,
                            "radiusTop": [0.13, 0.01, 0.05, 0.1, 0.25],
                            "radiusBottom": [0.4, 0.3, 0.25, 0.5, 0.01],
                            "type":
                            "cylinders",
                            "clickable":
                            False
                        }],
                        "origin": [-0.80407253, -1.39269448, -2.61998123],
                        "visible":
                        True
                    }, {
                        "name":
                        "polyhedra",
                        "contents": [],
                        "origin": [-0.80407253, -1.39269448, -2.61998123],
                        "visible":
                        True
                    }, {
                        "name":
                        "unit_cell",
                        "contents": [{
                            "name":
                            "a=3.21629013, b=3.2162901337807175, c=5.23996246, alpha=90.0, beta=90.0, gamma=120.00000006396569",
                            "contents": [{
                                "positions":
                                [[0, 0, 0], [3.21629013, 0, 0], [0, 0, 0],
                                 [-1.60814507, 2.78538896, 0], [0, 0, 0],
                                 [0, 0, 5.23996246], [3.21629013, 0, 0],
                                 [1.60814506, 2.78538896, 0], [
                                     3.21629013, 0, 0
                                 ], [3.21629013, 0, 5.23996246],
                                 [-1.60814507, 2.78538896, 0],
                                 [1.60814506, 2.78538896, 0],
                                 [-1.60814507, 2.78538896, 0],
                                 [-1.60814507, 2.78538896, 5.23996246],
                                 [0, 0, 5.23996246], [
                                     3.21629013, 0, 5.23996246
                                 ], [0, 0, 5.23996246],
                                 [-1.60814507, 2.78538896, 5.23996246],
                                 [1.60814506, 2.78538896, 0],
                                 [1.60814506, 2.78538896, 5.23996246],
                                 [3.21629013, 0, 5.23996246],
                                 [1.60814506, 2.78538896, 5.23996246],
                                 [-1.60814507, 2.78538896, 5.23996246],
                                 [1.60814506, 2.78538896, 5.23996246]],
                                "type":
                                "lines",
                                "clickable":
                                False
                            }],
                            "visible":
                            True
                        }],
                        "origin": [-0.80407253, -1.39269448, -2.61998123],
                        "visible":
                        True
                    }, {
                        "name":
                        "axes",
                        "contents": [{
                            "positionPairs": [[[
                                -0.80407253, -1.39269448, -2.61998123
                            ], [0.19592747, -1.39269448, -2.61998123]]],
                            "color":
                            "red",
                            "radius":
                            0.07,
                            "headLength":
                            0.24,
                            "headWidth":
                            0.14,
                            "type":
                            "arrows",
                            "clickable":
                            False
                        }, {
                            "positionPairs":
                            [[[-0.80407253, -1.39269448, -2.61998123],
                              [
                                  -1.304072530966841, -0.5266690767737673,
                                  -2.61998123
                              ]]],
                            "color":
                            "green",
                            "radius":
                            0.07,
                            "headLength":
                            0.24,
                            "headWidth":
                            0.14,
                            "type":
                            "arrows",
                            "clickable":
                            False
                        }, {
                            "positionPairs": [[[
                                -0.80407253, -1.39269448, -2.61998123
                            ], [-0.80407253, -1.39269448, -1.61998123]]],
                            "color":
                            "blue",
                            "radius":
                            0.07,
                            "headLength":
                            0.24,
                            "headWidth":
                            0.14,
                            "type":
                            "arrows",
                            "clickable":
                            False
                        }, {
                            "positions":
                            [[-0.80407253, -1.39269448, -2.61998123]],
                            "color":
                            "white",
                            "radius":
                            0.0175,
                            "type":
                            "spheres",
                            "clickable":
                            False
                        }],
                        "visible":
                        False
                    }],
                    "origin": [-0.80407253, -1.39269448, -2.61998123],
                    "visible":
                    True
                }),
            dash_mp_components.CrystalToolkitScene(
                id='3d-3',
                sceneSize=800,
                debug=True,
                inletSize=150,
                settings={'extractAxis': True},
                inletPadding=0,
                axisView='SW',
                data={
                    "name":
                    "StructureMoleculeComponent",
                    "contents": [
                        {
                            'name':
                            'axes',
                            'contents': [
                                {
                                    'positionPairs': [[[-2.1, -2.1, -2.1],
                                                       [-1.4, -1.4, -3.1]]],
                                    'color':
                                    'red',
                                    'radius':
                                    0.07,
                                    'headLength':
                                    0.24,
                                    'headWidth':
                                    0.14,
                                    'type':
                                    'arrows'
                                },
                                {
                                    'positionPairs': [[[-2.1, -2.1, -2.1],
                                                       [-0.1, -2.5, -1.1]]],
                                    'color':
                                    'green',
                                    'radius':
                                    0.07,
                                    'headLength':
                                    0.24,
                                    'headWidth':
                                    0.14,
                                    'type':
                                    'arrows'
                                },
                                {
                                    'positionPairs': [[[-2.1, -2.1, -2.1],
                                                       [-1.1, -1.1, -1.1]]],
                                    'color':
                                    'blue',
                                    'radius':
                                    0.07,  # // 0.37302772291498865) * 2,
                                    'headLength':
                                    0.24,  # // / 0.37302772291498865) * 2,
                                    'headWidth':
                                    0.14,  # // / 0.37302772291498865) * 2,
                                    'type':
                                    'arrows'
                                },
                                {
                                    'positions': [[-2.1, -2.1, -2.1]],
                                    'color': 'black',
                                    'radius': 0.01,
                                    'type': 'spheres',
                                }
                            ]
                        },
                        {
                            "name":
                            "atoms",
                            "contents": [{
                                "positions": [
                                    [
                                        -2.13336842, -1.2940969500000001,
                                        -7.74158491
                                    ],
                                    [
                                        0.8064071299999997,
                                        -1.3064432600000002,
                                        -2.8524384100000004
                                    ],
                                    [
                                        2.1537217799999997, 1.30644326,
                                        2.0367080899999994
                                    ],
                                    [
                                        -0.8064071300000002, 1.30644326,
                                        2.8524384099999995
                                    ],
                                    [
                                        2.13336842, 1.2940969500000001,
                                        7.74158491
                                    ],
                                    [
                                        -2.15372178, -1.3064432600000002,
                                        -2.0367080900000003
                                    ],
                                    [
                                        0.7860537699999997, -1.31878957,
                                        2.8524384099999995
                                    ],
                                    [
                                        -0.7860537700000001,
                                        1.3187895699999999, -2.8524384100000004
                                    ]
                                ],
                                "clickable":
                                True,
                                "color":
                                "#aa4400",
                                "radius": [0.7],
                                "type":
                                "spheres",
                            }, {
                                "positions": [[
                                    1.3132662690651387e-7,
                                    0.000002162567968477802,
                                    -0.000004955452009625105
                                ]],
                                "color":
                                "#00ffdd",
                                "radius": [0.5],
                                "type":
                                "spheres"
                            }],
                            "origin": [0, 0, 0]
                        },
                        {
                            "name":
                            'unit_cell',
                            "contents": [{
                                "name":
                                'a=3.21629013, b=3.2162901337807175, c=5.23996246, alpha=90.0, beta=90.0, gamma=120.00000006396569',
                                "contents": [{
                                    "positions":
                                    [[0, 0, 0], [3.21629013, 0, 0], [0, 0, 0],
                                     [-1.60814507, 2.78538896, 0], [0, 0, 0],
                                     [0, 0, 5.23996246], [3.21629013, 0, 0],
                                     [1.60814506, 2.78538896, 0],
                                     [3.21629013, 0, 0],
                                     [3.21629013, 0, 5.23996246],
                                     [-1.60814507, 2.78538896, 0],
                                     [1.60814506, 2.78538896, 0],
                                     [-1.60814507, 2.78538896, 0],
                                     [-1.60814507, 2.78538896, 5.23996246],
                                     [0, 0, 5.23996246],
                                     [3.21629013, 0, 5.23996246],
                                     [0, 0, 5.23996246],
                                     [-1.60814507, 2.78538896, 5.23996246],
                                     [1.60814506, 2.78538896, 0],
                                     [1.60814506, 2.78538896, 5.23996246],
                                     [3.21629013, 0, 5.23996246],
                                     [1.60814506, 2.78538896, 5.23996246],
                                     [-1.60814507, 2.78538896, 5.23996246],
                                     [1.60814506, 2.78538896, 5.23996246]],
                                    "type":
                                    'lines',
                                    "clickable":
                                    False
                                }],
                                "visible":
                                True
                            }],
                            "origin": [-0.80407253, -1.39269448, -2.61998123],
                            "visible":
                            True
                        },
                    ],
                    "origin": [-2.1, -2.1, -2.1]
                }),
        ])
    ]),
    html.Div(id='selected-object'),
    html.Div(id='image-data-output'),
])

@app.callback(
    Output('image-data-output', 'children'),
    [Input('3d-2', 'imageData')]
)
def update_graph(image_data):
    print(len(image_data))
    return len(image_data)

# use True to load a dev build of react
if __name__ == '__main__':
    app.run_server(debug=True)
