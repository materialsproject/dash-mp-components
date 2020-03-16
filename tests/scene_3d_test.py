import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash_mp_components.test_api import resize_browser_window
from dash.dependencies import Input, Output
import time

import pytest
import unittest
from .scene import scene, scene2, scene3
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
        self.app.layout = html.Div(
                children=[
                    dcc.Dropdown(
                        id='demo-dropdown',
                        options=[
                            {'label': 'Scene1', 'value': scene},
                            {'label': 'Scene2', 'value': scene2},
                            {'label': 'Scene3', 'value': 'cc'}
                        ],
                        value=scene
                    ),
                    html.Div(
                        style={'width': '500px', 'height': '500px'},
                        children=[
                            dash_mp_components.Simple3DScene(
                                id='3d',
                                settings={"renderer": 'svg'},
                                data=scene
                            )
                        ]
                    )
                ]
            )

        @self.app.callback(Output('3d', 'data'), [Input('demo-dropdown', 'value')])
        def display_output(value):
            print("chosen value", value)
            return value
        self.dash_duo.start_server(self.app)
        # wait for table to be there
        print('Test started', __name__)
        self.dash_duo.wait_for_element_by_css_selector('svg')
        self.dash_duo.percy_snapshot("spheres")

    def test_basic_rendering(self):
        assert self.dash_duo.find_element('.three-container') is not None
        check_path(self.dash_duo, 7)
    def test_color_rendering(self):
         # the order of the SVG element does not match the order of the spheres defined in
         # the JSON
        check_path_color(self.dash_duo.find_elements('path')[0], 'rgb(255, 170, 170)')
        check_path_color(self.dash_duo.find_elements('path')[1], 'rgb(17, 17, 17)')
        check_path_color(self.dash_duo.find_elements('path')[2], 'rgb(255, 170, 170)')
        check_path_color(self.dash_duo.find_elements('path')[3], 'rgb(0, 255, 221)')
        check_path_color(self.dash_duo.find_elements('path')[4], 'rgb(255, 170, 170)')
        check_path_color(self.dash_duo.find_elements('path')[5], 'rgb(17, 17, 17)')
        check_path_color(self.dash_duo.find_elements('path')[6], 'rgb(255, 170, 170)')
    def test_scene_switcher(self):
        # check if adding a new scene clean the old one
        dropdown = self.dash_duo.find_element('#demo-dropdown input')
        dropdown.send_keys('Scene2')
        dropdown.send_keys(Keys.ENTER)
        time.sleep(1)
        # but there are 2 visible spheres, try to understand the path :/
        check_path(self.dash_duo, 1)
        dropdown.send_keys('Scene1')
        dropdown.send_keys(Keys.ENTER)
        time.sleep(1)
        check_path(self.dash_duo, 7)


