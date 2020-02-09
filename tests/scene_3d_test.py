import dash_mp_components
import dash
import dash_html_components as html
from dash.testing.application_runners import import_app
from .utils import resize_browser_window

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

import time
import pytest
import unittest
from .scene import scene


def check_path(dash_duo, number_of_path):
    # check if we can pass an ID to SVG element
    assert(len(dash_duo.find_elements('path')) == number_of_path)

def check_path_color(path_element, color):
    # have an utility to transfer from rgba to hex and vice-versa
    assert(path_element.value_of_css_property('fill') == color)


class SVG3DScene(unittest.TestCase):
    @pytest.fixture(autouse=True)
    def __inject_fixtures(self, mocker, dash_duo):
        self.mocker = mocker
        self.dash_duo = dash_duo

    def setUp(self):
        self.app = dash.Dash(__name__)
        resize_browser_window(1920, 1080, self.dash_duo.driver)
        self.app.layout = html.Div(
            style={'width':'500px', 'height':'500px'},
            children=[
                dash_mp_components.Simple3DScene(
                id='3d',
                settings={"renderer": 'svg'},
                data=scene
            )])
        self.dash_duo.start_server(self.app)
        # wait for table to be there
        print('Test started', __name__)
        self.dash_duo.wait_for_element_by_css_selector('svg')
        self.dash_duo.percy_snapshot("spheres")

    def test_basic_rendering(self):
        assert(self.dash_duo.find_element('.three-container') is not None)
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

