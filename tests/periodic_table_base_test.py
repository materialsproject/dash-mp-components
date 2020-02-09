import dash_mp_components
import dash
from dash.dependencies import Input, Output
from .periodic_table import PeriodicTable
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
# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)

class PeriodicTableBaseTest(unittest.TestCase):

    # it's not possible to inject fixtures at class level, due to a limitation in pytest
    @pytest.fixture(autouse=True)
    def __inject_fixtures(self, mocker, dash_duo):
        self.mocker = mocker
        self.dash_duo = dash_duo

    def setUp(self):
        # move to class methods
        self.periodic_table = PeriodicTable(self.dash_duo, 'periodic-table', ['Fe', 'Co'], [], ['Na'])
        self.app = dash.Dash(__name__)
        self.app.layout = html.Div([
               self.periodic_table.table,
               html.Div(id='component'),
               html.Div(id='dummy-thing')
           ])

        self.stub = self.mocker.stub(name='element_state_callback')
        @self.app.callback(Output('component', 'children'), [Input('periodic-table', 'state')])
        def display_output(value):
            print("Hello World", value)
            self.stub(value)

        resize_browser_window(1920, 1080, self.dash_duo.driver)
        self.dash_duo.start_server(self.app)
        # wait for table to be there
        print('Test started', __name__)
        self.periodic_table.wait_for_table()

    def test_render_component(self):
        assert len(self.periodic_table.find_all_elements()) == 120
        self.stub.assert_called_with([])
        assert self.periodic_table.findElement('Cl').find_element_by_css_selector(".mat-number").text == "17"

    def test_disabled_honored(self):
        self.periodic_table.check_if_element_is_disabled('Fe')
        self.periodic_table.check_if_element_is_disabled('Co')

    def test_hidden_honored(self):
        hidden_element = self.periodic_table.findElement('Na')
        assert ('hidden' in hidden_element.get_attribute('class').split()) is True
        assert hidden_element.find_element_by_css_selector('.mat-number').is_displayed() is False
        assert hidden_element.find_element_by_css_selector('.mat-symbol').is_displayed() is False

    def test_component_click(self):
        self.periodic_table.findElement('H').click()
        self.dash_duo.wait_for_element_by_css_selector('.enabled')
        self.periodic_table.hover_over_element('Pb')
        self.periodic_table.check_if_element_is_enabled('H')
        self.stub.assert_called_with(['H'])
        dy = self.periodic_table.findElement('Dy')
        dy.click()
        self.periodic_table.hover_over_element('Pb')
        self.periodic_table.check_if_element_is_enabled('Dy')

    def check_hover_is_displayed(self):
        self.periodic_table.hover_over_element('He')
        self.periodic_table.checkDetailed("2", "He", "Helium")


