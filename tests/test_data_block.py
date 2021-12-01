import dash
from dash import dcc, html
import dash_mp_components
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

"""
Tests the DataBlock component
"""
def test_data_block(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      dash_mp_components.DataBlock(
        className="box",
        columns=[
          {
            'title': 'Material ID',
            'selector': 'material_id',
            'formatType': 'LINK',
            'formatOptions': {
              'baseUrl': 'https://lbl.gov',
              'target': '_blank',
            },
            'isTop': True,
          },
          {
            'title': 'Formula',
            'selector': 'formula_pretty',
            'formatType': 'FORMULA',
            'isTop': True,
          },
          {
            'title': 'Data',
            'selector': 'data',
            'formatType': 'ARRAY',
            'formatOptions': {
              'arrayTooltipsKey': 'dataTooltips',
            },
          },
          {
            'title': 'Tables',
            'selector': 'tables',
            'formatType': 'ARRAY',
            'formatOptions': {
              'arrayTooltipsKey': 'tablesTooltips',
              'arrayLinksKey': 'tablesLinks',
              'arrayLinksDownload': True,
            },
            'isTop': True,
            'isBottom': True,
          },
          {
            'title': 'Description',
            'selector': 'description',
            'isBottom': True,
          },
        ],
        data={
          'material_id': 'mp-777',
          'formula_pretty': 'MnO2',
          'volume': 34.88345346,
          'data': [1, 2, 3, 1, 2, 3, 1, 2, 3],
          'dataTooltips': ['test', 'test', 'test', 'test'],
          'tables': [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
          'tablesTooltips': ['test', 'test'],
          'tablesLinks': ['https://lbl.gov', 'https://lbl.gov'],
          'description': 'Ab-initio electronic transport database for inorganic materials. Here are reported the\naverage of the eigenvalues of conductivity effective mass (mₑᶜᵒⁿᵈ), the Seebeck coefficient (S),\nthe conductivity (σ), the electronic thermal conductivity (κₑ), and the Power Factor (PF) at a\ndoping level of 10¹⁸ cm⁻³ and at a temperature of 300 K for n- and p-type. Also, the maximum\nvalues for S, σ, PF, and the minimum value for κₑ chosen among the temperatures [100, 1300] K,\nthe doping levels [10¹⁶, 10²¹] cm⁻³, and doping types are reported. The properties that depend\non the relaxation time are reported divided by the constant value 10⁻¹⁴. The average of the\neigenvalues for all the properties at all the temperatures, doping levels, and doping types are\nreported in the tables for each entry. A legend of the columns of the table is provided below.',
        }
      )
    ])
    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    assert len(dash_duo.find_elements('.mpc-data-block-header .mpc-data-block-item')) == 4
    dash_duo.find_element('.mpc-data-block-caret').click()
    assert len(dash_duo.find_elements('.Collapsible__trigger.is-open')) == 1