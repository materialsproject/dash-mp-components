import dash
from dash import dcc, html
import dash_mp_components
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

"""
Tests the Tooltip component
"""
def test_tooltip(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      html.Span(
        'Hover me',
        id='trigger',
        **{
          'data-tip': True,
          'data-for': 'tooltip-1'
        }
      ),
      dash_mp_components.Tooltip(
        'test tooltip',
        id='tooltip-1'
      )
    ])
    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    trigger_element = dash_duo.find_element('#trigger')
    hover = ActionChains(dash_duo.driver).move_to_element(trigger_element)
    hover.perform()
    assert len(dash_duo.find_elements('.show.__react_component_tooltip')) == 1