import dash_mp_components
import dash
from dash.dependencies import Input, Output
from .periodic_table import PeriodicTable
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

def test_render_component(dash_duo, mocker):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = dash.Dash(__name__)
    app.layout = html.Div([
           dash_mp_components.PeriodicTableInput(
               disabledElements={'Fe': True, 'Co':True},
               enabledElements={},
               hiddenElements={'Na': True },
               id='periodic-table',
           ),
           html.Div(id='component'),
           html.Div(id='dummy-thing')
       ])

    stub = mocker.stub(name='element_state_callback')
    @app.callback(Output('component', 'children'), [Input('periodic-table', 'state')])
    def display_output(value):
        print("Hello World", value)
        stub(value)

    if __name__ == '__main__':
        app.run_server(debug=True)
    print(dash_duo.driver.get_window_size())
    dash_duo.driver.set_window_size(1920, 1080)
    size = dash_duo.driver.get_window_size()

    dash_duo.start_server(app)
    periodic_table = PeriodicTable(dash_duo)
    # wait for table to be there
    print('Test started')
    time.sleep(1)
    dash_duo.wait_for_element_by_css_selector('div.mat-element')

    elements = dash_duo.find_elements('div.mat-element:not(.detailed)')
    assert len(elements) == 120

# Initial test
    stub.assert_called_with({})

    periodic_table.findElement('H').click();
    dash_duo.wait_for_element_by_css_selector('.enabled')
    stub.assert_called_with({'H': True})
    assert periodic_table.findElement('Cl').find_element_by_css_selector(".number").text == "17"
    print ('caca', periodic_table.findElement('H').get_attribute('class').split());
    print ('asda', periodic_table.findElement('H').text);
    assert ('disabled' in periodic_table.findElement('Fe').get_attribute('class').split()) == True
    hidden_element = periodic_table.findElement('Na')
    assert ('hidden' in hidden_element.get_attribute('class').split()) == True
    assert hidden_element.find_element_by_css_selector('.number').is_displayed() == False
    assert hidden_element.find_element_by_css_selector('.symbol').is_displayed() == False

    periodic_table.check_if_element_has_class('Fe', 'disabled')
    periodic_table.check_if_element_has_class('Co', 'disabled')

    #clashes with main-pane
    #periodic_table.check_if_element_has_class('H', 'enabled')
    periodic_table.findElement('Dy').click();

    #hover to an element to prevent two elements with the same symbol
    element_to_hover_over = periodic_table.findElement('H')
    periodic_table.hover_over_element('H')
    periodic_table.check_if_element_has_class('Dy', 'enabled')

# Test mouse hovering and detail
    periodic_table.hover_over_element('He')
# Check detail
    periodic_table.checkDetailed("2", "He", "Helium")














