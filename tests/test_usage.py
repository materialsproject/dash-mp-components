import dash_mp_components
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from dash.testing.application_runners import import_app
import time
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
# TODO(chab)
# ST : refine and tests API
# LT : break into multiple small tests, build a page API for each component



class BasePage(object):
    """Base class to initialize the base page that will be called from all pages"""

    def __init__(self, dash_duo):
        self.dash_duo = dash_duo;

class PeriodicTable(BasePage):

    def findElement(self, symbol):
        selector = "//div[./*[normalize-space() = 'Cl']]";
        return self.dash_duo.driver.find_element_by_xpath(selector)
    def checkDetailed(self, number, symbol, name):
        detailed_element = self.dash_duo.driver.find_element_by_css_selector(".detailed")
        detailed_element.find_element_by_css_selector(".number").text == number
        detailed_element.find_element_by_css_selector(".symbol").text == symbol
        detailed_element.find_element_by_css_selector(".name").text == name



def test_render_component(dash_duo, mocker):
    # Start a dash app contained as the variable `app` in `usage.py`


    app = dash.Dash(__name__)


    print("Hello World")
    app.layout = html.Div([
        dash_mp_components.PeriodicTableInput(
            id='periodic-table',
        ),
        html.Div(id='component')
    ])

    stub = mocker.stub(name='element_state_callback')

    @app.callback(Output('component', 'children'), [Input('periodic-table', 'state')])
    def display_output(value):
        print("Hello World", value)
        stub(value)

    if __name__ == '__main__':
        app.run_server(debug=True)

    dash_duo.start_server(app)
    periodic_table = PeriodicTable(dash_duo)

    elements = dash_duo.find_elements('div.mat-element')
    assert len(elements) == 120

# Initial test
    stub.assert_called_with({})

    element = dash_duo.find_element('div.mat-element');
    element.click();
    dash_duo.wait_for_element_by_css_selector('.enabled')
    stub.assert_called_with({'H': True})
    assert periodic_table.findElement('Cl').find_element_by_css_selector(".number").text == "17"

# Test mouse hovering and detail
    element_to_hover_over = dash_duo.find_elements("div.mat-element")[2]
    hover = ActionChains(dash_duo.driver).move_to_element(element_to_hover_over)
    hover.perform()
# Check detail
    periodic_table.checkDetailed("2", "He", "Helium")













