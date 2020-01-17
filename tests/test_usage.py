from dash.testing.application_runners import import_app
import time
# Basic test for the component rendering.
# The dash_duo pytest fixture is installed with dash (v1.0+)
def test_render_component(dash_duo):
    # Start a dash app contained as the variable `app` in `usage.py`
    app = import_app('usage')
    dash_duo.start_server(app)

    my_component = dash_duo.find_element('div#output')
    my_component.click();


