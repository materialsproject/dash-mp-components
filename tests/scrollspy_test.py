import dash
from dash import dcc, html
import dash_mp_components
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

"""
Tests the basic scrollspy functionality
Ensures first link is active initially
Ensures second link is active after its item is scrolled to
"""
def test_scrollspy_menu(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div(className='scrollspy', children=[
      dash_mp_components.Scrollspy(
        menuGroups=[{'label': 'Table of Contents', 'items': [{'label': 'One', 'targetId': 'one'}, {'label': 'Two', 'targetId': 'two'}, {'label': 'Three', 'targetId': 'three'}]}],
        menuClassName="menu",
        menuItemContainerClassName="menu-list",
        activeClassName="is-active",
        offset=0
      ),
      html.Div(className='content', children=[
          html.Div(id='one', style={'height': '600px'}, children=[
              html.H1('One'),
              html.P('lorem ipsum'),
          ]),
          html.Div(id='two', style={'height': '600px'}, children=[
              html.H1('Two'),
              html.P('lorem ipsum'),
          ]),
          html.Div(id='three', style={'height': '600px'}, children=[
              html.H1('Three'),
              html.P('lorem ipsum'),
          ]),
      ])
    ])
    dash_duo.start_server(app)
    dash_duo.driver.set_window_size(1920, 1080)
    body = WebDriverWait(dash_duo.driver, 10).until(
        EC.visibility_of_element_located((By.TAG_NAME, "a"))
    )
    dash_duo.driver.execute_script("window.scrollTo(0, 0);")
    links = dash_duo.find_elements('a')
    assert links[0].text == 'One'
    assert links[0].get_attribute('class') == 'is-active'
    second_block = dash_duo.find_element('#two')
    dash_duo.driver.execute_script("arguments[0].scrollIntoView();", second_block)
    second_link_active = WebDriverWait(dash_duo.driver, 10).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, "a.is-active:nth-child(1)"))
    )
    assert second_link_active.text == 'Two'