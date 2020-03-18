import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash_mp_components.test_api import resize_browser_window, click_with_offset, SimpleScene
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
        resize_browser_window(1920, 1080, self.dash_duo.driver)
        self.scene = SimpleScene(self.dash_duo,
                                 scene=scene,
                                 settings={'isMultiSelectionEnabled': True, 'renderer': 'webgl'})
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
        # wait for table to be there
        print('Test started', __name__)
        self.scene.wait_for_rendering()

    def test_multiple_selecting(self):
        # center sphere, we expect some text
        self.scene.click_on_coordinate(250, 250)
        assert len(self.dash_duo.find_element('#test').text) == 384
        # click on the black sphere without shift
        self.scene.click_on_coordinate(270, 240)
        # click on the center sphere with shift
        assert len(self.dash_duo.find_element('#test').text) == 488
        self.scene.click_on_coordinate(use_shift=True)
        # click somewhere, nothing is selected
        assert self.dash_duo.find_element('#test').text == 'Type [] color []'






