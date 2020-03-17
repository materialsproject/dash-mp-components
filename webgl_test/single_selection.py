import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash_mp_components.test_api import resize_browser_window, click_with_offset
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
        self.app.layout = html.Div(
                children=[
                    html.Div(id='test'),
                    html.Div(
                        style={'width': '500px', 'height': '500px'},
                        children=[
                            dash_mp_components.Simple3DScene(
                                id='3d',
                                settings={},
                                data=scene
                            )
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
        self.dash_duo.wait_for_element_by_css_selector('canvas')
        # click in the middle of the screen
        # click somewhere else

    def test_basic_selecting(self):
        el = self.dash_duo.find_element('.three-container')
        # center sphere, we expect some text
        click_with_offset(self.dash_duo.driver, el, 250, 250)
        assert len(self.dash_duo.find_element('#test').text) == 342
        # no selection
        click_with_offset(self.dash_duo.driver, el, 1, 1)
        # center sphere, we expect no elements
        assert self.dash_duo.find_element('#test').text == 'Type [] color []'
        click_with_offset(self.dash_duo.driver, el, 240, 230)
        # 6 sheres, we expect a lot of text
        assert len(self.dash_duo.find_element('#test').text) == 1084
        # 4 edge spheres

