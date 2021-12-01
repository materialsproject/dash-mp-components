import dash_mp_components
import dash
from dash import dcc, html

from dash_mp_components.test_api import resize_browser_window, hover_with_offset, SimpleScene, SceneSelectors
from dash.dependencies import Input, Output
import time

import pytest
import unittest
from .scene import scene
from selenium.webdriver.common.keys import Keys


def check_path(dash_duo, number_of_path):
    # check if we can pass an ID to SVG element
    assert len(dash_duo.find_elements('path')) == number_of_path


def check_path_color(path_element, color):
    # have an utility to transfer from rgba to hex and vice-versa
    assert path_element.value_of_css_property('fill') == color


class SVG3DScene(unittest.TestCase):
    @pytest.fixture(autouse=True)
    def __inject_fixtures(self, mocker, dash_duo):
        self.mocker = mocker
        self.dash_duo = dash_duo

    def setUp(self):
        self.app = dash.Dash(__name__)
        self.scene = SimpleScene(self.dash_duo, settings={'renderer': 'webgl'}, scene=scene)
        resize_browser_window(1920, 1080, self.dash_duo.driver)
        self.app.layout = html.Div(
                children=[
                    html.Div(id='test'),
                    html.Div(
                        style={'width': '500px', 'height': '500px'},
                        children=[
                            self.scene.render()
                        ]
                    )
                ]
            )

        @self.app.callback(Output('test', 'children'), [Input('3d', 'selectedObject')])
        def display_output(value):
            # do something a bit more complex
            return f'Type {value} color {value}'
        self.dash_duo.start_server(self.app)
        print('Test started', __name__)
        self.scene.wait_for_rendering()

    def test_tooltip(self):
        self.scene.hover_and_check_tooltip(250, 250, 'label3')
        self.scene.hover_and_check_tooltip(240, 230, 'label1')
        self.scene.hover_and_check_tooltip(270, 240, 'label2')



