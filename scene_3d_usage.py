import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash_mp_components.test_api import resize_browser_window, SimpleScene

scene = SimpleScene(self.dash_duo,
                      scene,
                      settings={'renderer': 'svg'})
self.app = dash.Dash(__name__)
resize_browser_window(1920, 1080, self.dash_duo.driver)
nameToVisibility = {'atoms': False}
self.app.layout = html.Div(children=[
    html.Button('....click....', id='toggler-button'),
    html.Button('....click....', id='toggler-size-button'),
    html.Button('....download.', id='download-button'),
    dcc.Dropdown(id='demo-dropdown',
                  options=[{
                      'label': 'Scene1',
                      'value': scene
                  }, {
                      'label': 'Scene2',
                      'value': scene2
                  }, {
                      'label': 'Scene3',
                      'value': scene3
                  }, {
                      'label': 'Scene4',
                      'value': 'sdf'
                  }],
                  value=scene),
    html.Div(style={
        'width': '600px',
        'height': '600px'
    },
              children=[self.scene.render(self.sceneSize)])
])

@self.app.callback(Output('3d', 'downloadRequest'),
                    [Input('download-button', 'n_clicks')])
def download(value):
    value = {
        'fileType': 'png',
        'filename': 'test',
        'n_requests': value
    }
    print("chosen value", value)
    return value

@self.app.callback(Output('3d', 'toggleVisibility'),
                    [Input('toggler-button', 'n_clicks')])
def toggle_atoms(value):
    nameToVisibility['atoms'] = not nameToVisibility['atoms']
    return nameToVisibility

@self.app.callback(Output('3d', 'sceneSize'),
                    [Input('toggler-size-button', 'n_clicks')])
def toggle_size(value):
    return self.sceneSize

@self.app.callback(Output('3d', 'data'),
                    [Input('demo-dropdown', 'value')])
def display_output(value):
    print("chosen value", value)
    return value