import dash
from dash import dcc, html
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate

import dash_mp_components
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time 

'''
Tests the DataTable component
'''
def test_data_block(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div(
      [
        html.Button('Change Data', id='data-button'),
        html.Div(
          [
            dash_mp_components.DataTable(
              id="table-1",
              columns=[
                {
                  'title': 'A',
                  'selector': 'a',
                },
                {
                  'title': 'B',
                  'selector': 'b',
                },
              ],
              data=[
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2},
                {'a': 1, 'b': 2}
              ]
            )
          ], 
          id='table-wrapper'
        )
      ]
    )

    @app.callback(
        Output('table-1', 'data'),
        Input('data-button', 'n_clicks')
    )
    def showSelectedValue(n_clicks):
        if n_clicks > 0:
          return [
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20},
            {'a': 100, 'b': 20}
          ]
        else:
          raise PreventUpdate

    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    assert len(dash_duo.find_elements('.rdt_TableRow')) == 8
    assert dash_duo.find_element('.rdt_TableCell').text == '1'
    dash_duo.find_element('#data-button').click()
    assert dash_duo.find_element('.rdt_TableCell').text == '100'