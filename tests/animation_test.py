import dash_mp_components
import dash
from dash import dcc, html

from dash_mp_components.test_api import resize_browser_window, click_with_offset, SimpleScene
from dash.dependencies import Input, Output
import time

import pytest
import unittest
from .scene import animatedScene as scene
from selenium.webdriver.common.keys import Keys


class SVG3DScene(unittest.TestCase):
    @pytest.fixture(autouse=True)
    def __inject_fixtures(self, mocker, dash_duo):
        self.mocker = mocker
        self.dash_duo = dash_duo

    def setUp(self):
        self.app = dash.Dash(__name__)
        self.scene = SimpleScene(self.dash_duo,
                                 animation='play',
                                 scene=scene,
                                 settings={
                                     'staticScene': False,
                                     'renderer': 'svg'
                                 })
        resize_browser_window(1920, 1080, self.dash_duo.driver)
        self.app.layout = html.Div(children=[
            html.Div(id='test'),
            html.Div(style={
                'width': '500px',
                'height': '500px'
            },
                     children=[self.scene.render(500)])
        ])
        self.dash_duo.start_server(self.app)
        # wait for table to be there
        print('Test started', __name__)

    # Note(chab) there is a bug somewhere, if the assertion fails, the test will not fail
    # immediatly, but timeout
    def test_animation(self):
        # quite miserable, but it's a proof that it works
        path = self.dash_duo.find_elements('path')[0].get_attribute('d')
        time.sleep(1)
        path2 = self.dash_duo.find_elements('path')[0].get_attribute('d')
        assert path != path2
