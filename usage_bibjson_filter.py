import dash_mp_components
import dash
import dash_html_components as html
import dash_core_components as dcc
import os

app = dash.Dash(__name__)
app.layout = html.Div([
  dash_mp_components.BibjsonFilter(
    bibjson=[
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
    className="bibjson-test",
    resultClassName="bibjson-test-result"
  )
])
  
if __name__ == '__main__':
  app.run_server(debug=True)