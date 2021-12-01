import dash
from dash.dependencies import Input, Output, State
from dash import dcc, html
import dash_mp_components

"""
Tests the Select component
"""
def test_select(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      dash_mp_components.Select(
        options=[
          {'value': 'one', 'label': 'one'},
          {'value': 'two', 'label': 'two'}
        ],
        value='one',
        id='select'
      ),
      html.Div([
        'Selected Value: ',
        html.Span(id='selected-value')
      ])
    ])

    @app.callback(
        Output('selected-value', 'children'),
        Input('select', 'value')
    )
    def showSelectedValue(value):
        if not value:
          raise PreventUpdate
        return value

    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    dash_duo.find_element('#select').click()
    selected = dash_duo.find_element('.react-select__option--is-selected')
    assert selected.text == 'one'
    options = dash_duo.find_elements('.react-select__option')
    assert len(options) == 2
    options[1].click()
    assert dash_duo.find_element('#selected-value').text == 'two'