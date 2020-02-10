import pytest
import dash
import dash_html_components as html

from dash_mp_components.test_api import PeriodicTable
from dash_mp_components.test_api import resize_browser_window

# parametrize does not work with unittest
@pytest.mark.parametrize("layout", ['spaced', 'compact', 'small', 'map'])
def test_table_forced_layout(dash_duo, layout):
    periodic_table = PeriodicTable(dash_duo, 'periodic-table', ['Fe', 'Co'], [], ['Na'], layout)
    app = dash.Dash(__name__)
    app.layout = html.Div([
        periodic_table.table,
    ])
    resize_browser_window(1920, 1080, dash_duo.driver)

    dash_duo.start_server(app)
    periodic_table.wait_for_table()


