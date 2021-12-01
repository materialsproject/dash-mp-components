import dash
from dash import dcc, html
import dash_mp_components

"""
Tests the Select component based on the react-select library
"""
def test_select(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      dash_mp_components.Select(
        options=[
            {'label': 'One', 'value': 1},
            {'label': 'Two', 'value': 2}
        ],
        value=2,
        isClearable=True,
        arbitraryProps={'closeMenuOnSelect': False}
      )
    ])
    dash_duo.start_server(app)
    assert dash_duo.find_element('.react-select__single-value').text == 'Two'
    dash_duo.find_element('.react-select-container').click()
    assert dash_duo.find_element('.react-select__option:first-child').text == 'One'
    dash_duo.find_element('.react-select__option:first-child').click()
    assert dash_duo.find_element('.react-select__single-value').text == 'One'
    assert dash_duo.find_element('.react-select__clear-indicator')
    dash_duo.find_element('.react-select__clear-indicator').click()
    assert dash_duo.find_element('.react-select__placeholder')