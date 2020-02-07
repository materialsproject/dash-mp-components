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


def check_circles(dash_duo, number_of_circles):
    # check if we can pass an ID to SVG element
    assert(len(dash_duo.find_elements('path')) == number_of_circles)


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
        check_circles(self.dash_duo, 7)
