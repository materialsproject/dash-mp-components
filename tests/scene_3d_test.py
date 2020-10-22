import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash_mp_components.test_api import resize_browser_window, SimpleScene
from dash.dependencies import Input, Output
import time

import pytest
import unittest
from .scene import scene, scene2, scene3
from selenium.webdriver.common.keys import Keys
from pathlib import Path


class SVG3DScene(unittest.TestCase):

    sceneSize = 500

    @pytest.fixture(autouse=True)
    def __inject_fixtures(self, mocker, dash_duo):
        self.mocker = mocker
        self.dash_duo = dash_duo

    # Investigate if we can setup the class somehow there, that way
    # we can choose if we want one browser for each test, or one browser for the whole suite
    # def __init__(self, *args, **kwargs):
    #    super(SVG3DScene, self).__init__(*args, **kwargs)

    def setUp(self):
        self.scene = SimpleScene(self.dash_duo,
                                 scene,
                                 settings={'renderer': 'svg', 'defaultZoom': 0.8})
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

        self.dash_duo.start_server(self.app)
        # wait for table to be there
        print('Test started', __name__)
        self.scene.wait_for_rendering()
        self.dash_duo.percy_snapshot("spheres")

    def test_download(self):
        # we should push that to a test configuration step
        home = str(Path.home())
        params = {'behavior': 'allow', 'downloadPath': home}
        self.dash_duo.driver.execute_cdp_cmd('Page.setDownloadBehavior',
                                             params)
        resize_browser_window(500, 500, self.dash_duo.driver)
        self.dash_duo.find_element('#download-button').click()
        time.sleep(5)  # give time for downloading the file
        assert Path(home + '/test.png').is_file() is True

    def test_visibility(self):
        assert self.scene.get_container() is not None
        self.scene.check_path(7)
        self.dash_duo.find_element('#toggler-button').click()
        #use waitfor instead
        time.sleep(1)
        self.scene.check_path(0)

    def test_basic_rendering(self):
        assert self.scene.get_container() is not None
        self.scene.check_path(7)

    def test_size(self):
        # fixed size in pixel
        self.scene.check_size('500')
        self.sceneSize = 200
        self.dash_duo.find_element('#toggler-size-button').click()
        time.sleep(1)
        self.scene.check_size('200')
        # elastic layout
        # 1920 / 10 = 192
        self.sceneSize = '10vw'
        self.dash_duo.find_element('#toggler-size-button').click()
        time.sleep(1)
        self.scene.check_size('192')
        # check that resize works
        resize_browser_window(1500, 1080, self.dash_duo.driver)
        time.sleep(1)
        self.scene.check_size('150')
        #put back sceneSize to normal
        self.sceneSize = '100%'
        self.dash_duo.find_element('#toggler-size-button').click()
        time.sleep(1)
        self.scene.check_size('500')
        resize_browser_window(1500, 1080, self.dash_duo.driver)
        time.sleep(1)
        self.scene.check_size('500')
        self.sceneSize = '50%'
        self.dash_duo.find_element('#toggler-size-button').click()
        #TODO(chab) add a comment explaining why it's 125, not 250
        time.sleep(1)
        self.scene.check_size('125')
        resize_browser_window(1500, 1080, self.dash_duo.driver)
        time.sleep(1)
        self.scene.check_size('125')
        self.sceneSize = 500

    def test_color_rendering(self):
        # the order of the SVG element does not match the order of the spheres defined in
        # the JSON
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[0], 'rgb(255, 170, 170)')
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[1], 'rgb(17, 17, 17)')
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[2], 'rgb(255, 170, 170)')
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[3], 'rgb(0, 255, 221)')
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[4], 'rgb(255, 170, 170)')
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[5], 'rgb(17, 17, 17)')
        self.scene.check_path_color(
            self.dash_duo.find_elements('path')[6], 'rgb(255, 170, 170)')

    def test_scene_switcher(self):
        # check if adding a new scene clean the old one
        dropdown = self.dash_duo.find_element('#demo-dropdown input')
        dropdown.send_keys('Scene2')
        dropdown.send_keys(Keys.ENTER)
        time.sleep(1)
        # but there are 2 visible spheres, try to understand the path :/
        self.scene.check_path(1)
        dropdown.send_keys('Scene1')
        dropdown.send_keys(Keys.ENTER)
        time.sleep(1)
        self.scene.check_path(7)
        # this will add new elements, as the name of the scene is different
        dropdown.send_keys('Scene3')
        dropdown.send_keys(Keys.ENTER)
        time.sleep(1)
        # investigate... this seems fine with webgl and
        self.scene.check_path(343)
        # test incorrect scene
        dropdown.send_keys('Scene4')
        dropdown.send_keys(Keys.ENTER)
        time.sleep(1)
        self.scene.check_path(343)
