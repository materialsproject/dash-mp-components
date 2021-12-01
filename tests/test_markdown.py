import dash
from dash import dcc, html
import dash_mp_components
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

"""
Tests the Markdown component
"""
def test_markdown(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      dash_mp_components.Markdown(
        """
        # Heading 1
        ## Heading 2
        
        This is a [link](https://github.com/materialsproject/api).
        
        ~~~python
        from mp_api.matproj import MPRester
        ~~~

        ~strike~

        $$
        L = \\frac{1}{2} \\rho v^2 S C_L
        $$
        """,
        id='markdown'
      )
    ])
    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    assert len(dash_duo.find_elements('#heading-1')) == 1
    assert len(dash_duo.find_elements('a')) == 1
    assert len(dash_duo.find_elements('.hljs.language-python')) == 1
    assert len(dash_duo.find_elements('del')) == 1
    assert len(dash_duo.find_elements('.math.math-display')) == 1