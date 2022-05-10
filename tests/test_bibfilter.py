import dash
from dash import dcc, html
import dash_mp_components
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

"""
Tests the BibFilter component
"""
def test_bibfilter(dash_duo):
    app = dash.Dash(__name__)
    app.layout = html.Div([
      dash_mp_components.BibFilter(
        format="bibjson",
        bibEntries=[
          {
            "journal": "Physical Review X",
            "year": "2015",
            "issn": "21603308",
            "isbn": "2160-3308",
            "doi": "10.1103/PhysRevX.5.011006",
            "author": ["Agapito, Luis A.", "Curtarolo, Stefano", "Nardelli, Marco Buongiorno"],
            "title": "Reformulation of DFT + U as a Pseudohybrid Hubbard Density Functional for Accelerated Materials Discovery",
            "ENTRYTYPE": "article",
            "ID": "agapito2015"
          },
          {
            "journal": "Physical Review B",
            "year": "2017",
            "issn": "24699969",
            "doi": "10.1103/PhysRevB.95.174110",
            "author": ["Angsten, Thomas", "Martin, Lane W.", "Asta, Mark"],
            "title": "Orientation-Dependent Properties of Epitaxially Strained Perovskite Oxide Thin Films: Insights from First-Principles Calculations",
            "ENTRYTYPE": "article",
            "ID": "angsten2017"
          }
        ],
        sortField="year",
        ascending=False,
        className="bib-test",
        resultClassName="bib-test-result"
      )
    ])
    dash_duo.start_server(app)
    dash_duo.driver.implicitly_wait(10)
    dash_duo.find_element('.mpc-bib-filter-input').send_keys('Reformulation of DFT')
    assert len(dash_duo.find_elements('.mpc-bib-card')) == 1
    dash_duo.find_element('.mpc-bib-filter-input').clear()
    dash_duo.find_element('.mpc-bib-filter-input').send_keys(' ')
    dash_duo.find_element('.mpc-bib-filter-input').clear()
    assert len(dash_duo.find_elements('.mpc-bib-card')) == 2
    dash_duo.find_element('.mpc-sort-button').click()
    first_result = dash_duo.find_elements('.mpc-bib-card')[0]
    assert first_result.find_element_by_css_selector('.mpc-publication-button').text == 'Physical Review X, 2015'